import {ref} from 'vue'
import {defineStore} from 'pinia'


export const useStoreTasks = defineStore('storeTasks', () => {

    const stateTasks = ref([{
        "nameTask": "two",
        "descriotion": "",
        "dateCreate": "2024-06-19T17:45:58.421Z",
        "storyPoint": "0",
        "priority": "",
        "status": "",
        "version": "",
        "tags": [],
        "typeTask": "",
        "id": 33,
        "title": "Item A",
        "list": 7
    },
        {
            "nameTask": "Создать АПИ",
            "descriotion": "",
            "dateCreate": "2024-06-19T17:56:01.016Z",
            "storyPoint": "3",
            "priority": "medium",
            "status": "",
            "version": "",
            "tags": [],
            "typeTask": "",
            "id": 1,
            "title": "Item A",
            "list": 7
        }])

    const setStateTasks = (payload) => stateTasks.value.push(payload)

    return {stateTasks, setStateTasks}
})

