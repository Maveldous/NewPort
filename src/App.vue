<template>
  <div id="app">
    <headerComponent></headerComponent>
    <transition name="fade" mode="out-in">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </transition>
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

.fade-enter-active, .fade-leave-active{
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
