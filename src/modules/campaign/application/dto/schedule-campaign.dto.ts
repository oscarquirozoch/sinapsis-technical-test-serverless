import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsInt, IsOptional, IsPositive, IsString, ValidateNested } from "class-validator";
import { StatusEnum } from "src/common/enums/status.enum";
import { CreateCampaignMessageDto } from "./create-campaign-message.dto";
import { Type } from "class-transformer";

export class ScheduleCampaignDto {

    @ApiProperty()
    @IsInt()
    @IsPositive()
    user_id: number;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsDateString()
    schedule_time: string;

    @ApiProperty({ required: false })
    @IsEnum(StatusEnum)
    @IsOptional()
    status: number;

    @ApiProperty({ type: [CreateCampaignMessageDto] })
    @ValidateNested({ each: true })
    @Type(() => CreateCampaignMessageDto)
    @IsOptional()
    messages: CreateCampaignMessageDto[];

}