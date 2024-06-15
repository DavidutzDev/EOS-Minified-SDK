import Constants from "../constants";
import GraphqlService from "../services/graphql";
import HttpService from "../services/http";
import { createBasicAuthHeader, getDefaultHeaders } from "../utils/headers";
import { AccessTokenResponse, EOSSdkConfig } from "./types";

export class EOSClient {
  HttpClient = new HttpService();
  GraphQLClient = new GraphqlService(
    "https://graphql.epicgames.com/overlay/grapqhql"
  );

  EOSSdkConfig: EOSSdkConfig;

  constructor() {}

  public async init(): Promise<EOSSdkConfig> {
    const plaformDiscriminator = Constants.PlatformDiscriminator;

    console.log(`Platform Discriminator set to : ${plaformDiscriminator}`);

    console.log(`Fetching SDK config from Epic Game Services...`);
    await this.getSdkConfig(plaformDiscriminator);

    /** This token seems to be used only for telemetry */
    console.log(`Generating SDK Access Token...`);
    await this.generateAccessToken();

    console.log(`Sending SDK Startup signal...`);
    const startup = await this.sendSdkStartup();

    if (!startup) throw new Error("Failed to startup sdk");

    console.log(`SDK initialized`);

    return this.EOSSdkConfig;
  }

  /** STARTUP FUNCTIONS */

  // #1
  public async getSdkConfig(platformId: string): Promise<EOSSdkConfig> {
    const response = await this.HttpClient.get(
      `https://api.epicgames.dev/sdk/v1/default?platformId=${platformId}`,
      { headers: getDefaultHeaders() }
    );

    this.EOSSdkConfig = response as EOSSdkConfig;

    return this.EOSSdkConfig;
  }

  // #2
  public async generateAccessToken(): Promise<AccessTokenResponse> {
    const response = await this.HttpClient.postUrlEncodedForm(
      `https://api.epicgames.dev/auth/v1/oauth/token`,
      {
        grant_type: "client_credentials",
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

    return response as AccessTokenResponse;
  }

  // #3
  public async sendSdkStartup(): Promise<boolean> {
    const response = await this.HttpClient.post(
      `https://api.epicgames.dev/datarouter/api/v1/public/data/clients?AppID=${Constants.ApplicationId}&AppVersion=${Constants.SDK_EOSVersion}&AppEnvironment=${Constants.SandboxId}&UploadType=eteventstream`,
      {
        Events: [
          {
            EventName: "GameStartup",
            deploymentId: Constants.DeploymentId,
            platform: "Windows 8 6.2.9200.1.256.64bit",
            source: "client",
          },
        ],
      },
      {
        headers: {
          ...getDefaultHeaders(),
        },
      }
    );

    return response != null;
  }

  /** USER LOGIN */
}
