import { Module } from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports:[JwtModule.register({
        secret: process.env.secret,
        signOptions:{expiresIn:'1d'}
    })],
    exports:[JwtModule],
})
export class JwtCommonModule {}
