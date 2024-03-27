import { ApiProperty } from "@nestjs/swagger";

export class User {

    @ApiProperty()
    id?: string;

    @ApiProperty()
    client_id: number;

    @ApiProperty()
    username: string;

    @ApiProperty()
    status: number;

    @ApiProperty()
    created_at?: Date;

    @ApiProperty()
    updated_at?: Date;

    @ApiProperty()
    deleted_at?: Date;
}