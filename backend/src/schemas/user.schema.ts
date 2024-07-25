import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema() //registering the schema 
export class User{

    @Prop({unique:true}) //prop decorator is to define schema fields of mongoose
    username:string;

    @Prop({reuqired:true})
    email_id:string;

    @Prop({required:true})
    password: string;

}

export const userSchema = SchemaFactory.createForClass(User); //store the schema in a var