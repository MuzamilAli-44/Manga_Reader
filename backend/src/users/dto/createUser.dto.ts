import { IsNotEmpty, IsString, IsEmail, } from "class-validator";

export class createUserDto{
    @IsNotEmpty()
    @IsString()
    username:string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email_id:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}