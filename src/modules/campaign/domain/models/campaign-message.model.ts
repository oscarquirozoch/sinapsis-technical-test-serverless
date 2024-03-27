export class CampaignMessage {
    id?: number;
    campaign_id: number;
    shipping_status: number;
    shipping_date: string;
    message: string;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}