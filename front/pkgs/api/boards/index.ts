import {axiosAdapter, EnumMethodsAPI} from "../config";

export const serviceBoards = {
    getList: () => {
        return axiosAdapter({
            url: '/boards',
            method: EnumMethodsAPI.GET,
        })
    }
}