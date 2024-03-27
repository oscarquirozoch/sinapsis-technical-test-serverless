import { Injectable } from "@nestjs/common";
import { BaseRepositoryImpl } from "src/common/repository/base.repositoryimpl";
import { Campaign } from "../../domain/models/campaign.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IQueryBuilderRequest } from "src/common/packages/request-broker/interfaces/query-builder-request.interface";
import { CampaignEntity } from "../entities/campaign.entity";
import { GeneralHelper } from "src/common/helpers/general.helper";

@Injectable()
export class CampaignsRepositoryImpl extends BaseRepositoryImpl<CampaignEntity, Campaign>{

    constructor(
        @InjectRepository(CampaignEntity)
        protected campaignRepository: Repository<CampaignEntity>
    ) {
        super(
            campaignRepository,
            'campaign',
            (query, args) => this.customFilters(query, args)
        )
    }

    private customFilters(query: IQueryBuilderRequest<CampaignEntity>, args: any): void {
        if (GeneralHelper.existsAndNotEmpty(args, 'id')) query.value.andWhere('campaign.id = :id', { id: args.id });
        if (GeneralHelper.existsAndNotEmpty(args, 'name')) query.value.andWhere('campaign.name LIKE :id', { id: `%${args.name}%` });
        if (GeneralHelper.existsAndNotEmpty(args, 'status')) query.value.andWhere('campaign.status = :status', { status: args.status });
    }

}