import { NotFoundException } from "@nestjs/common";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { IResponse } from "src/common/interfaces/response.interface";

import { User } from "../../domain/models/user.model";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UsersRepository } from "../../domain/repository/users.repository";

export class UpdateUserUseCase {

    constructor(
        private readonly _usersRepository: UsersRepository
    ) { }

    async exec(data: UpdateUserDto): Promise<IResponse<User>> {
        try {
            const response = new ResponseHelper();

            const user = await this._usersRepository.update(data.id, {
                client_id: data.client_id,
                username: data.username,
                status: data.status
            });

            if (!user) throw new NotFoundException('User not found');
            response.result(user);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}