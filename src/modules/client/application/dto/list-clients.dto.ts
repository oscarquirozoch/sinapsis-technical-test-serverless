import { IsEnum, IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { PaginateDto } from "src/common/dto/paginate.dto";
import { StatusEnum } from "src/common/enums/status.enum";

export class ListClientsDto extends PaginateDto {

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