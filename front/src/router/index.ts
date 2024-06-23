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
            path: '',
            children: [
                {
                    path: '/sprints',
                    name: 'sprints',
                    component: () => import('@/modules/sprints/Sprints.vue'),
                },
                {
                    path: '/sprints/create-sprint',
                    name: 'create-sprint',
                    component: () => import('@/modules/sprints/CreateSprint.vue')
                },
                {
                    path: '/sprints/edit-sprint/:id',
                    name: 'edit-sprint',
                    component: () => import('@/modules/sprints/EditSprint.vue')
                }
            ]
        },

        {
            path: '',
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
