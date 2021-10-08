import { IWaiter } from "../types/document/waiter.document";
import { WaiterRepo } from "../repositories/waiter.repositories";
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import CustomError from '../utils/error';
import { WaiterSaveReq, WaiterLoginReq } from "../types/request/waiter.request"; 
import { WaiterSaveRes, WaiterLoginRes } from "../types/response/waiter.response";

@Route('waiter')
@Tags('waiter')

export class WaiterController {

    @Security('api_key')
    @Post('/saveWaiter') 
    async saveWaiter(@Body() waiter: WaiterSaveReq): Promise<WaiterSaveRes> {
        const newWaiter: IWaiter = await new WaiterRepo().saveWaiter(<IWaiter>(waiter));
        return <WaiterSaveRes> (newWaiter)
    }

    @Post('/loginWaiter')
    @SuccessResponse("200", "Waiter Login Successful")
    async loginWaiter(@Body() req: WaiterLoginReq): Promise<WaiterLoginRes> {
        return <WaiterLoginRes> <any> await new WaiterRepo().loginWaiter(req);
    }
}