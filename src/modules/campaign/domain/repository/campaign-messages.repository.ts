import { BaseRepository } from "src/common/repository/base.repository";
import { CampaignMessage } from "../models/campaign-message.model";

export interface CampaignMessagesRepository extends BaseRepository<CampaignMessage> { }