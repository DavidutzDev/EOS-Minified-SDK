import * as dotenv from "dotenv";
dotenv.config();

const Constants = {
  PlatformDiscriminator: process.env.PlatformDiscriminator,
  ProductId: process.env.ProductId,
  ApplicationId: process.env.ApplicationId,
  SandboxId: process.env.SandboxId,
  DeploymentId: process.env.DeploymentId,
  ClientCredentialsId: process.env.ClientCredentialsId,
  ClientCredentialsSecret: process.env.ClientCredentialsSecret,
  GameName: process.env.GameName,
  EncryptionKey: process.env.EncryptionKey,
  SDK_EOSVersion: process.env.SDK_EOSVersion || "1.16.3-32303053",
  OAuthURL: `https://www.epicgames.com/id/authorize?client_id=${process.env.ClientCredentialsId}&response_type=code&scope=openid%20offline_access%20basic_profile%20friends_list%20presence&redirect_uri=${process.env.RedirectUri}`,
};

export default Constants;
