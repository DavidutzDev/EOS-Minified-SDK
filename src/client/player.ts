import Constants from "../constants";
import HttpService from "../services/http";
import { createBasicAuthHeader, getDefaultHeaders } from "../utils/headers";
import {
  generateCodeChallenge,
  generateCodeVerifier,
  generateRandomString,
} from "../utils/pkce";
import { getFriendsList } from "./friends";
import {
  AccountInformations,
  AuthResponseV1,
  AuthResponseV2,
  EOSSdkConfig,
  ExchangeCodeResponse,
  FriendsResponse,
} from "./types";
import * as readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class PlayerClient {
  private EOSSdkConfig: EOSSdkConfig;

  private AccountV1: AuthResponseV1;
  private AccountV2: AuthResponseV2;
  private AccountInfos: AccountInformations;
  private SocialAccount: AuthResponseV2;

  HttpClient = new HttpService();

  constructor(eosSdkConfig: EOSSdkConfig) {
    this.EOSSdkConfig = eosSdkConfig;
  }

  public async init() {
    console.log(`-- Player Auth --`);

    console.log(`OAuth URL : ${Constants.OAuthURL}\n\n`);

    const code = await rl.question("Paste code here: ");

    console.log(`\n Authenticating...`);

    await this.authUserByAuthorizationCode(code);

    if (!this.AccountV2) throw new Error("Failed to authenticate user");

    console.log(`\n Authenticated as: ${this.AccountV2.account_id}`);

    console.log(`\n Retrieving sumpletary account informations...`);

    await this.authUserByAccessToken(this.AccountV2.access_token);

    if (!this.AccountV1) throw new Error("Failed to authenticate user");

    console.log(`\n Retrieving account informations...`);

    await this.getAccountInformations();

    if (!this.AccountInfos) throw new Error("Failed to authenticate user");

    console.log(`Logging with the Social Service...`);

    // Starting PKCE AUTH FLOW
    const pkceVerifier = generateCodeVerifier();

    const exchangeCode = await this.generateExchangeToken(pkceVerifier);

    await this.validateExchangeToken(pkceVerifier, exchangeCode.code);

    if (!this.SocialAccount) throw new Error("Failed to authenticate user");
  }

  async authUserByAuthorizationCode(code: string): Promise<AuthResponseV2> {
    const response = await this.HttpClient.postUrlEncodedForm(
      `https://api.epicgames.dev/epic/oauth/v2/token`,
      {
        grant_type: "authorization_code",
        code,
        deployment_id: Constants.DeploymentId,
      },
      {
        headers: {
          ...getDefaultHeaders(),
          ...createBasicAuthHeader(
            Constants.ClientCredentialsId,
            Constants.ClientCredentialsSecret
          ),
        },
      }
    );

    this.AccountV2 = response as AuthResponseV2;

    return this.AccountV2;
  }

  async authUserByAccessToken(accessToken: string): Promise<AuthResponseV1> {
    const nonce = generateRandomString(22);

    const response = await this.HttpClient.postUrlEncodedForm(
      `https://api.epicgames.dev/auth/v1/oauth/token`,
      {
        grant_type: "external_auth",
        external_auth_type: "epicgames_access_token",
        external_auth_token: accessToken,
        deployment_id: Constants.DeploymentId,
        nonce,
      },
      {
        headers: {
          ...getDefaultHeaders(),
          ...createBasicAuthHeader(
            Constants.ClientCredentialsId,
            Constants.ClientCredentialsSecret
          ),
        },
      }
    );

    this.AccountV1 = response as AuthResponseV1;

    return this.AccountV1;
  }

  async generateExchangeToken(verifier: string): Promise<ExchangeCodeResponse> {
    const consumingClientId =
      this.EOSSdkConfig.client["UIClient"].SocialSPAClientId;
    const codeChallenge: string = generateCodeChallenge(verifier);
    const codeChallengeMethod: string = "S256";

    const response = await this.HttpClient.get(
      `https://api.epicgames.dev/epic/oauth/v2/exchange?consumingClientId=${consumingClientId}&codeChallenge=${codeChallenge}&codeChallengeMethod=${codeChallengeMethod}`,
      {
        headers: {
          ...getDefaultHeaders(),
          Authorization: "Bearer " + this.AccountV2.access_token,
        },
      }
    );

    return response as ExchangeCodeResponse;
  }

  async validateExchangeToken(
    codeVerifier: string,
    code: string
  ): Promise<AuthResponseV2> {
    const response = await this.HttpClient.post(
      `https://social-overlay-token-exchange-api-prod.ol.epicgames.com/v1/exchange`,
      {
        codeVerifier,
        exchangeCode: code,
      },
      {
        headers: {
          ...getDefaultHeaders(),
        },
      }
    );

    this.SocialAccount = response as AuthResponseV2;

    return this.SocialAccount;
  }

  async getAccountInformations() {
    const response = await this.HttpClient.get(
      `https://api.epicgames.dev/epic/id/v2/sdk/accounts?accountId=${this.AccountV2.account_id}`,
      {
        headers: {
          ...getDefaultHeaders(),
          Authorization: "Bearer " + this.AccountV2.access_token,
        },
      }
    );

    this.AccountInfos = response[0] as AccountInformations;

    return this.AccountInfos;
  }

  public getDisplayName() {
    return this.AccountInfos.displayName;
  }

  public async getFriends(): Promise<FriendsResponse> {
    return await getFriendsList(this.SocialAccount);
  }
}
