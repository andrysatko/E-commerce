import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    Post,
    Query,
    Res,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDTO} from "../DTO/CreateUser_dto";
import {JwtService} from "@nestjs/jwt"
import {response, Response} from "express"
import {IsAuthGuardGuard} from "./is-auth-guard/is-auth-guard.guard"

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

    @UseGuards(IsAuthGuardGuard)
    @Post('logout')
    async logout(@Res({passthrough:true}) response:Response){
        await response.clearCookie('jwt')
        return {
            message:'success'
        }
    }

    @Get('confirm')
    async confirmRegistration(@Res({passthrough:true})  Response:Response,@Query() query){
        let confirmationLInk = query.pSdLin$k
        await this.AuthService.confirmRegistration(confirmationLInk)
        response.redirect('https://www.youtube.com/')
    }

}
