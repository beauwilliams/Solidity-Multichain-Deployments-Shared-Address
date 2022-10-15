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
  let MyTokenBytecode: string;
  let salt = 123456

  before(async () => {
    // NOTE: Alternative way to write types
    /* DeterministicDeployContractFactory = (await ethers.getContractFactory("DeterministicDeployFactory")) as DeterministicDeployFactory__factory
    MyTokenContractFactory = (await ethers.getContractFactory("MyToken")) as MyToken__factory

    DeterministicDeployContract = await DeterministicDeployContractFactory.deploy()
    MyTokenContract = await MyTokenContractFactory.deploy()
    await DeterministicDeployContract.deployed()
    await MyTokenContract.deployed() */

    DeterministicDeployContractFactory = <DeterministicDeployFactory__factory>(
      await ethers.getContractFactory("DeterministicDeployFactory")
    );
    MyTokenContractFactory = <MyToken__factory>(
      await ethers.getContractFactory("MyToken")
    );
    DeterministicDeployContract =
    await DeterministicDeployContractFactory.deploy();
    await DeterministicDeployContract.deployed();
    MyTokenBytecode = DeterministicDeployContractFactory.bytecode;
  });

  describe("Test Case", function () {
    it("Should deploy MyToken with deterministic address", async () => {
      await DeterministicDeployContract.deploy(MyTokenBytecode, salt);
    });
  });
});
