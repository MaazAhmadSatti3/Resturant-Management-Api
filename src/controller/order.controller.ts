import { IOrder } from "../types/document/order.document";
import { OrderRepo } from "../repositories/order.repositories";
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import CustomError from '../utils/error';
import { OrderSaveReq, OrderUpdateReq, WaiterOrderListReq } from "../types/request/order.request";
import { OrderSaveRes } from "../types/response/order.response";

@Route('order')
@Tags('order')

export class OrderController {

    @Post('/saveOrder')
    async saveOrder(@Body() order: OrderSaveReq): Promise<OrderSaveRes> {
       const newOrder: IOrder = await new OrderRepo().saveOrder(<IOrder>(order));
       return <OrderSaveRes> (newOrder)
    }

    @Post('/getOrderList')
    async getOrderList(): Promise<OrderSaveRes[]> {
        const order: IOrder[] = await new OrderRepo().getOrderList();
        return <OrderSaveRes[]> (order)
    }

    @Put('/updateOrder')
    async updateOrder(@Body() order: OrderUpdateReq): Promise<OrderSaveRes> {
        const updateOrder: IOrder = await new OrderRepo().updateOrder(order);
        if (updateOrder === null)
            throw new CustomError(400, 'Order not updated');
        return <OrderSaveRes> (updateOrder)
    }

    @Post('/waiterOrderList')
    async waiterOrderList(@Body() order: WaiterOrderListReq): Promise<OrderSaveRes[]> {
        const getOrderlist: IOrder[] = await new OrderRepo().waiterOrderList(order);
        if (getOrderlist === null)
            throw new CustomError(400, 'No order of this waiter');
        return <OrderSaveRes[]> (getOrderlist)    
    }
}