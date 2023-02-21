import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {CreateUserDTO} from "../users/CreateUser_dto";
import {User} from "../db_models/user.entity";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {
    }

    async addUser(UserDto: CreateUserDTO): Promise<User> {
        if (UserDto.confirm_password != UserDto.password) {
            throw  new HttpException("Compare confirmed password and password", HttpStatus.CONFLICT);
        }
        try {
            const hash_Password = this.userService.Hashing(UserDto.password)
            return await this.userService.createOne({...UserDto,password:hash_Password});
        } catch (e) {
            console.log(e);
        }
    }


}
