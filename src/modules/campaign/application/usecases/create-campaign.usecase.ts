import { HttpStatus } from "@nestjs/common";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { IResponse } from "src/common/interfaces/response.interface";

import { Campaign } from "../../domain/models/campaign.model";
import { CreateCampaignDto } from "../dto/create-campaign.dto";
import { CampaignsRepository } from "../../domain/repository/campaigns.repository";

export class CreateCampaignUseCase {

    constructor(
        private readonly _campaignsRepository: CampaignsRepository
    ) { }

    async exec(data: CreateCampaignDto): Promise<IResponse<Campaign>> {
        try {
            const response = new ResponseHelper();

            const campaign = await this._campaignsRepository.create({
                user_id: data.user_id,
                name: data.name,
                schedule_time: data.schedule_time,
                status: data.status
            });

            response.code(HttpStatus.CREATED).result(campaign);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}