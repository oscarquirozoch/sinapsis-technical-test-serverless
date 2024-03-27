import { NotFoundException } from "@nestjs/common";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { IResponse } from "src/common/interfaces/response.interface";

import { Client } from "../../domain/models/client.model";
import { UpdateClientDto } from "../dto/update-client.dto";
import { ClientsRepository } from "../../domain/repository/clients.repository";

export class UpdateClientUseCase {

    constructor(
        private readonly _clientsRepository: ClientsRepository
    ) { }

    async exec(data: UpdateClientDto): Promise<IResponse<Client>> {
        try {
            const response = new ResponseHelper();

            const client = await this._clientsRepository.update(data.id, {
                name: data.name,
                status: data.status
            });

            if (!client) throw new NotFoundException('Client not found');
            response.result(client);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}