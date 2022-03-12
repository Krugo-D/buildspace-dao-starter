import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5fa61ddbd6960AFFAf4A47d3cA565d661472530A",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Certificate of Kek",
        description: "This NFT will give you access to lolDAO",
        image: readFileSync("scripts/assets/pepecertificate.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()