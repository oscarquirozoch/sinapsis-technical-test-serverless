import { BaseRepository } from "src/common/repository/base.repository";
import { Client } from "../models/client.model";

export interface ClientsRepository extends BaseRepository<Client> { }