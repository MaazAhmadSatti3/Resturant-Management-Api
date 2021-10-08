import { IMenu } from "../document/menu.document";
import { ICustomer, ISingleMenuItem } from "../document/order.document";

export interface OrderSaveReq {
    waiterId: string;
    tableNo: string;
    menu: ISingleMenuItem[];
    customer: ICustomer;
    totalBill: number;
    status: string;
}

export interface OrderUpdateReq {
    orderId: string;
    status: string;
}

export interface WaiterOrderListReq {
    waiterId: string;
}