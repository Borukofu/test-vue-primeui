import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config"
import Aura from '@primeuix/themes/material';
import Components from "@/components/UI"
import { Tooltip } from 'primevue';

import "./style.css"

import router from './router/router';
import VueCookies from "vue3-cookies";

const app = createApp(App);

Components.forEach(component =>{
    app.component(component.name,component)
})


app.use(PrimeVue,{
    theme:{
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
})
app.directive('tooltip',Tooltip)
app.use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
});
app.use(router);
app.mount('#app')
