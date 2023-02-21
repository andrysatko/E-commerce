import {ClassSerializerInterceptor, Injectable, UseInterceptors} from '@nestjs/common';
import {Common_EntityService} from "../common/entity-service.service";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../db_models/user.entity";
import {Repository} from "typeorm";
import {CreateUserDTO, dynamicUserDto} from "./CreateUser_dto";
import * as bcrypt from "bcrypt"


@Injectable()
export class UsersService extends Common_EntityService<CreateUserDTO,dynamicUserDto>{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
        super(userRepository);
    }

    Hashing(password:string){
        return bcrypt.hashSync(password, 10);
    }
}
