import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsPositive } from "class-validator";

export class PaginateDto {

    @ApiProperty()
    @IsInt()
    @IsPositive()
    limit: number;

    @ApiProperty()
    @IsInt()
    @IsPositive()
    page: number

}