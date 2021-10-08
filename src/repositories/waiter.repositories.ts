import { WaiterSchema } from "../model/waiter.model";
import { IWaiter } from "../types/document/waiter.document";
import { WaiterLoginReq } from "../types/request/waiter.request";

export class WaiterRepo {
    constructor() {}

    saveWaiter(waiter: IWaiter) {
        return new WaiterSchema(waiter).save();
    }

    loginWaiter(body: WaiterLoginReq) {
        return WaiterSchema.findOne({
            waiterName: body.waiterName,
            password: body.password
        })
    }
}