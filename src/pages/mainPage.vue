<template>
  <main class="main">
      <div class="main__warapper">
        <h1 class="main__title">{{MAIN_LANG.mainPage.title}}</h1>
      </div>
      <nav class="main__nav">
          <ul class="main__nav-items">
              <li class="main__nav-item">
                <router-link to='/about'> {{MAIN_LANG.mainPage.text1}}</router-link>
              </li>
              <li class="main__nav-item">
                <router-link to='/skills'> {{MAIN_LANG.mainPage.text2}}</router-link>
              </li>
              <li class="main__nav-item">
                <router-link to='/works'> {{MAIN_LANG.mainPage.text3}}</router-link>
              </li>
              <li class="main__nav-item">
                <a @click.prevent="TOGGLE_STATE_TRUE"> {{MAIN_LANG.mainPage.text4}} </a>
              </li>
          </ul>
      </nav>
      <div class="background"  alt=""></div>
  </main>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Header",
  data: function(){
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'MAIN_LANG'
    ])
  },
  methods: {
    ...mapActions([
      'TOGGLE_STATE_TRUE'
    ])
  }
};
</script>

<style scoped lang="scss">

  .main{
    text-align: center;
    &__title{
        position: relative;
        margin: 25vh 0 20vh 0;
        font-size: 100px;
        font-family: 'Merriweather', serif;
        &::before{
            position: absolute;
            content: '';
            width: 0vw;
            left: 50%;
            transform: translateX(-50%);
            top: 65px;
            height: 10px;
            background: url('../assets/images/line.png') center no-repeat;
            z-index: 4;
            transition: all 0.3s ease;
        }
        &.animation::before{
          width: 50vw;
        }
    }
    &__nav-items{
      display: inline-block;
      margin: 0 auto;
    }
    &__nav-item{
        position: relative;
        margin: 5px 0;
        z-index: 1;
        &:hover::after{
          position: absolute;
          content: '';
          width: 150%;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          box-shadow: 0px 0px 20px 4px rgba(245, 242, 59, 0.6);;
        }
    }
  }
  
  .background{
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0);
    &.animation{
      background: url("../assets/images/orig.gif") no-repeat;
      background-size: cover;
    }
  }
</style>

