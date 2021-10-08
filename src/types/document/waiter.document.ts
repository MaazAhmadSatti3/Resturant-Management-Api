import { Document } from "mongoose";

export interface IWaiter {
    _id: string;
    waiterName: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}