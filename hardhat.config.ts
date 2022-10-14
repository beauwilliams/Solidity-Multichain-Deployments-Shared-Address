import { spawnSync } from 'child_process';
import { writeFileSync } from 'fs';
import { HardhatUserConfig, task } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";
import "@openzeppelin/hardhat-upgrades"
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-solhint";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import 'hardhat-deploy'
import "solidity-coverage";
import "@atixlabs/hardhat-time-n-mine"; //Use me to mine blocks in dev for time based contracts
import "./tasks" //tasks - e.g npx hardhat audit


import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();


/* interface Etherscan {
  etherscan: { apiKey: string | undefined };
}
type HardhatUserEtherscanConfig = HardhatUserConfig & Etherscan; */

//NOTE: Debugger
/* const DEBUG = false;
function debug(text: String) {
  if (DEBUG) {
    console.log(text);
  }
} */

//This well known public private key is a backup if private key env var not set
const defaultPrivateKey = "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
    ],
  },
  networks: {
    localhost: {},
    hardhat: {
      accounts: {
        count: 20, // Adjust the number of accounts available when using the local Hardhat network
      },
    },
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
    ropsten: {
      url: process.env.ROPSTEN_RPC_URL || defaultPrivateKey,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      saveDeployments: true
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL || defaultPrivateKey,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      saveDeployments: true
    },
    kovan: {
      url: process.env.KOVAN_RPC_URL || defaultPrivateKey,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      saveDeployments: true
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL || defaultPrivateKey,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      saveDeployments: true
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL || defaultPrivateKey,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      saveDeployments: true
    },
    /* polygon_mumbai_testnet: {
      url: "https://speedy-nodes-nyc.moralis.io//polygon/mumbai",
      accounts:[privateKey],
    }, */
    // polygon_mainnet: {},
    /* avalanche_testnet_fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43113,
      accounts: []
    },
    avalanche_mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43114,
      accounts: []
    } */
  },
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts/*",
    outputFile: "./reports/hardhat-gas-usage-report.md",
    token: process.env.REPORT_GAS ? "ETH" : undefined,
  },
  etherscan: {
    apiKey: {
      arbitrumOne: process.env.ARBISCAN_API_KEY || "",
      avalanche: process.env.SNOWTRACE_API_KEY || "",
      bsc: process.env.BSCSCAN_API_KEY || "",
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      goerli: process.env.ETHERSCAN_API_KEY || "",
      optimisticEthereum: process.env.OPTIMISM_API_KEY || "",
      polygon: process.env.POLYGONSCAN_API_KEY || "",
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
      rinkeby: process.env.ETHERSCAN_API_KEY || "",
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
};

export default config;
