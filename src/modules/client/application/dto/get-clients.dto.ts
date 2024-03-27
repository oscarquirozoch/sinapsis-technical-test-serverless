import { IsEnum, IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { StatusEnum } from "src/common/enums/status.enum";

export class GetClientsDto {

    @IsInt()
    @IsPositive()
    @IsOptional()
    id: number;

    @IsString()
    @IsOptional()
    name: string;

    @IsEnum(StatusEnum)
    @IsOptional()
    status: number;

}