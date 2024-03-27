import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "../controllers/users.controller";
import { UserEntity } from "../entities/user.entity";
import { UsersRepositoryImpl } from "../repository/users.repositoryimpl";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity
        ])
    ],
    controllers: [
        UsersController
    ],
    providers: [
        UsersRepositoryImpl
    ],
    exports: [
        TypeOrmModule
    ]
})
export class UserModule { }