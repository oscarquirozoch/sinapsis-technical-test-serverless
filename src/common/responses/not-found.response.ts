import { ApiProperty } from "@nestjs/swagger";

export class NotFoundResponse {

    @ApiProperty()
    message: string;

    @ApiProperty()
    error: string;

    @ApiProperty()
    statusCode: number;

}