import { Module } from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";
const secret = process.env.secret
@Module({
    imports:[JwtModule.register({
        secret:'gad7oi&IOfa',
        signOptions:{expiresIn:'1d'}
    })],
    exports:[JwtModule],
})
export class JwtCommonModule {}
