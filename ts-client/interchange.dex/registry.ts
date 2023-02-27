import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCancelBuyOrder } from "./types/interchange/dex/tx";
import { MsgSendBuyOrder } from "./types/interchange/dex/tx";
import { MsgSendSellOrder } from "./types/interchange/dex/tx";
import { MsgSendCreatePair } from "./types/interchange/dex/tx";
import { MsgCancelSellOrder } from "./types/interchange/dex/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/interchange.dex.MsgCancelBuyOrder", MsgCancelBuyOrder],
    ["/interchange.dex.MsgSendBuyOrder", MsgSendBuyOrder],
    ["/interchange.dex.MsgSendSellOrder", MsgSendSellOrder],
    ["/interchange.dex.MsgSendCreatePair", MsgSendCreatePair],
    ["/interchange.dex.MsgCancelSellOrder", MsgCancelSellOrder],
    
];

export { msgTypes }