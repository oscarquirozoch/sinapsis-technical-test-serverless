import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CampaignsController } from "../controllers/campaigns.controller";
import { CampaignsRepositoryImpl } from "../repository/campaigns.repositoryimpl";
import { CampaignEntity } from "../entities/campaign.entity";
import { CampaignMessagesRepositoryImpl } from "../repository/campaign-messages.repositoryimpl";
import { CampaignMessageEntity } from "../entities/campaign-message.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CampaignEntity,
            CampaignMessageEntity
        ])
    ],
    controllers: [
        CampaignsController
    ],
    providers: [
        CampaignsRepositoryImpl,
        CampaignMessagesRepositoryImpl
    ],
    exports: [
        TypeOrmModule
    ]
})
export class CampaignModule { }