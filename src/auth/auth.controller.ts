import {Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDTO} from "../users/CreateUser_dto";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
    constructor(private AuthService:AuthService) {
    }

    @Post('registration')
    getAll(@Body() body:CreateUserDTO){
        return this.AuthService.addUser(body)
    }
}
