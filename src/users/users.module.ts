import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../db_models/user.entity";
import {JwtCommonModule} from "../common/jwt_common.module";
import {Role} from "../db_models/role.entity";

@Module({
    imports: [
        JwtCommonModule,
        TypeOrmModule.forFeature([User,Role]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {
}
