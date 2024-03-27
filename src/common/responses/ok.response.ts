import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/modules/user/domain/models/user.model";

export class OkResponse<T> {

    @ApiProperty()
    code: number;

    @ApiProperty()
    status: string;

    @ApiProperty()
    result: T


}