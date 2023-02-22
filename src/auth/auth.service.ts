import {BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {CreateUserDTO} from "../DTO/CreateUser_dto";
import {User} from "../db_models/user.entity";
import * as bcrypt from "bcrypt"
import {JwtService} from "@nestjs/jwt";
import {NodemailerService} from "../nodemailer/nodemailer.service";
@Injectable()
export class AuthService {
    constructor(private userService: UsersService,private NodemailerService:NodemailerService) {
    }

    async addUser(UserDto: CreateUserDTO): Promise<User> {
        if (UserDto.confirm_password != UserDto.password) {
            throw  new HttpException("Compare confirmed password and password", HttpStatus.CONFLICT);
        }
        try {
            const hash_Password = this.userService.Hashing(UserDto.password)
            const user = await this.userService.createOne({...UserDto,password:hash_Password});
            console.log(UserDto.email)
            await this.NodemailerService.main(UserDto.email,hash_Password)
            return user
        } catch (e) {
            console.log(e);
        }
    }
    async login(email: string, password: string): Promise<User> {
        const user = await this.userService.findOne({ email })
        if(!user){throw new NotFoundException('user not found');}
        if(!await bcrypt.compare(password,user.password)){throw new BadRequestException('incorrect password');}
        return user
    }

    async confirmRegistration(confirmationLInk:string){
        const user = await  this.userService.findOne({password:confirmationLInk})
        if(!user){throw new NotFoundException('wrong confirmation link');}
        if(user.confirmed==false){
            await this.userService.updateOne({confirmed:true},user.id)
            console.log('user is auth now ')
        }
    }



}
