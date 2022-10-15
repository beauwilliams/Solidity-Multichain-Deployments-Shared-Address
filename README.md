#  Solidity-Multichain-Deployments-Shared-Address


<img width="1065" alt="Screen Shot 2022-10-15 at 2 31 58 pm" src="https://user-images.githubusercontent.com/7098556/195967186-4fc99424-80c1-4256-9ae0-cfe12dfb08cd.png">


## STEPS

### 1. Ensure your account has the same nonce on each network

NOTE: The address that a contract will get at deployment is computed as `H($ACCOUNT_ADDRESS + $ACCOUNT_NONCE + $CONTRACT_BYTECODE) where H is a universal hash function (keccak256)`

Nonces start at 0 for a fresh account. So a deployment wallet needs the same nonce on each network. The nonce will match the amount of contracts deployed from that wallet.
In other words, deploying the contract will increment the wallets nonce by +1

Run `npx hardhat wallet --address 0x0123ABC`


i.e, here is an example, you wish to have the nonces equal on all networks you wish to deploy on

```bash
[
  [ '  |NETWORK|   |NONCE|   |BALANCE|  ' ],
  [ 'Ethereum Goerli:', 1, '1.47ETH' ],
  [ 'Polygon  Mumbai:', 1, '9.99ETH' ],
  [ 'Arbitrum Rinkby:', 1, '1.49ETH' ],
  [ 'Optimism Goerli:', 1, '2.26ETH' ]
]
```

With our nonces set equally as above, deploying the SAME contract, to MULTIPLE networks from the SAME wallet will result in EQUAL contract addresses on each network


### 2. Deploy a Deterministic Deploy Factory Contract


```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract DeterministicDeployFactory {
    event Deploy(address addr);

    function deploy(bytes memory bytecode, uint256 _salt) external {
        address addr;
        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), _salt)
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }

        emit Deploy(addr);
    }
}

```

### 3. Deploy contracts using our Deploy Factory Contract




###

## OVERVIEW

Includes deployment configurations, testing framework, contract upgrades pattern, gas usage report, security analysys audit, test coverage report.. did I also mention it's blazingly fast 😏

## GET STARTED

This project uses a [task runner called just, for convenience](https://github.com/casey/just)

```
Available recipes:
    default
    install *PACKAGES
    update
    compile
    deploy-localhost
    deploy-testnet
    verify-testnet
    test
    lint
    start
    format
    audit
    print-audit
    print-gas-usage
    print-deployments
    clean
```

### Running tests and audits

- Run the unit tests with `just test`
- Statically analyse code for vulnerabilities with `just audit`


### Starting a new project from this template

- Clean the workspace (to start a new project, removing example code and scripts) using `just clean`
- Create your solidity code in `/contracts`, tests in `/test` and deploy/verify scripts in `/scripts`


## FAQ

### Error compiling contracts on freshly cloned repo

`Error HH12: Trying to use a non-local installation of Hardhat, which is not supported.
Please install Hardhat locally using npm or Yarn, and try again.`

Run `npm i` to fix this error which will install hardhat

### Performance optimizations
For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable TS_NODE_TRANSPILE_ONLY to 1 in hardhat's environment. For more details see the documentation.


### Husky

ERROR ON COMMIT -> `husky > pre-commit hook failed (add --no-verify to bypass)`
RESOLUTION -> Remove errors from your smart contracts, found running `npm run lint`, or commit using --no-amend flag to temporarily bypass.


### Error running audit task
Ensure [Slither](https://github.com/crytic/slither) is installed and in your $PATH

## DEMO

![demo](https://i.ibb.co/tY00DR0/Screen-Shot-2022-07-13-at-1-57-15-pm.png)

## TODO

- [ ] Fix prettier plugin sol hint not working nvim (Remove prettier plugin from sol hint.son to fix)
