import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {mockBoards} from "@/modules/boards/store/mockBoards";


export const useStoreBoards = defineStore('storeBoards', () => {
    const stateBoards = ref(mockBoards)

    const setStateBoards = (payload) => stateBoards.value = payload
    const handlerAddBoardInInitialState = (payload) => stateBoards.value.push(payload)

    return {stateBoards, handlerAddBoardInInitialState, setStateBoards}
})

