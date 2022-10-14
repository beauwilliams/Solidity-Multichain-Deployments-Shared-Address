/* import { task } from "hardhat/config";
import { TASK_CIRCOM } from "hardhat-circom";
import { TASK_COMPILE } from "hardhat/builtin-tasks/task-names";

task(TASK_COMPILE, "hook compile task to include circuit compile and template").setAction(circuitsCompile);

async function circuitsCompile(args, hre, runSuper) {
  await hre.run(TASK_CIRCOM, args);
  await runSuper();
} */
