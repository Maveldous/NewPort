<template>
  <section class="about">
    <div class="about__warapper wrapper">
      <div class="border"></div>
      <div class="about__inner inner">
        <h1 class="about__title title">
          {{MAIN_LANG.mainPage.text1}}
        </h1>
        <p class="about__text">
          {{MAIN_LANG.header.title}}
          {{HEADER_NAME}}{{MAIN_LANG.aboutMe.text}}
        </p>
      </div>
    </div>
    <img class="bonfire" src="../assets/images/Bonfire2.gif" alt="">
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Header",
  data: function(){
    return {
      
    }
  },
    computed: {
    ...mapGetters([
      'MAIN_LANG',
      'HEADER_NAME'
    ])
  },
  methods: {
    
  }
};
</script>

<style lang="scss">

  .border{
    height: rem(100);
    background: url('../assets/images/Ornament.png') repeat;
    background-size: cover;
  }

  .about__text{
    padding: 20px;
    line-height: 20px;
    font-size: rem(16);
  }

</style>

