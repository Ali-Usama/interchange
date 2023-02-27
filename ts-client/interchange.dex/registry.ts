import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendSellOrder } from "./types/interchange/dex/tx";
import { MsgSendCreatePair } from "./types/interchange/dex/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/interchange.dex.MsgSendSellOrder", MsgSendSellOrder],
    ["/interchange.dex.MsgSendCreatePair", MsgSendCreatePair],
    
];

export { msgTypes }