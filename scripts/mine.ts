/*  This Script is used to mine 5 blockd -> move a block on a local blockchain
    To execute script on local network
    1. `yarn hardhat node``
    2. `yarn hardhat run scripts/mine.js --network localhost`
*/

import { moveBlocks } from "../utils/move-blocks"

const BLOCKS = 5

async function mine() {
    await moveBlocks(BLOCKS)
}

mine()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
