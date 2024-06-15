import * as crypto from "crypto";

// Function to generate a random string
export function generateRandomString(length: number): string {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") // Convert to hexadecimal format
    .slice(0, length); // Return required number of characters
}

// Function to generate the code verifier
export function generateCodeVerifier(): string {
  const codeVerifier = generateRandomString(64); // Generate a random string of length 64
  return codeVerifier;
}

// Function to generate the code challenge based on the code verifier
export function generateCodeChallenge(codeVerifier: string): string {
  const codeChallenge = crypto
    .createHash("sha256")
    .update(codeVerifier)
    .digest("base64") // Generate base64-encoded hash
    .replace(/\+/g, "-") // Replace '+' with '-'
    .replace(/\//g, "_") // Replace '/' with '_'
    .replace(/=/g, ""); // Remove any trailing '=' characters

  return codeChallenge;
}
