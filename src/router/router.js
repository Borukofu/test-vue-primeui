import Home from "@/pages/Home.vue"
import LogInPage from "@/pages/LogInPage.vue"

import {createRouter, createWebHistory} from  "vue-router";

const routes = [
    {
        path:"/",
        component: Home,
    },
    {
        path:"/login",
        component: LogInPage,
    }
];

const router = createRouter({
    routes,
    history:createWebHistory("/")
});

export default router;