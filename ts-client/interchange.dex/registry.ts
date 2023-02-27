import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendCreatePair } from "./types/interchange/dex/tx";
import { MsgSendSellOrder } from "./types/interchange/dex/tx";
import { MsgSendBuyOrder } from "./types/interchange/dex/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/interchange.dex.MsgSendCreatePair", MsgSendCreatePair],
    ["/interchange.dex.MsgSendSellOrder", MsgSendSellOrder],
    ["/interchange.dex.MsgSendBuyOrder", MsgSendBuyOrder],
    
];

export { msgTypes }