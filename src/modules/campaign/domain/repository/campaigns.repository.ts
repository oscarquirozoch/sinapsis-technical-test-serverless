import { BaseRepository } from "src/common/repository/base.repository";
import { Campaign } from "../models/campaign.model";

export interface CampaignsRepository extends BaseRepository<Campaign> { }