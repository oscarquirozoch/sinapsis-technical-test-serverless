import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional } from "class-validator";
import { IsYearMonthString } from "src/common/decorators/is-year-month-validator.decorator";

export class GetMessagesDto {

    @ApiProperty({example: '2024-04'})
    @IsYearMonthString()
    shipping_date: string;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    client_id: number;

}