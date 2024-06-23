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
                id: `1`,
                props: {
                    className: 'card',
                    style: {backgroundColor: 'gray'},
                },
                number: `Номер задачи 122`,
                data: 'описание задачи22',
            },
            {
                type: 'draggable',
                id: `1`,
                props: {
                    className: 'card',
                    style: {backgroundColor: 'gray'},
                },
                number: `Номер задачи 5`,
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
            id: `1`,
            props: {
                className: 'card',
                style: {backgroundColor: 'gray'},
            },
            number: `Номер задачи 5`,
            data: 'описание задачи22',
        }],
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
            id: `1`,
            props: {
                className: 'card',
                style: {backgroundColor: 'gray'},
            },
            number: `Номер задачи 5`,
            data: 'описание задачи22',
        }],
    },
];