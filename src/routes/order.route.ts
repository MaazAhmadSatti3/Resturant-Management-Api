import express from 'express';
import { OrderController } from '../controller/order.controller';
import { OrderSaveReq, OrderUpdateReq, WaiterOrderListReq } from '../types/request/order.request';
import { OrderSaveRes } from '../types/response/order.response';

export class OrderRoutes {
    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.post('/saveOrder', async(req, res, next) => {
            try {
                const order: OrderSaveReq = req.body;
                order['totalBill'] = res.locals.totalBill;
                const newOrder: OrderSaveRes = await new OrderController().saveOrder(order);
                res.status(200).send({
                    Message: newOrder
                })
            } catch (error) {
                next(error);
            }
        })

        this.router.post('/getOrderList', async(req, res, next) => {
            try {
                const orderList: OrderSaveRes[] = await new OrderController().getOrderList();
                res.status(200).json({
                    Result: orderList
                })
            } catch (error) {
                next(error);
            }
        })

        this.router.put('/updateOrder', async(req, res, next) => {
            try {
                const order: OrderUpdateReq = req.body;
                const newOrder: OrderSaveRes = await new OrderController().updateOrder(order);
                const response = {
                    newOrder
                };
                res.status(200).json({
                    Message: response
                })
            } catch(error) {
                next(error);
            }
        })

        this.router.post('/waiterOrderList', async(req, res, next) => {
            try {
                const order: WaiterOrderListReq = req.body;
                const orderList: OrderSaveRes[] = await new OrderController().waiterOrderList(order);
                res.status(200).json({
                    Result: orderList
                })
            } catch(error) {
                next(error);
            }
        })
    }
}    
export const OrderRoutesApi = new OrderRoutes().router;