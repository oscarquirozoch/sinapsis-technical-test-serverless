import { ApiProperty } from "@nestjs/swagger";

export class BadRequestResponse {

    @ApiProperty()
    message: unknown;

    @ApiProperty()
    error: string;

    @ApiProperty()
    statusCode: number

}