import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./db_models/user.entity";
import {JwtCommonModule} from "./common/jwt_common.module";


@Module({
  imports: [ConfigModule.forRoot({
      envFilePath: `.${process.env.Env_Mode}.env`,
  }),
  TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.host,
      port:Number( process.env.port),
      username: process.env.type,
      password: process.env.password,
      database: process.env.database,
      entities: [User,],
      synchronize: true,
  }),
      UsersModule,
      JwtCommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
