export const mock = [
    {
        id: `1`,
        type: 'container',
        name: 'Беклог',
        props: {
            orientation: 'vertical',
            className: 'card-container',
        },
        children: [
            {
                type: 'draggable',
                id: `TASK_ID_1_BOARD_ID_${1}`,
                props: {
                    className: 'card',
                    style: {backgroundColor: 'gray'},
                },
                nameTask: `задачи 122`,
                data: 'описание задачи22',
            },
            {
                type: 'draggable',
                id: `TASK_ID_2_BOARD_ID_${1}`,
                props: {
                    className: 'card',
                    style: {backgroundColor: 'gray'},
                },
                nameTask: `задачи 5`,
                data: 'описание задачи22',
            }
        ],
    },
    {
        id: `2`,
        type: 'container',
        name: 'Первый спринт',
        props: {
            orientation: 'vertical',
            className: 'card-container',
        },
        children: [{
            type: 'draggable',
            id: `TASK_ID_1_BOARD_ID_${2}`,
            props: {
                className: 'card',
                style: {backgroundColor: 'gray'},
            },
            nameTask: `Номер задачи 5`,
            data: 'описание задачи22',
        },
            {
                type: 'draggable',
                id: `TASK_ID_2_BOARD_ID_${2}`,
                props: {
                    className: 'card',
                    style: {backgroundColor: 'gray'},
                },
                nameTask: ` задачи 5`,
                data: 'описание зadadaaадачи22',
            }
        ],
    },
    {
        id: `3`,
        type: 'container',
        name: 'Второй Спринт',
        props: {
            orientation: 'vertical',
            className: 'card-container',
        },
        children: [{
            type: 'draggable',
            id: `TASK_ID_1_BOARD_ID${3}`,
            props: {
                className: 'card',
                style: {backgroundColor: 'gray'},
            },
            nameTask: `Номер задачи 5`,
            description: 'test',
            "dateCreate": "2024-06-19T17:45:58.421Z",
            "storyPoint": "10",
            "priority": "medium",
            "status": "",
            "version": "",
            "tags": [],
            "typeTask": "task",
            data: 'описание задачи22',
        }],
    },
];
