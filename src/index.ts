import { EOSClient } from "./client/eos";
import { PlayerClient } from "./client/player";

const SdkClient: EOSClient = new EOSClient();

async function main() {
  console.log(
    "------------------------- EOS SDK MINIFIED FOR JS -------------------------"
  );

  await SdkClient.init();

  const PlClient: PlayerClient = new PlayerClient(SdkClient.EOSSdkConfig);

  await PlClient.init();

  const friends = await PlClient.getFriends();

  console.log(`----- Friends list of ${PlClient.getDisplayName()}`);
  for (const friend of friends.data.Friends.summary.friends) {
    console.log(`- ${friend.account[0].displayName}`);
  }
}

main();
