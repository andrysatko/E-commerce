import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UseInterceptors
} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDTO, dynamicUserDto} from "./CreateUser_dto";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Get()
    async getAll() {
        return  this.userService.findAll()
    }

    @Post('register')
    async addUser(@Body() body:CreateUserDTO){
        return this.userService.createOne(body)
    }

    @Get('find')
    findUser(@Body() body:dynamicUserDto){
       return this.userService.findOne(body)
    }

    @Get('list')
    paginate(@Query() totalQuery:{page:number,take:number}){
        return this.userService.paginate(totalQuery.page,totalQuery.take)
    }

    @Put(':email')
    updateUser(@Param('email') param:string,@Body() body:dynamicUserDto){
        return this.userService.updateOne(body,{email:param})
    }

    @Delete(':email')
    removeUser(@Param('email') email:string){
        this.userService.delete({email:email})
    }
}
