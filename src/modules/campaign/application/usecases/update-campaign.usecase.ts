import { NotFoundException } from "@nestjs/common";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { IResponse } from "src/common/interfaces/response.interface";

import { Campaign } from "../../domain/models/campaign.model";
import { UpdateCampaignDto } from "../dto/update-campaign.dto";
import { CampaignsRepository } from "../../domain/repository/campaigns.repository";

export class UpdateCampaignUseCase {

    constructor(
        private readonly _campaignsRepository: CampaignsRepository
    ) { }

    async exec(data: UpdateCampaignDto): Promise<IResponse<Campaign>> {
        try {
            const response = new ResponseHelper();

            const campaign = await this._campaignsRepository.update(data.id, {
                user_id: data.user_id,
                name: data.name,
                schedule_time: data.schedule_time,
                status: data.status
            });

            if (!campaign) throw new NotFoundException('Campaign not found');
            response.result(campaign);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}