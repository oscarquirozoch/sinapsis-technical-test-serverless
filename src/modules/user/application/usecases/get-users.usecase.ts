import { IResponse } from "src/common/interfaces/response.interface";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { User } from "../../domain/models/user.model";
import { GetUsersDto } from "../dto/get-users.dto";
import { UsersRepository } from "../../domain/repository/users.repository";

export class GetUsersUseCase {

    constructor(
        private readonly _usersRepository: UsersRepository
    ) { }

    async exec(data: GetUsersDto): Promise<IResponse<User[]>> {
        try {
            const response = new ResponseHelper();

            const users = await this._usersRepository.get(data);
            response.result(users);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}