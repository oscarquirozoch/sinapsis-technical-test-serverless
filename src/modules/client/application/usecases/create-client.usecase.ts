import { HttpStatus } from "@nestjs/common";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { IResponse } from "src/common/interfaces/response.interface";

import { Client } from "../../domain/models/client.model";
import { CreateClientDto } from "../dto/create-client.dto";
import { ClientsRepository } from "../../domain/repository/clients.repository";

export class CreateClientUseCase {

    constructor(
        private readonly _clientsRepository: ClientsRepository
    ) { }

    async exec(data: CreateClientDto): Promise<IResponse<Client>> {
        try {
            const response = new ResponseHelper();

            const client = await this._clientsRepository.create({
                name: data.name,
                status: data.status
            });

            response.code(HttpStatus.CREATED).result(client);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}