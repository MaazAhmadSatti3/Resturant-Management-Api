import { Document } from "mongoose";
import { IMenu } from "./menu.document";

export interface IOrder {
    _id: string;
    waiterId: string;
    tableNo: string;
    menu: ISingleMenuItem[];
    customer: ICustomer;
    totalBill: number;
    status: string;
    createdAt?: string;
    updatedAt?: string;
}


export interface ICustomer {
    name: string;
    address: string;
}
 
export interface ISingleMenuItem{
     menuId: string;
     quantity : number;
 }