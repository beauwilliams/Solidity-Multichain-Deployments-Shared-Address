/*
@USAGE: example test with our time mine fn
describe('Test contract utils methods', () => {
    it('timeLeft() return 0 after deadline', async () => {
      await increaseWorldTimeInSeconds(180, true);

      const timeLeft = await stakingContract.timeLeft();
      expect(timeLeft).to.equal(0);
    });
*/

import {network} from "hardhat";

export const increaseWorldTimeInSeconds = async (seconds: number, mine = false) => {
  console.log("Increasing block time...")
  await network.provider.send('evm_increaseTime', [seconds]);
  if (mine) {
    await network.provider.send('evm_mine', []);
  }
    console.log(`Increased block tim by ${seconds} seconds`)
};
