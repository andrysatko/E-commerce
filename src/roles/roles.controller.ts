import {Body, Controller, Get, Post} from '@nestjs/common';
import {create_updateRole, RolesService} from "./roles.service";

@Controller('roles')
export class RolesController {
    constructor(private RoleService:RolesService) {
    }

    @Get()
    getAll(){
        return this.RoleService.findAll()
    }

    @Post()
    createRole(@Body() body:create_updateRole){
        return this.RoleService.createOne(body)
    }

}
