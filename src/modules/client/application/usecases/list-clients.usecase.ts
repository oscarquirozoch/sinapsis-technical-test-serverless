import { IResponse } from "src/common/interfaces/response.interface";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { Client } from "../../domain/models/client.model";
import { ListClientsDto } from "../dto/list-clients.dto";
import { ClientsRepository } from "../../domain/repository/clients.repository";
import { IQueryBuilderPaginatedResponse } from "src/common/packages/request-broker/interfaces/query-builder-response-paginated.interface";

export class ListClientsUseCase {

    constructor(
        private readonly _clientsRepository: ClientsRepository
    ) { }

    async exec(data: ListClientsDto): Promise<IResponse<IQueryBuilderPaginatedResponse<Client>>> {
        try {
            const response = new ResponseHelper();

            const clients = await this._clientsRepository.list(data);
            response.result(clients);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}