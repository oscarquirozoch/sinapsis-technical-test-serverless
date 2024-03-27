import { Injectable } from "@nestjs/common";
import { BaseRepositoryImpl } from "src/common/repository/base.repositoryimpl";
import { User } from "../../domain/models/user.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IQueryBuilderRequest } from "src/common/packages/request-broker/interfaces/query-builder-request.interface";
import { GeneralHelper } from "src/common/helpers/general.helper";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UsersRepositoryImpl extends BaseRepositoryImpl<UserEntity, User>{

    constructor(
        @InjectRepository(UserEntity)
        protected userRepository: Repository<UserEntity>
    ) {
        super(
            userRepository,
            'user',
            (query, args) => this.customFilters(query, args)
        )
    }

    private customFilters(query: IQueryBuilderRequest<UserEntity>, args: any): void {
        if (GeneralHelper.existsAndNotEmpty(args, 'id')) query.value.andWhere('user.id = :id', { id: args.id });
        if (GeneralHelper.existsAndNotEmpty(args, 'client_id')) query.value.andWhere('user.client_id = :client_id', { client_id: args.client_id });
        if (GeneralHelper.existsAndNotEmpty(args, 'username')) query.value.andWhere('user.username LIKE :username', { username: `%${args.username}%` });
        if (GeneralHelper.existsAndNotEmpty(args, 'status')) query.value.andWhere('user.status = :status', { status: args.status });
    }

}