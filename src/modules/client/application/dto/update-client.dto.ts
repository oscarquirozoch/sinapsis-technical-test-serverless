import { IsEnum, IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { StatusEnum } from "src/common/enums/status.enum";

export class UpdateClientDto {

    @ApiProperty()
    @IsInt()
    @IsPositive()
    id: number;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({ required: false })
    @IsEnum(StatusEnum)
    @IsOptional()
    status: number;
}