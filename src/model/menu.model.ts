import { Schema, model } from "mongoose";
import { IMenu } from "../types/document/menu.document";

const IMenuSchema = new Schema(
    {
        itemName: { type: String },
        price: { type: String },
        type: { type: String },
        size: { type: String },
    },
    { timestamps: true }
)
export const MenuSchema = model<IMenu>('IMenuSchema', IMenuSchema);