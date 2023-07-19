import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from '../layout/index.vue'
import UpgradeView from './upgrade/index.vue'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'upgrade',
                component: UpgradeView
            }]
    }
]


export const router = createRouter({
    history: createWebHashHistory('/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});