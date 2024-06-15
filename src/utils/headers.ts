import Constants from "../constants";

export function getDefaultHeaders(): { [key: string]: string } {
  return {
    "User-Agent": getUserAgent(),
    "X-EOS-Version": Constants.SDK_EOSVersion,
  };
}

export function getUserAgent(): string {
  return `EOS-SDK/${Constants.SDK_EOSVersion} (Windows/10.0.22621.3374.64bit) ${Constants.GameName}/1.0`;
}

export function createBasicAuthHeader(
  username: string,
  password: string
): { Authorization: string } {
  const base64Credentials = Buffer.from(`${username}:${password}`).toString(
    "base64"
  );
  return { Authorization: `Basic ${base64Credentials}` };
}
