import { createWalletClient, createPublicClient, http, Hex } from "viem";
import {base} from "viem/chains";
import dotenv from "dotenv"
import { privateKeyToAccount } from "viem/accounts";
dotenv.config()
let rpcUrl = process.env.RPC_URL;

const account = privateKeyToAccount(process.env.PRIVATE_KEY as Hex);
export let publicClient = createPublicClient({
    chain: base,
    transport: http(rpcUrl)
});

export let  WalletClient = createWalletClient({
account,
chain: base,
transport: http(rpcUrl)
});