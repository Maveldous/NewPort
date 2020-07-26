<template>
  <section class="works">
      <h1 class="works__title">Мои работы</h1>
      <mapComponent :state="stateVision" />
      <button @click.prevent="stateVision = !stateVision" class="works__btn">Show all</button>
      <img class="bonfire" src="../assets/images/Bonfire2.gif" alt="">
  </section>
</template>

<script>

import mapComponent from "../components/mapComponent.vue";

export default {
  name: "App",
  data: function(){
    return {
      stateVision: false
    }
  },
  components: {
    mapComponent
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