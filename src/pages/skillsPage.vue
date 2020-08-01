<template>
  <section class="skills">
    <div class="skills__warapper wrapper">
      <div class="border"></div>
      <div class="skills__inner inner">
        <h1 class="skills__title title">{{MAIN_LANG.mainPage.text2}}</h1>
        <ul class="skills__list">
          <li class="skills__item item1">Vue.js/Vue-router/Vuex</li>
          <li class="skills__item item2">Gulp/Webpack</li>
          <li class="skills__item item3">JavaScript/TypeScript/JQuery</li>
          <li class="skills__item item4">HTML5/CSS3(SCSS/SASS)</li>
          <li class="skills__item item5">Git</li>
          <li class="skills__item item6">Photoshop/Figma/Zeplin</li>
          <li class="skills__item item7">Linux advanced user</li>
        </ul>
      </div>
    </div>
    <img class="bonfire" src="../assets/images/Bonfire2.gif" alt="">
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'MAIN_LANG'
    ])
  }
};
</script>

<style lang="scss">

  .skills__item{
    position: relative;
    margin: 20px 20px 20px 40px;

    &.item1::before, &.item2::before, &.item3::before, &.item4::before, &.item5::before, &.item6::before, &.item7::before{
      content: '';
      position: absolute;
      left: -36px;
      top: -5px;
      width: 30px;
      height: 30px;
    }
    &.item1::before{
      background: url('../assets/images/icons/cat__icon.png');
      background-size: cover;
      left: -30px;
      top: -5px;
      width: 25px;
      height: 25px;
    }
    &.item2::before{
      background: url('../assets/images/icons/flask__icon.png');
      background-size: cover;
    }
    &.item3::before{
      background: url('../assets/images/icons/goldSnake__icon.png');
      background-size: cover;
    }
    &.item4::before{
      background: url('../assets/images/icons/ring__icon.png');
      background-size: cover;
    }
    &.item5::before{
      background: url('../assets/images/icons/stamina__icon.png');
      background-size: cover;
    }
    &.item6::before{
      background: url('../assets/images/icons/blueFlask__icon.png');
      background-size: cover;
    }
    &.item7::before{
      background: url('../assets/images/icons/stealth__icon.png');
      background-size: cover;
    }
  }

</style>
