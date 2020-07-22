<template>
  <div id="app">
    <headerComponent></headerComponent>
    <keep-alive><router-view></router-view></keep-alive>
    <img class="bonfire" src="./assets/images/Bonfire2.gif" alt="">
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

.bonfire{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 150px;
  object-fit: contain;
}

</style>
