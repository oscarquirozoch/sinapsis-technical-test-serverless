import { PartialType } from "@nestjs/mapped-types";
import { CreateCampaignDto } from "./create-campaign.dto";
import { IsInt, IsPositive } from "class-validator";

export class UpdateCampaignDto extends PartialType(CreateCampaignDto) {

    @IsInt()
    @IsPositive()
    id: number;

}