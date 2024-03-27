import { Injectable } from "@nestjs/common";
import { BaseRepositoryImpl } from "src/common/repository/base.repositoryimpl";
import { Client } from "../../domain/models/client.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IQueryBuilderRequest } from "src/common/packages/request-broker/interfaces/query-builder-request.interface";
import { ClientEntity } from "../entities/client.entity";
import { GeneralHelper } from "src/common/helpers/general.helper";

@Injectable()
export class ClientsRepositoryImpl extends BaseRepositoryImpl<ClientEntity, Client>{

    constructor(
        @InjectRepository(ClientEntity)
        protected clientRepository: Repository<ClientEntity>
    ) {
        super(
            clientRepository,
            'client',
            (query, args) => this.customFilters(query, args)
        )
    }

    private customFilters(query: IQueryBuilderRequest<ClientEntity>, args: any): void {
        if (GeneralHelper.existsAndNotEmpty(args, 'id')) query.value.andWhere('client.id = :id', { id: args.id });
        if (GeneralHelper.existsAndNotEmpty(args, 'name')) query.value.andWhere('client.name LIKE :id', { id: `%${args.name}%` });
        if (GeneralHelper.existsAndNotEmpty(args, 'status')) query.value.andWhere('client.status = :status', { status: args.status });
    }

}