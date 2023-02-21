import {Body, ClassSerializerInterceptor, Controller, Get, Post, Res, UseInterceptors} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDTO} from "../DTO/CreateUser_dto";
import {JwtService} from "@nestjs/jwt"
import {Response} from "express"
@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
    constructor(private AuthService:AuthService, private JwtService:JwtService) {
    }

    @Post('registration')
    getAll(@Body() body:CreateUserDTO){
        return this.AuthService.addUser(body)
    }

    @Get('login')
    async loginAuth(@Body() body:{email:string , password:string},@Res({passthrough:true}) response:Response){
        const if_user =  await this.AuthService.login(body.email,body.password)
        const jwt =await this.JwtService.signAsync({id:if_user.id,email:if_user.email})
        response.cookie('jwt',jwt,{httpOnly:true})
        return if_user;
    }
}
