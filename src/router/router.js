import Vue from "vue";
import Router from 'vue-router'

// import App from '../App'
import About from '../pages/aboutPage'
import mainComponent from "../pages/mainPage"
import skillsPage from "../pages/skillsPage"
import worksPage from "../pages/worksPage"

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: mainComponent
        },
        {
            path: '/About',
            name: 'about',
            component: About,
            props: true
        },
        {
            path: '/Skills',
            name: 'skills',
            component: skillsPage
        },
        {
            path: '/Works',
            name: 'works',
            component: worksPage
        }
    ]
})

export default router;