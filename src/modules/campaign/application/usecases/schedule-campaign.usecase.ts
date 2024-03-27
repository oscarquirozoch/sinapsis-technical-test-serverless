import { HttpStatus } from "@nestjs/common";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { IResponse } from "src/common/interfaces/response.interface";

import { Campaign } from "../../domain/models/campaign.model";
import { ScheduleCampaignDto } from "../dto/schedule-campaign.dto";
import { CampaignsRepository } from "../../domain/repository/campaigns.repository";
import { CreateCampaignMessageDto } from "../dto/create-campaign-message.dto";
import { CampaignMessagesRepository } from "../../domain/repository/campaign-messages.repository";

export class ScheduleCampaignUseCase {

    constructor(
        private readonly _campaignsRepository: CampaignsRepository,
        private readonly _campaignMessagesRepository: CampaignMessagesRepository
    ) { }

    async exec(data: ScheduleCampaignDto): Promise<IResponse<Campaign>> {
        try {
            const response = new ResponseHelper();

            const campaign = await this._campaignsRepository.create({
                user_id: data.user_id,
                name: data.name,
                schedule_time: data.schedule_time,
                status: data.status
            });

            data.messages.forEach((item: CreateCampaignMessageDto) => {
                this._campaignMessagesRepository.create({
                    campaign_id: campaign.id,
                    shipping_status: item.shipping_status,
                    shipping_date: item.shipping_date,
                    message: item.message,
                    status: item.status
                });
            });

            response.code(HttpStatus.CREATED).result(campaign);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}