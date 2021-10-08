import { OrderSchema } from "../model/order.model";
import { IOrder } from "../types/document/order.document";
import { OrderUpdateReq, WaiterOrderListReq } from "../types/request/order.request";

export class OrderRepo {
    constructor() {}

    saveOrder(order: IOrder) {
       return new OrderSchema(order).save();
    }

    getOrderList() {
        return OrderSchema.find();
    }

    updateOrder(order: OrderUpdateReq) {
        return OrderSchema.findByIdAndUpdate(order.orderId, {status: order.status}, {
            new: true
        })
    }

    waiterOrderList(order: WaiterOrderListReq) {
        return OrderSchema.find({waiterId: order.waiterId})
    }
}