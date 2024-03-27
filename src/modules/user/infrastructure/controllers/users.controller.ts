import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { ShowUserDto, GetUsersDto, ListUsersDto, CreateUserDto, UpdateUserDto, DeleteUserDto } from "../../application/dto";
import { ShowUserUseCase, GetUsersUseCase, ListUsersUseCase, CreateUserUseCase, UpdateUserUseCase, DeleteUserUseCase } from "../../application/usecases";
import { ShowSchema, GetSchema, ListSchema, CreateSchema, UpdateSchema, DeleteSchema } from "../documentation";

import { UsersRepositoryImpl } from "../repository/users.repositoryimpl";
import { BadRequestResponse, NotFoundResponse } from "src/common/responses";

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(
        private readonly _clientsRepository: UsersRepositoryImpl
    ) { }

    @Get('/show/:id')
    @ApiOperation({
        summary: 'Obtener usuario',
        description: `Servicio que retorna un usuario por ID`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: ShowSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    show(@Param('id') id: string) {
        return new ShowUserUseCase(this._clientsRepository).exec({ id } as ShowUserDto);
    }

    @Get('/get')
    @ApiOperation({
        summary: 'Obtener usuarios',
        description: `Servicio que retorna un listado de usuarios con filtros`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: GetSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    get(@Query() getUsersDto: GetUsersDto) {
        return new GetUsersUseCase(this._clientsRepository).exec(getUsersDto);
    }

    @Get('/list')
    @ApiOperation({
        summary: 'Obtener usuarios, paginado',
        description: `Servicio que retorna un listado de usuarios paginado con filtros`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: ListSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    list(@Query() listUsersDto: ListUsersDto) {
        return new ListUsersUseCase(this._clientsRepository).exec(listUsersDto);
    }

    @Post()
    @ApiOperation({
        summary: 'Registrar un nuevo usuario',
        description: `Servicio que almacena un usuario en el sistema`,
    })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Created', schema: CreateSchema })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    create(@Body() createUserDto: CreateUserDto) {
        return new CreateUserUseCase(this._clientsRepository).exec(createUserDto);
    }

    @Put()
    @ApiOperation({
        summary: 'Editar usuario',
        description: `Servicio que actualiza la información un usuario en el sistema`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: UpdateSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    update(@Body() updateUserDto: UpdateUserDto) {
        return new UpdateUserUseCase(this._clientsRepository).exec(updateUserDto);
    }

    @Delete()
    @ApiOperation({
        summary: 'Eliminar usuario',
        description: `Servicio que eliminar un usuario del sistema`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: DeleteSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    delete(@Body() deleteUserDto: DeleteUserDto) {
        return new DeleteUserUseCase(this._clientsRepository).exec(deleteUserDto);
    }

}