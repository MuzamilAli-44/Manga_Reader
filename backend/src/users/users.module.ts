import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/schemas/user.schema';
import { UsersServices } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:User.name,
                schema: userSchema,
            }
        ])
    ],
    providers: [UsersServices],
    controllers: [UsersController],
    
})
export class UsersModule {}
