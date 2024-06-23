import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {mock} from "@/modules/sprints/mock";


export const useStoreSprints = defineStore('storeSprints', () => {
    const stateSprints = ref(mock)

    const handlerUpdateStateBoards = (payload) => stateSprints.value = payload
    const handlerAddNewSprintInState = (payload) => stateSprints.value.push(payload)

    return {stateSprints, handlerAddNewSprintInState, handlerUpdateStateBoards}
})

