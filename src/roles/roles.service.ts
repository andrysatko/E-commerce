import { Injectable } from '@nestjs/common';
import {Common_EntityService} from "../common/entity-service.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Role} from "../db_models/role.entity";
import {Repository} from "typeorm";
export class create_updateRole {
    role:string
}
@Injectable()
export class RolesService extends Common_EntityService<create_updateRole, create_updateRole> {
    constructor(@InjectRepository(Role) private readonly RoleRepository:Repository<Role>) {
        super(RoleRepository);
    }
}
