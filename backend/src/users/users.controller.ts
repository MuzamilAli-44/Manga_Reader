import { Body, Controller, Post } from "@nestjs/common";
import { UsersServices } from "./users.service";
import { createUserDto } from "./dto/createUser.dto";

@Controller('users')
export class UsersController{
    constructor(private userService: UsersServices){}

    @Post()
    createUser(@Body() createUserDto: createUserDto)
    {
        console.log(createUserDto);

    }
}