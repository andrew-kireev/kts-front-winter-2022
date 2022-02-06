import {ApiResponse, IApiStore, RequestParams} from "./types";

export default class ApiStore implements IApiStore {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        // TODO: Примите из параметров конструктора baseUrl
        // и присвойте его в this.baseUrl
    }

    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {

        let apiResponse: ApiResponse<any, any>;

        let url = this.baseUrl + params.endpoint
        // TODO: Напишите здесь код, который с помощью fetch будет делать запрос
        return fetch(url, { headers: params.headers })
            .then(response => {
                return response.json().then(body => {
                    apiResponse = {
                        status: response.status,
                        data: body,
                        success: response.ok
                    };
                    return apiResponse;
                })
            })
    }

}
