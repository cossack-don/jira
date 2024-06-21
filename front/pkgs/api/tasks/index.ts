import {axiosAdapter, EnumMethodsAPI} from "../config";

export const serviceTasks = {
    getById: (id: string) => {
        return axiosAdapter({
            url: `/tasks/${id}`,
            method: EnumMethodsAPI.GET,
        })
    },
    updateByIdTask: (id: string, list: string) => {
        return axiosAdapter({
            url: `/tasks/${id}`,
            method: EnumMethodsAPI.PATCH,
            data: {list}
        })
    }
}