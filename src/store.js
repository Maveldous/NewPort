import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        name: '',
        state: false,
        stateVision: false,
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
                text: "Hello! I'm Naumov Artem. Junior Web Developer with over 1 years of experience specializing in front end development. I have experience in working with various technologies and their integration. Will be glad to work with you"
            },
            Works:{
                btn: 'Show all',
                project1: 'Project1',
                project2: 'Project2',
                project3: 'Project3',
                project4: 'Project4',
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
                text: "Здравствуйте! Меня зовут Наумов Артем. Я веб-разработчик с более чем 1-летним опытом работы в области front-end разработки. У меня есть опыт работы с различными технологиями и их интеграцией. Буду рад работать с вами!"
            },
            Works:{
                btn: 'Показать все',
                project1: 'Проект1',
                project2: 'Проект2',
                project3: 'Проект3',
                project4: 'Проект4',
                project5: 'Проект5',
                project6: 'Проект6',
                project7: 'Проект7',
                project8: 'Проект8',
                project9: 'Проект9',
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
        HEADER_STATE_VISION(state){
            return state.stateVision
        },
        MAIN_LANG(state){
            return state.lang
        }
    },
    mutations: {
        CHANGE_STATE_TRUE(state) {
            state.state = !state.state
        },
        CHANGE_STATE_VISION(state){
            state.stateVision = !state.stateVision
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
        TOGGLE_STATE_VISION({commit}){
            commit('CHANGE_STATE_VISION')
        }
    }
})

export default store;