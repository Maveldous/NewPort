import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        name: '',
        state: false,
        mapVision: false,
        lang: {},
        engLang: {
            header:{
                title: 'Hello',
                text: 'Enter your name and select a language',
                btn: 'Confirm'
            },
            mainPage:{
                title: 'Portfolio',
                text1: 'About me',
                text2: 'My skills',
                text3: 'My works',
                text4: 'Exit'
            },
            aboutMe:{
                text: "! I'm Naumov Artem. Junior Web Developer with over 1 years of experience specializing in front end development. I have experience in working with various technologies and their integration. Will be glad to work with you"
            },
            works:{
                btn: 'Show all',
                project1: 'Animation project',
                project2: 'Videoplayer',
                project3: 'Timers project',
                project4: 'Landing project',
                project5: 'Project5',
                project6: 'Project6',
                project7: 'Project7',
                project8: 'Project8',
                project9: 'Project9',
            }
        },
        rusLang: {
            header:{
                title: 'Здравствуйте',
                text: 'Введите свое имя и выберите язык',
                btn: 'Подтвердить'
            },
            mainPage:{
                title: 'Портфолио',
                text1: 'Обо мне',
                text2: 'Мои навыки',
                text3: 'Мои работы',
                text4: 'Выход'
            },
            aboutMe:{
                text: "! Меня зовут Наумов Артем. Я веб-разработчик с более чем 1-летним опытом работы в области front-end разработки. У меня есть опыт работы с различными технологиями и их интеграцией. Буду рад работать с вами!"
            },
            works:{
                btn: 'Показать все',
                project1: 'Animation project',
                project2: 'Videoplayer',
                project3: 'Timers project',
                project4: 'Landing project',
                project5: 'Project5',
                project6: 'Project6',
                project7: 'Project7',
                project8: 'Project8',
                project9: 'Project9',
            }
        }
    },
    getters:{
        HEADER_NAME(state){
            return state.name;
        },
        HEADER_STATE(state){
            return state.state
        },
        GET_MAP_VISION(state){
            return state.mapVision
        },
        MAIN_LANG(state){
            return state.lang
        }
    },
    mutations: {
        CHANGE_STATE_TRUE(state) {
            state.state = !state.state
        },
        CHANGE_MAP_VISION(state){
            state.mapVision = !state.mapVision
        },
        UPDATE_NAME(state, payload) {
            state.name = payload
        },
        CHANGE_LANG(state, payload){
            if(payload) state.lang = state.rusLang
            else state.lang = state.engLang
        },
    },
    actions: {
        TOGGLE_STATE_TRUE({commit}){
            commit('CHANGE_STATE_TRUE')
        },
        TOGGLE_LANG({commit}, payload){
            commit('CHANGE_LANG', payload)
        },
        TOGGLE_MAP_VISION({commit}){
            commit('CHANGE_MAP_VISION')
        }
    }
})

export default store;