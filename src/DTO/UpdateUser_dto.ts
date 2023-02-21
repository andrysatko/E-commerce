import {IsEmail, IsOptional, Length} from "class-validator";

export class dynamicUserDto{
    @IsOptional()
    @Length(1,15,{always:false})
    firstName?: string;


    @IsOptional()
    @Length(1,15,{always:false})
    lastName?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @Length(5,20,{always:false})
    password?: string;

    @IsOptional()
    confirmed?:boolean
}