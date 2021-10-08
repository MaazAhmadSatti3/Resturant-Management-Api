import { Schema, model } from "mongoose";
import { IWaiter } from "../types/document/waiter.document";

const IWaiterSchema = new Schema(
    {
        waiterName: { type: String },
        password: { type: String },
    },
    { timestamps: true }
)
export const WaiterSchema = model<IWaiter>('IWaiterSchema', IWaiterSchema);