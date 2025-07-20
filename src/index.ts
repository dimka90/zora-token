import "dotenv/config"; 
import { createtoken } from "./coin/create_coin";
async function  createCoin() {
    console.log(process.env.RPC_URL);
    let createToken =  await createtoken();
}
createCoin();