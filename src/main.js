import Vue from "vue";
import App from "./App.vue";
import router from "./router/router"
import store from "./store"
import './assets/styles/style.scss'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App), store, router
}).$mount("#app");
