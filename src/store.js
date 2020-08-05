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
                text: `! My name is Naumov Artem. I have been doing front-end development for over a year. Most of this time I worked as a freelancer or creating my own pet-projects.
                Despite my passion for the web, I have never forgotten about other PLs, so now I can boast of a good experience of working with C ++ and C #. I'am familiar and have worked with many concepts, principles of programming, such as: Rest API, Solid, OOP, Functional programming and etc. Most of my skills are listed in the "My Skills" section. From soft skills, I can single out: communication skills, teamwork, good time management and a responsible approach to any business. Since this is the section "About Me", I can add a little about my hobbies, namely: love of playing chess, reading foreign or classical literature, as well as playing sports with friends. In general, that's all, thank you for your time with this text and hope to work with you soon!`
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
                text: `! Меня зовут Наумов Артем. Более года я занимаюсь front-end разработкой. Большую часть этого времени проработал на фрилансе или создавая свои pet-проекты.
                Не смотря на мою увлеченность вэбом, никогда не забывал про другие ЯПы, поэтому сейчас могу похвастаться хорошим опытом работы с C++ и С#. Знаком и работал с многими концепциями, принципами программирования, такими как: Rest API, Solid, OOP, Functional programming и etc. Большая часть моих навыков указана в разделе "Мои навыки". Из soft skills могу выделить коммуникативные навыки, работа в команде, хороший тайм менеджмент и ответственный подход к любому делу. Так как это раздел "О себе", могу добавить немного про свои увлечения, а именно: любовь к игре в шахматы, чтение зарубежной или классической литературы, а так же занятия спортом с друзьями. В целом, это все, спасибо за уделенное время этому тексту и надеюсь на скорую работу с вами!`
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