import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtCommonModule} from "../common/jwt_common.module";
import {UsersModule} from "../users/users.module";
import {NodemailerModule} from "../nodemailer/nodemailer.module";

@Module({
  imports:[JwtCommonModule,UsersModule,NodemailerModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
