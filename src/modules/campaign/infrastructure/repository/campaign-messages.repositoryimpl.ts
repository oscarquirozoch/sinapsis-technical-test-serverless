import { Injectable } from "@nestjs/common";
import { BaseRepositoryImpl } from "src/common/repository/base.repositoryimpl";
import { CampaignMessageEntity } from "../entities/campaign-message.entity";
import { CampaignMessage } from "../../domain/models/campaign-message.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IQueryBuilderRequest } from "src/common/packages/request-broker/interfaces/query-builder-request.interface";
import { GeneralHelper } from "src/common/helpers/general.helper";

@Injectable()
export class CampaignMessagesRepositoryImpl extends BaseRepositoryImpl<CampaignMessageEntity, CampaignMessage>{

    constructor(
        @InjectRepository(CampaignMessageEntity)
        protected campaignMessageRepository: Repository<CampaignMessageEntity>,
    ) {
        super(
            campaignMessageRepository,
            'campaignMessage',
            (query, args) => this.customFilters(query, args)
        )
    }

    async get(args: any): Promise<any> {
        const messages: CampaignMessageEntity[] | [] = await this.requestBroker.queryBuilder('campaignMessage')
            .setArgs(args)
            .applyFilters((query, args) => this.customFilters(query, args))
            .getInstance()
            .leftJoinAndSelect('campaignMessage.campaign_id', 'campaign')
            .leftJoinAndSelect('campaign.user_id', 'user')
            .leftJoinAndSelect('user.client_id', 'client')
            .getMany();

        const mappedMessages = messages.map((message: CampaignMessageEntity) => {
            return {
                id: message.id,
                campaign_id: message.campaign_id.id,
                shipping_status: message.shipping_status,
                shipping_date: message.shipping_date,
                message: message.message,
                status: message.status,
                user_id: message?.campaign_id?.user_id?.id,
                client_id: message?.campaign_id?.user_id?.client_id?.id,
                created_at: message.created_at,
                updated_at: message.updated_at,
                deleted_at: message.deleted_at
            }
        });

        return mappedMessages;
    }

    private customFilters(query: IQueryBuilderRequest<CampaignMessageEntity>, args: any): void {
        if (GeneralHelper.existsAndNotEmpty(args, 'id')) query.value.andWhere('campaignMessage.id = :id', { id: args.id });
        if (GeneralHelper.existsAndNotEmpty(args, 'status')) query.value.andWhere('campaignMessage.status = :status', { status: args.status });
        if (GeneralHelper.existsAndNotEmpty(args, 'shipping_date'))
            query.value.andWhere(
                'DATE_FORMAT(campaignMessage.shipping_date, "%Y-%m") = :shipping_date',
                { shipping_date: args.shipping_date }
            );
        if (GeneralHelper.existsAndNotEmpty(args, 'client_id')) query.value.andWhere('client.id = :id', { id: args.client_id });
    }
}