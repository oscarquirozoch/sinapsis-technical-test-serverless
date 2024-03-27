import { IsDate, IsDateString, IsEnum, IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { StatusEnum } from "src/common/enums/status.enum";

export class CreateCampaignDto {

    @IsInt()
    @IsPositive()
    user_id: number;

    @IsString()
    name: string;

    @IsDateString()
    schedule_time: string;

    @IsEnum(StatusEnum)
    @IsOptional()
    status: number;

}