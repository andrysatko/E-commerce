import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import {JwtService} from "@nestjs/jwt";
import {UsersService} from "../../users/users.service";

@Injectable()
export class IsAuthGuardGuard implements CanActivate {
  constructor(private jwtService: JwtService,private userService:UsersService) {
  }
  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const jwt = request.cookies.jwt;
      const permission = this.jwtService.verify(jwt);
      return (!permission && this.userService.findOne(permission)) ? false : true;
    } catch (e) {
      console.log(e);
    }
  }
}
