import express from 'express';
import { WaiterController } from '../controller/waiter.controller';
import { WaiterSaveReq, WaiterLoginReq } from '../types/request/waiter.request';
import { WaiterSaveRes, WaiterLoginRes } from '../types/response/waiter.response';
import { tokenVerify } from '../middleware/auth.admin';
import CustomError from '../utils/error';

export class WaiterRoutes {
    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.post('/saveWaiter', tokenVerify, async (req, res, next) => {
            try {
                const waiter: WaiterSaveReq = req.body;
                const newWaiter: WaiterSaveRes = await new WaiterController().saveWaiter(waiter);
                return res.status(200).send({
                    Message: newWaiter
                })
            } catch (error) {
                next(error)
            }
        })

        this.router.post('/loginWaiter', async (req, res, next) => {
            try {
                const logReq: WaiterLoginReq = req.body;
                const waiterLogin = await new WaiterController().loginWaiter(logReq);
                return res.status(200).send({
                    Message: waiterLogin
                })
            } catch (error) {
                next(error)
            }
        })
    }
}
export const WaiterRoutesApi = new WaiterRoutes().router;