import { NotFoundException } from "@nestjs/common";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { IResponse } from "src/common/interfaces/response.interface";

import { User } from "../../domain/models/user.model";
import { DeleteUserDto } from "../dto/delete-user.dto";
import { UsersRepository } from "../../domain/repository/users.repository";

export class DeleteUserUseCase {

    constructor(
        private readonly _usersRepository: UsersRepository
    ) { }

    async exec(data: DeleteUserDto): Promise<IResponse<User>> {
        try {
            const response = new ResponseHelper();

            const user = await this._usersRepository.delete(data.id);

            if (!user) throw new NotFoundException('User not found');
            response.result(user);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }

}