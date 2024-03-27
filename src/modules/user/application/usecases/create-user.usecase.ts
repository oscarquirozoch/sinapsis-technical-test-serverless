import { HttpStatus } from "@nestjs/common";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { IResponse } from "src/common/interfaces/response.interface";

import { User } from "../../domain/models/user.model";
import { CreateUserDto } from "../dto/create-user.dto";
import { UsersRepository } from "../../domain/repository/users.repository";

export class CreateUserUseCase {

    constructor(
        private readonly _usersRepository: UsersRepository
    ) { }

    async exec(data: CreateUserDto): Promise<IResponse<User>> {
        try {
            const response = new ResponseHelper();

            const user = await this._usersRepository.create({
                client_id: data.client_id,
                username: data.username,
                status: data.status
            });

            response.code(HttpStatus.CREATED).result(user);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}