#  Hardhat-Starter-Template

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
