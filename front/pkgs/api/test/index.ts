import {axiosAdapter, EnumMethodsAPI} from "../config";

export const testAPI = (payload: any) => {
    return axiosAdapter({
        url: '/todos/1',
        method: EnumMethodsAPI.GET,
        data: payload
    })
}

