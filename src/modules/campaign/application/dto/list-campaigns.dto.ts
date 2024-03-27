import { IsDateString, IsEnum, IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { PaginateDto } from "src/common/dto/paginate.dto";
import { StatusEnum } from "src/common/enums/status.enum";

export class ListCampaignsDto extends PaginateDto {

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