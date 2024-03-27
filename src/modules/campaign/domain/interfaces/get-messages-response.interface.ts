export interface IGetMessagesResponse {
    total_pending: number;
    total_sent: number;
    total_error: number;
    pending: any[];
    sent: any[];
    error: any[];
}