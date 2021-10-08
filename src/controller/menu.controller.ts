import { IMenu } from "../types/document/menu.document";
import { MenuRepo } from "../repositories/menu.repositories";
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import CustomError from '../utils/error';
import { MenuSaveReq } from "../types/request/menu.request";
import { MenuSaveRes } from "../types/response/menu.response";

@Route('menu')
@Tags('menu')

export class MenuController {

    @Security('api_key')
    @Post('/saveMenu')
    async saveMenu(@Body() menu: MenuSaveReq): Promise<MenuSaveRes> {
        const newMenu: IMenu = await new MenuRepo().saveMenu(<IMenu>(menu));
        return <MenuSaveRes> (newMenu)
    }

    @Post('/getMenuList')
    async getMenuList(): Promise<MenuSaveRes[]> {
        const menu: IMenu[] = await new MenuRepo().getMenuList();
        return <MenuSaveRes[]> (menu);
    }
}