import Vue from "vue";
import Router from 'vue-router'

// import App from '../App'
import About from '../components/about'
import mainComponent from "../components/mainComponent"

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/About',
            name: 'about',
            component: About,
            props: true
        },
        {
            path: '/',
            name: 'main',
            component: mainComponent
        }
    ]
})

export default router;