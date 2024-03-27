import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { StatusEnum } from "src/common/enums/status.enum";

export class CreateUserDto {

    @ApiProperty()
    @IsInt()
    @IsPositive()
    client_id: number;

    @ApiProperty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsEnum(StatusEnum)
    @IsOptional()
    status: number;

}