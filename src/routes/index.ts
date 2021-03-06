import express from 'express';
import { AdminRoutesApi } from './admin.route';
import { MenuRoutesApi } from './menu.route';
import { OrderRoutesApi } from './order.route';
import { WaiterRoutesApi } from './waiter.route';

export class MainRouter {
    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.use('/admin', AdminRoutesApi);
        this.router.use('/menu', MenuRoutesApi);
        this.router.use('/waiter', WaiterRoutesApi);
        this.router.use('/order', OrderRoutesApi);
    }
}
export const MainApi = new MainRouter().router;