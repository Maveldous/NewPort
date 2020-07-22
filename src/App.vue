<template>
  <div id="app">
    <headerComponent></headerComponent>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue"; #42b983
import headerComponent from "./components/headerComponent.vue";

export default {
  name: "App",
  components: {
    headerComponent
  }
};
</script>

<style lang="scss">



</style>
