import Login from '@/views/auth/Login.vue'
import guest from '@/middleware/guest'
import auth from '@/middleware/auth'

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: {
            middleware: [
                guest
            ],
            title: 'Demo Academic | Login'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            middleware: [
                guest
            ],
            title: 'Demo Academic | Login'
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ( /* webpackChunkName: "dashboard" */ '@/views/dahsboard.vue'),
        meta: {
            middleware: [
                auth
            ],
            title: 'Demo Academic | Dashboard'
        },
    },
    {
        path: '/classes',
        name: 'classs',
        component: () =>
            import ( /* webpackChunkName: "asset" */ '@/views/classes/index.vue'),
            meta: {
                middleware: [
                    auth
                ],
                title: 'Classes'
            }
    },
    {
        path: '/classes/create',
        name: 'create_classs',
        component: () =>
            import ( /* webpackChunkName: "asset" */ '@/views/classes/create.vue'),
            meta: {
                middleware: [
                    auth
                ],
                title: 'Classes | Create'
            }
    },
    {
        path: '/classes/:id/edit',
        name: 'class.edit',
        props: true,
        component: () =>
            import ( /* webpackChunkName: "asset" */ '@/views/classes/edit.vue'),
            meta: {
                middleware: [
                    auth
                ],
                title: 'Classes | edit'
            }
    },
    {
        path: '/students',
        name: 'student',
        component: () =>
            import ( /* webpackChunkName: "domain" */ '@/views/students/index.vue'),
            meta: {
                middleware: [
                    auth
                ],
                title: 'Student'
            }
    },
    {
        path: '/students/create',
        name: 'student.create',
        component: () =>
            import ( /* webpackChunkName: "asset" */ '@/views/students/create.vue'),
            meta: {
                middleware: [
                    auth
                ],
                title: 'Classes | Create'
            }
    },
    {
        path: '/students/:id/edit',
        name: 'student.edit',
        component: () =>
            import ( /* webpackChunkName: "asset" */ '@/views/students/edit.vue'),
            meta: {
                middleware: [
                    auth
                ],
                title: 'Classes | edit'
            }
    },
    {
        path: '*',
        component: ()=>
            import ( /* webpackChunkName: "404" */ '@/views/404.vue'),
            meta: {
                middleware: [
                    auth
                ]
            },
    },
]

export default routes;
