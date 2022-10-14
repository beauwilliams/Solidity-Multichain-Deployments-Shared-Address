import { spawnSync } from "child_process";
import { mkdirSync, existsSync, writeFileSync } from "fs";
import { Signer } from "@ethersproject/abstract-signer";
import { task } from "hardhat/config";
//Static security analysis via Slither
task("audit", "Runs an internal audit using Slither").setAction(async () => {
  const child = spawnSync(
    "slither",
    ["--filter-paths", "node_modules", "--exclude", "naming-convention", ".", "--checklist"],
    { encoding: "utf-8" },
  );

  console.log(child.stderr);
  var dir = "./reports";

  //NOTE: make report/ dir if not exist already
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  writeFileSync("reports/slither-security-audit.md", child.stdout);
});
