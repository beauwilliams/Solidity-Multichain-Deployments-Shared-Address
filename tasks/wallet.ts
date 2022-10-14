// NOTE: Use me to get the nonces for deterministic deployments. A wallet needs nonces on all chains equal to get the same deployment address on each
import { task } from "hardhat/config";
import { createAlchemyWeb3 } from "@alch/alchemy-web3"
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

task("wallet", "returns nonce and balance for specified address on multiple networks")
  .addParam("address")
  .setAction(async address => {
    const web3Goerli = createAlchemyWeb3(process.env.ALCHEMY_API_URL_GOERLI);
    const web3Mumbai = createAlchemyWeb3(process.env.ALCHEMY_API_URL_MUMBAI);

    const networkIDArr = ["Ethereum Goerli:", "Polygon  Mumbai:"]
    const providerArr = [web3Goerli, web3Mumbai];
    const resultArr = [];

    for (let i = 0; i < providerArr.length; i++) {
      const nonce = await providerArr[i].eth.getTransactionCount(address.address, "latest");
      const balance = await providerArr[i].eth.getBalance(address.address)
      resultArr.push([networkIDArr[i], nonce, parseFloat(providerArr[i].utils.fromWei(balance, "ether")).toFixed(2) + "ETH"]);
    }
    resultArr.unshift(["  |NETWORK|   |NONCE|   |BALANCE|  "])
    console.log(resultArr);
  });
