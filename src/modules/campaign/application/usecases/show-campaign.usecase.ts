import { NotFoundException } from "@nestjs/common";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { IResponse } from "src/common/interfaces/Response.interface";

import { Campaign } from "../../domain/models/campaign.model";
import { ShowCampaignDto } from "../dto/show-campaign.dto";
import { CampaignsRepository } from "../../domain/repository/campaigns.repository";

export class ShowCampaignUseCase {

    constructor(
        private readonly _campaignsRepository: CampaignsRepository
    ) { }

    async exec(data: ShowCampaignDto): Promise<IResponse<Campaign>> {
        try {
            const response = new ResponseHelper();

            const campaign = await this._campaignsRepository.show(data.id);

            if (!campaign) throw new NotFoundException('Campaign not found');
            response.result(campaign);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}