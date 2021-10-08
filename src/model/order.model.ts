import { Schema, model } from "mongoose";
import { IOrder } from "../types/document/order.document";

const IOrderSchema = new Schema(
    {
        waiterId: { type: Schema.Types.ObjectId, ref: 'IWaiterSchema'},
        tableNo: { type: String },
        menu: [{ 
            menuId: { type: Schema.Types.ObjectId, ref: 'IMenuSchema' },
            quantity: {
                type: Number
            }
         }],
       customer: {
           name: { type: String },
           address: { type: String },
       },
       totalBill: { type: Number },
       status: { type: String },  
    },
    { timestamps: true }
)
export const OrderSchema = model<IOrder>('IOrderSchema', IOrderSchema);
