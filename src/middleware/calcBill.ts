import express, { Request, Response, NextFunction } from 'express';
import { MenuRepo } from '../repositories/menu.repositories';

export const calcBill = async function(req: Request, res: Response, next: NextFunction) {
    const itemPrice: number = await new MenuRepo().getMenuPrice(req.body.menuId);
    const totalBill = req.body.quantity * itemPrice;
    res.locals['totalBill'] = totalBill;
    next();
}