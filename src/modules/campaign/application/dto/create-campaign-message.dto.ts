import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { ShippingStatusEnum } from "src/common/enums/shipping_status.enum";
import { StatusEnum } from "src/common/enums/status.enum";

export class CreateCampaignMessageDto {

    @ApiProperty()
    @IsEnum(ShippingStatusEnum)
    shipping_status: number;

    @ApiProperty({ required: false })
    @IsDateString()
    @IsOptional()
    shipping_date: string;

    @ApiProperty()
    @IsString()
    message: string;

    @ApiProperty({ required: false })
    @IsEnum(StatusEnum)
    @IsOptional()
    status: number;

}