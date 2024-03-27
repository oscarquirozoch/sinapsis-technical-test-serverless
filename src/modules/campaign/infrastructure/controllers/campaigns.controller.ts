import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { ShowCampaignDto, GetCampaignsDto, ListCampaignsDto, CreateCampaignDto, UpdateCampaignDto, DeleteCampaignDto, ScheduleCampaignDto, GetMessagesDto } from "../../application/dto";
import { ShowCampaignUseCase, GetCampaignsUseCase, ListCampaignsUseCase, CreateCampaignUseCase, UpdateCampaignUseCase, DeleteCampaignUseCase, ScheduleCampaignUseCase, GetMessagesUseCase } from "../../application/usecases";
import { CreateSchema, DeleteSchema, GetSchema, ListSchema, ScheduleSchema, ShowSchema, UpdateSchema, GetMessagesSchema } from "../documentation";

import { CampaignsRepositoryImpl } from "../repository/campaigns.repositoryimpl";
import { CampaignMessagesRepositoryImpl } from "../repository/campaign-messages.repositoryimpl";
import { BadRequestResponse, NotFoundResponse } from "src/common/responses";

@ApiTags('Campaigns')
@Controller('campaigns')
export class CampaignsController {

    constructor(
        private readonly _campaignsRepository: CampaignsRepositoryImpl,
        private readonly _campaignMessagesRepository: CampaignMessagesRepositoryImpl
    ) { }

    @Get('/show/:id')
    @ApiOperation({
        summary: 'Obtener campaña',
        description: `Servicio que retorna una campaña por ID`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: ShowSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    show(@Param('id') id: string) {
        return new ShowCampaignUseCase(this._campaignsRepository).exec({ id } as ShowCampaignDto);
    }

    @Get('/get')
    @ApiOperation({
        summary: 'Obtener campañas',
        description: `Servicio que retorna un listado de campañas con filtros`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: GetSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    get(@Query() getCampaignsDto: GetCampaignsDto) {
        return new GetCampaignsUseCase(this._campaignsRepository).exec(getCampaignsDto);
    }

    @Get('/list')
    @ApiOperation({
        summary: 'Obtener campañas, paginado',
        description: `Servicio que retorna un listado de campañas paginado con filtros`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: ListSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    list(@Query() listCampaignsDto: ListCampaignsDto) {
        return new ListCampaignsUseCase(this._campaignsRepository).exec(listCampaignsDto);
    }

    @Post()
    @ApiOperation({
        summary: 'Registrar una nueva campaña',
        description: `Servicio que almacena una campaña en el sistema`,
    })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Created', schema: CreateSchema })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    create(@Body() createCampaignDto: CreateCampaignDto) {
        return new CreateCampaignUseCase(this._campaignsRepository).exec(createCampaignDto);
    }

    @Put()
    @ApiOperation({
        summary: 'Editar campaña',
        description: `Servicio que actualiza la información de una campaña en el sistema`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: UpdateSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    update(@Body() updateCampaignDto: UpdateCampaignDto) {
        return new UpdateCampaignUseCase(this._campaignsRepository).exec(updateCampaignDto);
    }

    @Delete()
    @ApiOperation({
        summary: 'Eliminar campaña',
        description: `Servicio que eliminar una campaña del sistema`,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: DeleteSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    delete(@Body() deleteCampaignDto: DeleteCampaignDto) {
        return new DeleteCampaignUseCase(this._campaignsRepository).exec(deleteCampaignDto);
    }

    @Post('/schedule')
    @ApiOperation({
        summary: 'Programar una nueva campaña',
        description: `Servicio que almacena un campaña y los mensajes relaciones en el sistema`,
    })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Created', schema: ScheduleSchema })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    scheduleCampaign(@Body() scheduleCampaignDto: ScheduleCampaignDto) {
        return new ScheduleCampaignUseCase(
            this._campaignsRepository,
            this._campaignMessagesRepository
        ).exec(scheduleCampaignDto)
    }

    @Get('/get-messages')
    @ApiOperation({
        summary: 'Obtener mensajes con clasificación por estado',
        description: `Servicio que retorna un listado de mensajes clasificado por estado de envío 
        con filtrado por fecha de envío y por cliente `,
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'OK', schema: GetMessagesSchema })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not found', type: NotFoundResponse })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request', type: BadRequestResponse })
    getMessages(@Query() getMessagesDto: GetMessagesDto) {
        return new GetMessagesUseCase(this._campaignMessagesRepository).exec(getMessagesDto);
    }
}