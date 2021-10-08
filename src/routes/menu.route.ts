import express from 'express';
import { MenuController } from '../controller/menu.controller';
import { MenuSaveReq } from '../types/request/menu.request';
import { MenuSaveRes } from '../types/response/menu.response';
import { tokenVerify } from '../middleware/auth.admin';
import ErrorHandler from '../utils/error';

export class MenuRoutes {
    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.post('/saveMenu', tokenVerify, async (req, res, next) => {
            try {
                const menu: MenuSaveReq = req.body;
                const newMenu: MenuSaveRes = await new MenuController().saveMenu(menu);
                return res.status(200).send({
                    Message: newMenu
                })
            } catch(error) {
                next(error);
            }
        })

        this.router.post('/getMenuList', async (req, res, next) => {
            try {
                const menuList: MenuSaveRes[] = await new MenuController().getMenuList();
                res.status(200).json({
                    Result: menuList
                })
            } catch(error) {
                next(error);
            }
        })
    }
}    
export const MenuRoutesApi = new MenuRoutes().router;