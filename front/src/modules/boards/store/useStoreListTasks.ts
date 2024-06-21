import {ref, computed, reactive} from 'vue'
import {defineStore} from 'pinia'
import {mockListTasks} from "@/modules/boards/store/mockListTasks";

export const useStoreListTasks = defineStore('storeListTasks', () => {
    const stateListTasks = reactive(mockListTasks)

    const handlerUpdateStateListTasks = (payload) => {
        Object.assign(stateListTasks, payload)
        // stateListTasks.value = payload

    }

    return {stateListTasks, handlerUpdateStateListTasks}
})
