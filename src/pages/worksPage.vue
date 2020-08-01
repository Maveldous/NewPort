<template>
  <section class="works">
      <h1 class="works__title">{{MAIN_LANG.mainPage.text3}}</h1>
      <mapComponent :state="HEADER_STATE_VISION" />
      <button @click.prevent="TOGGLE_STATE_VISION" class="works__btn">{{MAIN_LANG.Works.btn}}</button>
      <img class="bonfire" src="../assets/images/Bonfire2.gif" alt="">
  </section>
</template>

<script>

import mapComponent from "../components/mapComponent.vue";
import {mapGetters, mapActions} from "vuex";


export default {
  name: "App",
  data: function(){
    return {
      
    }
  },
  components: {
    mapComponent
  },
  computed: {
    ...mapGetters([
      'MAIN_LANG',
      'HEADER_STATE_VISION'
    ])
  },
  methods: {
    ...mapActions([
      'TOGGLE_STATE_VISION'
    ])
  }
};
</script>

<style lang="scss">
  .works{
    &__title{
      text-align: center;
      margin: 25vh auto 10vh;
      color: rgb(97, 95, 4);
    }
    &__btn{
      position: fixed;
      padding: 10px;
      bottom: 20px;
      left: 20px;
      border: 1px solid #fff;
      border-radius: 10px;
      background: rgb(32, 31, 31);
      color: #fff;
    }
  }

</style>