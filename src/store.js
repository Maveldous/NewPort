import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        name: '',
        state: false,
        lang: {
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
            }
        },
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
        MAIN_LANG(state){
            return state.lang
        }
    },
    mutations: {
        CHANGE_STATE_TRUE(state) {
            state.state = !state.state
        },
        UPDATE_NAME(state, payload) {
            state.name = payload
        },
        CHANGE_LANG(state, payload){
            if(payload) state.lang = state.rusLang
            else state.lang = state.engLang
        }
    },
    actions: {
        TOGGLE_STATE_TRUE({commit}){
            commit('CHANGE_STATE_TRUE')
        },
        TOGGLE_LANG({commit}, payload){
            commit('CHANGE_LANG', payload)
        }
    }
})

export default store;