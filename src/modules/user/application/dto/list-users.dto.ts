import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { PaginateDto } from "src/common/dto/paginate.dto";
import { StatusEnum } from "src/common/enums/status.enum";

export class ListUsersDto extends PaginateDto {

    @ApiProperty({ required: false })
    @IsInt()
    @IsPositive()
    @IsOptional()
    id: number;

    @ApiProperty({ required: false })
    @IsInt()
    @IsPositive()
    @IsOptional()
    client_id: number;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    username: string;

    @ApiProperty({ required: false })
    @IsEnum(StatusEnum)
    @IsOptional()
    status: number;

}