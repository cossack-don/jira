import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useStoreTasks} from "@/modules/tasks/useStoreTasks";


export const useStoreBacklog = defineStore('storeBacklog', () => {
    const storeTasks = useStoreTasks()
    const stateBacklogTasks = ref(
        [
            {
                list: storeTasks.stateTasks
                // id: '4f1cb8d5b769686c6fff6d98ec8fbdac',
                // list: [
                //     ...,
                //
                //     {
                //         "id": 0,
                //         "title": "Item A",
                //         "list": 0
                //     },
                //     {
                //         "id": 1,
                //         "title": "Item B",
                //         "list": 1
                //     },
                //     {
                //         "id": 2,
                //         "title": "It22em C",
                //         "list": 1
                //     },
                //     {
                //         "id": 3,
                //         "title": "Item D",
                //         "list": 2
                //     }
                //
                // ],

            },
            {
                id: '1f1cb8d5b769686c1fff6d98ec8fbdac',
                list: [

                    {
                        "id": 0,
                        "title": "Item A",
                        "list": 0
                    },
                    {
                        "id": 1,
                        "title": "Item B",
                        "list": 1
                    },
                    {
                        "id": 2,
                        "title": "Item C",
                        "list": 1
                    },
                    {
                        "id": 3,
                        "title": "Item D222",
                        "list": 2
                    }

                ],

            }
        ])

    const addItemInEndState = (payload) => {
        stateBacklogTasks.value.push(payload)
    }

    return {stateBacklogTasks, addItemInEndState}
})

