import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { StatusEnum } from "src/common/enums/status.enum";

export class CreateClientDto {

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty({ required: false })
    @IsEnum(StatusEnum)
    @IsOptional()
    status: number;

}