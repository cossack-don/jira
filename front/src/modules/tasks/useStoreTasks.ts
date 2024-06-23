import {ref} from 'vue'
import {defineStore} from 'pinia'
import {useStoreSprints} from "@/modules/sprints/useStoreSprints";


export const useStoreTasks = defineStore('storeTasks', () => {
    const storeSprints = useStoreSprints()

    let arr = []
    storeSprints.stateSprints.forEach((item) => {

        arr.push(...item.children)
    })
    const stateTasks = ref(arr)
    

    const setStateTasks = (payload) => stateTasks.value.push(payload)

    return {stateTasks, setStateTasks}
})

