#!/bin/bash

echo "Cleaning up..."
select yn in "Yes" "No"; do
  case $yn in
    Yes ) rm -rf ./.git && rm -rf ./artifacts/* && rm -rf ./contracts/* && rm -rf ./test/* && rm -rf ./scripts/deploy.ts && rm -rf ./scripts/upgrade.ts && rm -rf ./scripts/verify.ts && rm -rf ./nyc_output/* && rm -rf ./coverage/* && rm -rf ./deployments/* && rm -rf ./cache/* && rm -rf ./open-zeppelin/* && rm -rf ./typechain/* && exit;;
    No ) break;;
  esac
done

echo "Would you like to install npm packages? It is required to compile contracts that hardhat is installed locally"
select yn in "Yes" "No"; do
  case $yn in
    Yes ) npm install && exit;;
    No ) exit;;
  esac
done
