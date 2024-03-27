import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientsController } from "../controllers/clients.controller";
import { ClientsRepositoryImpl } from "../repository/clients.repositoryimpl";
import { ClientEntity } from "../entities/client.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ClientEntity
        ])
    ],
    controllers: [
        ClientsController
    ],
    providers: [
        ClientsRepositoryImpl
    ],
    exports: [
        TypeOrmModule
    ]
})
export class ClientModule { }