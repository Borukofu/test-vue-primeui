import ViewPost from "@/components/posts/ViewPost.vue";
import Home from "@/pages/Home.vue"
import LogInPage from "@/pages/LogInPage.vue"
import Registration from "@/pages/Registration.vue";

import {createRouter, createWebHistory} from  "vue-router";

const routes = [
    {
        path:"/",
        component: Home,
    },
    {
        path:"/login",
        component: LogInPage,
    },
    {
        path:"/registration",
        component: Registration,
    },
];

const router = createRouter({
    routes,
    history:createWebHistory("/")
});

export default router;