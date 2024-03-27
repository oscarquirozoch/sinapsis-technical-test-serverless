import { IsDateString, IsEnum, IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { StatusEnum } from "src/common/enums/status.enum";

export class GetCampaignsDto {

    @IsInt()
    @IsPositive()
    @IsOptional()
    id: number;

    @IsInt()
    @IsPositive()
    user_id: number;

    @IsString()
    @IsOptional()
    name: string;

    @IsDateString()
    @IsOptional()
    schedule_time: string;

    @IsEnum(StatusEnum)
    @IsOptional()
    status: number;

}