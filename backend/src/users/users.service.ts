import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import { createUserDto } from "./dto/createUser.dto";

@Injectable()
export class UsersServices{
    constructor(
        @InjectModel(User.name) private usermodel: Model<User>
    ){}

    createUser(createUserDto: createUserDto)
    {
        const newUser= new this.usermodel(createUserDto);
        return newUser.save();

    }

}