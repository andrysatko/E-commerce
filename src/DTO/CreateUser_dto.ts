import {IsEmail, IsNotEmpty, IsOptional, Length} from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    @Length(1,15)
    firstName: string;

    @IsNotEmpty()
    @Length(1,15)
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Length(5,20)
    password: string;

    @IsNotEmpty()
    @Length(5,20)
    confirm_password: string

    @IsNotEmpty()
    role: number
}


