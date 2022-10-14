import { ethers } from "hardhat";
import chai, { expect } from "chai";
import { solidity } from "ethereum-waffle";
import {
  DeterministicDeployFactory,
  DeterministicDeployFactory__factory,
  MyToken,
  MyToken__factory,
} from "../typechain";
chai.use(solidity);

describe("Test Suite", function () {
  let DeterministicDeployContract: DeterministicDeployFactory;
  let MyTokenContract: MyToken;
  let DeterministicDeployContractFactory: DeterministicDeployFactory__factory;
  let MyTokenContractFactory: MyToken__factory;

  before(async () => {
    // NOTE: Alternative way to write types
    /* DeterministicDeployContractFactory = (await ethers.getContractFactory("DeterministicDeployFactory")) as DeterministicDeployFactory__factory
    MyTokenContractFactory = (await ethers.getContractFactory("MyToken")) as MyToken__factory

    DeterministicDeployContract = await DeterministicDeployContractFactory.deploy()
    MyTokenContract = await MyTokenContractFactory.deploy()
    await DeterministicDeployContract.deployed()
    await MyTokenContract.deployed() */

    DeterministicDeployContractFactory = <DeterministicDeployFactory__factory>(
      await ethers.getContractFactory("DeterministicDeploy")
    );
    MyTokenContractFactory = <MyToken__factory>(
      await ethers.getContractFactory("MyToken")
    );
    DeterministicDeployContract =
      await DeterministicDeployContractFactory.deploy();
    MyTokenContract = await MyTokenContractFactory.deploy();
    await DeterministicDeployContract.deployed();
    await MyTokenContract.deployed();
  });


  describe("Test Case", function () {
  it ("Should deploy a contract", async () => {
  await DeterministicDeployContract.deployContract(MyTokenContract.address, "0x0000000000000000000000000000000000000000000000000000000000000000")
});
// let DeterministicDeployFactory:

/* before(async () => {
  });
const main = async () => {
  const Factory = await ethers.getContractFactory("DeterministicDeployFactory");
  const factory = await Factory.deploy();
  await factory.deployed();
  const factoryAddress = factory.address
  const addressObject = {
    factory: factoryAddress
  }
  console.log("Factory has been deployed at ", factoryAddress);
  await fs.writeFile('./addresses/address.json', JSON.stringify(addressObject));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); */
