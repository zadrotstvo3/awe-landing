import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'White',
        meta: {layout: 'white'},
        component: () => import('@/js/pages/main_paiges/aweWhite.vue')
    },
    {
        path: '/home',
        name: 'Black',
        meta: {layout: 'black'},
        component: () => import('@/js/pages/main_paiges/aweBlack.vue')
    },
    {
        path: '/privat-policy',
        name: 'About',
        meta: {layout: 'white'},
        component: () => import('@/js/pages/AWE_White_paiges/PrivatePolicy.vue')
    },
    {
        path: '/our-team',
        name: 'Our Team',
        meta: {layout: 'white'},
        component: () => import('@/js/pages/AWE_White_paiges/OurTeam.vue')
    },
    {
        path: '/about-us',
        name: 'About Us',
        meta: {layout: 'white'},
        component: () => import('@/js/pages/AWE_White_paiges/AboutUs.vue')
    },
    {
        path: '/announcements',
        name: 'Announcements',
        meta: {layout: 'white'},
        component: () => import('@/js/pages/AWE_White_paiges/Announcements.vue')
    },
    {
        path: '/admin',
        name: 'Log-in',
        meta: {layout: 'admin'},
        component: () => import('@/js/pages/Admin_paiges/logIn')
    },
    {
        path: '/admin-panel',
        name: 'Admin-panel',
        meta: {layout: 'admin'},
        component: () => import('@/js/pages/Admin_paiges/AdminPanel'),
    },
    {
        path: '/for-investors',
        name: 'Investors',
        meta: {layout: 'black'},
        component: () => import('@/js/pages/AWE_Black_paiges/ForInvestors.vue')
    },
    {
        path: '/page-not-found',
        name: 'Error',
        meta: {layout: 'white'},
        component: () => import('@/js/pages/main_paiges/Error.vue')
    },
    {
        path: '*',
        redirect: '/page-not-found'
    }
]

const router = new VueRouter({
    mode: 'history',
    history: false,
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

export default router
