import { DeployCurrency, ValidMetadataURI } from "@zoralabs/coins-sdk";
import { createCoinArgs } from "../coin/coin_params";
import {Address}  from "viem"
import {base } from "viem/chains"
import dotenv from "dotenv"
dotenv.config();

let account = process.env.WALLET_ADDRESS;
let ipfsUrl = process.env.IPFS_URL;

export  let coinParams = createCoinArgs({
 name: "My Awesome Coin",
  symbol: "MAC",
  uri:  ipfsUrl as ValidMetadataURI,
  payoutRecipient: account as Address,
  chainId: base.id,
  currency: DeployCurrency.ZORA,
});
