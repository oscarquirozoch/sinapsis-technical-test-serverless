import { IResponse } from "src/common/interfaces/response.interface";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { Campaign } from "../../domain/models/campaign.model";
import { GetCampaignsDto } from "../dto/get-campaigns.dto";
import { CampaignsRepository } from "../../domain/repository/campaigns.repository";

export class GetCampaignsUseCase {

    constructor(
        private readonly _campaignsRepository: CampaignsRepository
    ) { }

    async exec(data: GetCampaignsDto): Promise<IResponse<Campaign[]>> {
        try {
            const response = new ResponseHelper();

            const campaigns = await this._campaignsRepository.get(data);
            response.result(campaigns);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}