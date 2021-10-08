import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { AdminLoginReq } from "../types/request/admin.request";
import { AdminLoginRes } from "../types/response/admin.response";
import jwt, { Secret } from "jsonwebtoken";
require('dotenv').config();

@Route('admin')
@Tags('admin')

export class AdminController {
    constructor() { }

    @Post('authAdmin')
    async authAdmin(@Body() admin: AdminLoginReq): Promise<any> {
        if(admin.name !== 'admin' || admin.email !== "admin@test.com" || admin.password !== "admin@123") {

           return <any> { message: 'Invalid Credentials',
           TOKEN_KEY: 'No Token'
        }
        } else {
            console.log(admin.name)
        return <any> {
            TOKEN_KEY: jwt.sign(JSON.stringify(admin), <Secret>process.env.SECRET),
            message: "Token Generated"
            }
        }
    }
}

