import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { ShowClientDto, GetClientsDto, ListClientsDto, CreateClientDto, UpdateClientDto, DeleteClientDto } from "../../application/dto";
import { ShowClientUseCase, GetClientsUseCase, ListClientsUseCase, CreateClientUseCase, UpdateClientUseCase, DeleteClientUseCase } from "../../application/usecases";
import { ShowSchema, GetSchema, ListSchema, CreateSchema, UpdateSchema, DeleteSchema } from "../documentation";

import { ClientsRepositoryImpl } from "../repository/clients.repositoryimpl";
import { BadRequestResponse, NotFoundResponse } from "src/common/responses";

@ApiTags('Clientes')
@Controller('clients')
export class ClientsController {

    constructor(
        private readonly _clientsRepository: ClientsRepositoryImpl
    ) { }

    @Get('/show/:id')
    @ApiOperation({
        summary: 'Obtener cliente',
        description: `Servicio que retorna un cliente por ID`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: ShowSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    show(@Param('id') id: string) {
        return new ShowClientUseCase(this._clientsRepository).exec({ id } as ShowClientDto);
    }

    @Get('/get')
    @ApiOperation({
        summary: 'Obtener clientes',
        description: `Servicio que retorna un listado de clientes con filtros`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: GetSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    get(@Query() getClientsDto: GetClientsDto) {
        return new GetClientsUseCase(this._clientsRepository).exec(getClientsDto);
    }

    @Get('/list')
    @ApiOperation({
        summary: 'Obtener clientes, paginado',
        description: `Servicio que retorna un listado de clientes paginado con filtros`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: ListSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    list(@Query() listClientsDto: ListClientsDto) {
        return new ListClientsUseCase(this._clientsRepository).exec(listClientsDto);
    }

    @Post()
    @ApiOperation({
        summary: 'Registrar un nuevo cliente',
        description: `Servicio que almacena un cliente en el sistema`,
    })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Created', schema: CreateSchema })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    create(@Body() createClientDto: CreateClientDto) {
        return new CreateClientUseCase(this._clientsRepository).exec(createClientDto);
    }

    @Put()
    @ApiOperation({
        summary: 'Editar cliente',
        description: `Servicio que actualiza la información un cliente en el sistema`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: UpdateSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    update(@Body() updateClientDto: UpdateClientDto) {
        return new UpdateClientUseCase(this._clientsRepository).exec(updateClientDto);
    }

    @Delete()
    @ApiOperation({
        summary: 'Eliminar cliente',
        description: `Servicio que eliminar un cliente del sistema`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: DeleteSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    delete(@Body() deleteClientDto: DeleteClientDto) {
        return new DeleteClientUseCase(this._clientsRepository).exec(deleteClientDto);
    }

}