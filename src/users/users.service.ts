import { Injectable } from '@nestjs/common';
import {Common_EntityService} from "../common/entity-service.service";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../db_models/user.entity";
import {Repository} from "typeorm";
import {CreateUserDTO, dynamicUserDto} from "./CreateUser_dto";

@Injectable()
export class UsersService extends Common_EntityService<CreateUserDTO,dynamicUserDto>{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
        super(userRepository);
    }
}
