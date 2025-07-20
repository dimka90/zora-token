// import { createCoin } from "@zoralabs/coins-sdk";
// import { coinParams } from "./construct_coin";
import { publicClient } from "../viem/client";
import { WalletClient } from "../viem/client";
import { createCoin, DeployCurrency, ValidMetadataURI } from "@zoralabs/coins-sdk";
import { Hex, createWalletClient, createPublicClient, http, Address } from "viem";
import { base } from "viem/chains";
import dotenv from "dotenv"
dotenv.config()

let account = process.env.WALLET_ADDRESS;
let ipfsUrl = process.env.IPFS_URL;

const coinParams = {
  name: "Dimka token",
  symbol: "DKT",
  uri: ipfsUrl as ValidMetadataURI,
  payoutRecipient: account as Address,
  chainId: base.id, 
  currency: DeployCurrency.ZORA, 
};
 
export async function createtoken() {
try{

    let result = await  createCoin(coinParams, WalletClient, publicClient);
    console.log("Transaction hash:", result.hash);
    console.log("Coin address:", result.address);
    console.log("Deployment details:", result.deployment);
    
    return result;
}
catch (error){
 console.error("Error creating coin:", error);
    throw error;
}
}