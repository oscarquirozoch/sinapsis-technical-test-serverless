import { IResponse } from "src/common/interfaces/response.interface";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { Client } from "../../domain/models/client.model";
import { GetClientsDto } from "../dto/get-clients.dto";
import { ClientsRepository } from "../../domain/repository/clients.repository";

export class GetClientsUseCase {

    constructor(
        private readonly _clientsRepository: ClientsRepository
    ) { }

    async exec(data: GetClientsDto): Promise<IResponse<Client[]>> {
        try {
            const response = new ResponseHelper();

            const clients = await this._clientsRepository.get(data);
            response.result(clients);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}