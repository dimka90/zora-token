import { Address} from "viem";

import { DeployCurrency,  ValidMetadataURI } from "@zoralabs/coins-sdk";

export type CoinArgs = {
    name: string;
    symbol: string;
    uri: ValidMetadataURI;
    chainId?: number;
    owners?: Address[];
    payoutRecipient: Address;
    plateformReferrer?: Address;
    currency?: DeployCurrency
}
export function createCoinArgs(args: CoinArgs) : CoinArgs{
    return { ...args }
}