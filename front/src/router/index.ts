import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'auth',
            component: () => import('@/modules/auth/pages/index.vue')
        },
        {
            path: '/boards',
            name: 'boards',
            component: () => import('@/modules/boards/pages/Boards.vue'),
        },
        {
            path: '/boards/:id',
            name: 'board',
            component: () => import('@/modules/boards/[id]/Board.vue')
        },

        {
            path: '/boards/create',
            name: 'create-board',
            component: () => import('@/modules/boards/pages/CreateBoard.vue')
        },

        {
            path: '/backlog',
            component: () => import('@/modules/backlog/index.vue'),
            children: [
                {
                    path: '/backlog',
                    name: 'f',
                    component: () => import('@/modules/backlog/pages/AllTasks.vue'),
                },
                // {
                //     path: '/backlog/create-task',
                //     name: 'create-task',
                //     component: () => import('@/modules/backlog/pages/CreateTask.vue')
                // }
            ]
        },

        {
            path: '/tasks',
            component: () => import('@/modules/backlog/index.vue'),
            children: [
                {
                    path: '/tasks',
                    name: 'all-tasks',
                    component: () => import('@/modules/tasks/pages/AllTasks.vue'),
                },
                {
                    path: '/tasks/create-task',
                    name: 'create-task',
                    component: () => import('@/modules/tasks/pages/CreateTask.vue')
                },
                {
                    path: '/tasks/edit/:id',
                    name: 'edit-task',
                    component: () => import('@/modules/tasks/[id]/EditTask.vue')
                }
            ]
        },

    ]
})

export default router
