import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {create_updateRole, RolesService} from "./roles.service";

@Controller('roles')
export class RolesController {
    constructor(private RoleService: RolesService) {
    }

    @Get()
    async getAll() {
        return this.RoleService.findAll()
    }

    @Post()
    async createRole(@Body() body: create_updateRole) {
        return this.RoleService.createOne(body)
    }

    @Get('findRole')
    async findRole(@Body() body: create_updateRole) {
        return this.RoleService.findOne(body)
    }

    @Delete(':id')
    async deleteRole(@Param('id') id: number) {
        await this.RoleService.delete({id: id})
        return `Role with id:${id} was deleted`
    }

    @Put(':id')
    async updateRole(@Body() body: create_updateRole, @Param('id') id: number) {
        return  await this.RoleService.updateOne(body, id)
    }
}
