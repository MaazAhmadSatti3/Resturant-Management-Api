import { IMenu } from "../document/menu.document";
import { ICustomer, ISingleMenuItem } from "../document/order.document";

export interface OrderSaveRes {
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
