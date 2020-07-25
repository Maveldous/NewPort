<template>
  <section class="works">
      <h1 class="works__title">Мои работы</h1>
      <mapComponent />
  </section>
</template>

<script>

import mapComponent from "../components/mapComponent.vue";

export default {
  name: "App",
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

  }

</style>