<template>
  <section class="works">
      <h1 class="works__title title">{{MAIN_LANG.mainPage.text3}}</h1>
      <mapComponent/>
      <button @click.prevent="TOGGLE_MAP_VISION" class="works__btn">{{MAIN_LANG.works.btn}}</button>
      <img class="bonfire" src="../assets/images/Bonfire2.gif" alt="">
  </section>
</template>

<script>

import mapComponent from "../components/mapComponent.vue";
import {mapGetters, mapActions} from "vuex";


export default {
  name: "works",
  data: function(){
    return {
      
    }
  },
  components: {
    mapComponent
  },
  computed: {
    ...mapGetters([
      'MAIN_LANG'
    ])
  },
  methods: {
    ...mapActions([
      'TOGGLE_MAP_VISION'
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
      z-index: 10;
      border: 1px solid #fff;
      border-radius: 10px;
      background: $base-color;
      color: #fff;
      @media(max-width: $tableWidth){
        &{
          display: none;
        }
      }
    }
  }

</style>