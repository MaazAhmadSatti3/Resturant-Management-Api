import { MenuSchema } from "../model/menu.model";
import { IMenu } from "../types/document/menu.document";
import { MenuSaveReq } from "../types/request/menu.request";

export class MenuRepo {
    constructor () {}

    saveMenu(menu: IMenu) {
        return new MenuSchema(menu).save();
    }

    getMenuList() {
        return MenuSchema.find();
    }

    async getMenuPrice(id: string): Promise <any> {
        let menuDoc = await MenuSchema.findById(id);
        return <any> menuDoc?.price
    }
}