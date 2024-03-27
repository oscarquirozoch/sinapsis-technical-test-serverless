import { IResponse } from "src/common/interfaces/response.interface";

import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";

import { Campaign } from "../../domain/models/campaign.model";
import { ListCampaignsDto } from "../dto/list-campaigns.dto";
import { CampaignsRepository } from "../../domain/repository/campaigns.repository";
import { IQueryBuilderPaginatedResponse } from "src/common/packages/request-broker/interfaces/query-builder-response-paginated.interface";

export class ListCampaignsUseCase {

    constructor(
        private readonly _campaignsRepository: CampaignsRepository
    ) { }

    async exec(data: ListCampaignsDto): Promise<IResponse<IQueryBuilderPaginatedResponse<Campaign>>> {
        try {
            const response = new ResponseHelper();

            const campaigns = await this._campaignsRepository.list(data);
            response.result(campaigns);

            return response.resolve();
        } catch (error) {
            throw new HandleExceptionHelper(error).throw();
        }
    }
}