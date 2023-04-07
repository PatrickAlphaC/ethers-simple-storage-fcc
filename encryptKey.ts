import { ethers } from "ethers"
import * as fs from "fs-extra"
import "dotenv/config"

async function main() {
    console.log(process.env.PRIVATE_KEY)
    console.log(process.env.PRIVATE_KEY_PASSWORD)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!)
    const encryptedJsonKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD!,
        process.env.PRIVATE_KEY!
    )
    // In later version (^6.2.3 as of this commit) of etherjs, PRIVATE_KEY is inferred from wallet, so there is no need to 
    // pass private key again. 
    //     const encryptedJsonKey = await wallet.encrypt(
    //         process.env.PRIVATE_KEY_PASSWORD!,
    //  )
    console.log(encryptedJsonKey)
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
