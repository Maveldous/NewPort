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
import headerComponent from "./components/headerComponent.vue";
import {mapMutations, mapGetters} from 'vuex';


export default {
  name: "App",
  components: {
    headerComponent
  },
  computed: {
    ...mapGetters([
      'HEADER_NAME'
    ])
  },
  methods: {
    ...mapMutations([
      'CHANGE_LANG',
      'UPDATE_NAME'
    ])
  },
  created: function(){
    this.CHANGE_LANG(true)
    window.addEventListener("unload", () => {
      localStorage.setItem('name', this.HEADER_NAME)
    })
    this.UPDATE_NAME(localStorage.getItem('name'))
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
