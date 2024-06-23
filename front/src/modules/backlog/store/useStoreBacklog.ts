import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useStoreTasks} from "@/modules/tasks/useStoreTasks";


export const useStoreBacklog = defineStore('storeBacklog', () => {
    const storeTasks = useStoreTasks()
    const stateBacklogTasks = ref(
        [
            {
                id: '1f1cb8d5b769686c1ff33f6d98ec8fbdac',
                nameSprint: 'BACKLOG',
                list: [{
                    "nameTask": "Создать АПИ",
                    "descriotion": "",
                    "dateCreate": "2024-06-19T17:56:01.016Z",
                    "storyPoint": "3",
                    "priority": "medium",
                    "status": "",
                    "version": "",
                    "tags": [],
                    "typeTask": "epic",
                    "id": 103,
                    "title": "Item A",
                    "list": 0
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
                        "typeTask": "epic",
                        "id": 12323,
                        "title": "Item A",
                        "list": 1
                    },
                    {
                        "nameTask": "Создать2 АПИ",
                        "descriotion": "",
                        "dateCreate": "2024-06-19T17:56:01.016Z",
                        "storyPoint": "3",
                        "priority": "medium",
                        "status": "",
                        "version": "",
                        "tags": [],
                        "typeTask": "epic",
                        "id": 123,
                        "title": "Item A",
                        "list": 2
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
                        "typeTask": "epic",
                        "id": 13,
                        "title": "Item A",
                        "list": 3
                    }

                ],
            },
            {
                id: '1f1cb8d5b769686c1fff6d9822ec8fbdac',
                nameSprint: '2222',


            }, {
            id: '1f1cb8d5b769686c1fff6d98ec8fbdac',
            nameSprint: '33333',


        }, {
            id: '1f1cb8d115b76219686c1fff6d98ec8fbdac',
            nameSprint: '44444',
     

        }
        ])

    const addItemInEndState = (payload) => {
        stateBacklogTasks.value.push(payload)
    }

    return {stateBacklogTasks, addItemInEndState}
})

