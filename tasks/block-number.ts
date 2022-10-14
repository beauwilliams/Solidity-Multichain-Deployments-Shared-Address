import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers"

task(
  "block-number",
  "Prints the current block number",
  async (_, { ethers }) => {
    await ethers.provider.getBlockNumber().then((blockNumber) => {
      console.log("Current block number: " + blockNumber);
    });
  }
);
