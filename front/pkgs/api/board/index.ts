import {axiosAdapter, EnumMethodsAPI} from "../config";

export const serviceBoard = {
    getList: () => {
        return axiosAdapter({
            url: '/board',
            method: EnumMethodsAPI.GET,
        })
    },

}