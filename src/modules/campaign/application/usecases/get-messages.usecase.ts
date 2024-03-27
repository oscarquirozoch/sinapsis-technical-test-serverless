import { IResponse } from "src/common/interfaces/Response.interface";
import { GetMessagesDto } from "../dto/get-messages.dto";
import { HandleExceptionHelper } from "src/common/helpers/handle-exception.helper";
import { ResponseHelper } from "src/common/helpers/response.helper";
import { CampaignMessagesRepository } from "../../domain/repository/campaign-messages.repository";
import { CampaignMessage } from "../../domain/models/campaign-message.model";
import { IGetMessagesResponse } from "../../domain/interfaces/get-messages-response.interface";
import { ShippingStatusEnum } from "src/common/enums/shipping_status.enum";
import { StatusEnum } from "src/common/enums/status.enum";

export class GetMessagesUseCase {

    constructor(
        private readonly _campaignMessagesRepository: CampaignMessagesRepository
    ) { }

    async exec(data: GetMessagesDto): Promise<IResponse<any>> {
        try {
            const response = new ResponseHelper();

            const messages = await this._campaignMessagesRepository.get({
                status: StatusEnum.ACTIVO,
                ...data
            });

            let processedResponse: IGetMessagesResponse = {
                total_pending: 0,
                total_sent: 0,
                total_error: 0,
                pending: [],
                sent: [],
                error: []
            };

            messages.forEach((message: CampaignMessage) => {
                if (message.shipping_status === ShippingStatusEnum.PENDIENTE) {
                    processedResponse.pending.push(message);
                    processedResponse.total_pending++;
                }

                if (message.shipping_status === ShippingStatusEnum.ENVIADO) {
                    processedResponse.sent.push(message);
                    processedResponse.total_sent++;
                }

                if (message.shipping_status === ShippingStatusEnum.ERROR) {
                    processedResponse.error.push(message);
                    processedResponse.total_error++;
                }

                return response;
            })

            response.result(processedResponse);

            return response.resolve();
        } catch (error) {
            console.log(error)
            throw new HandleExceptionHelper(error).throw();
        }
    }
}