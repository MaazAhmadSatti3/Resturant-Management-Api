import { Document } from "mongoose";

export interface IMenu {
    _id: string;
    itemName: string;
    price: string;
    type: string;
    size: string;
    createdAt?: string;
    updatedAt?: string;
}