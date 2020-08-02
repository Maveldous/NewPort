<template>
  <article class="map" :class="{'show': GET_MAP_VISION}">
    <div class="project__box box1">
        <a href="#" class="project__box-text">{{MAIN_LANG.works.project1}}</a>
        <div class="project__box-hide"></div>
    </div>
    <div class="project__box box2">
        <a href="#" class="project__box-text">{{MAIN_LANG.works.project2}}</a>
        <div class="project__box-hide"></div>
    </div>
    <div class="project__box box3">
        <a href="#" class="project__box-text">{{MAIN_LANG.works.project3}}</a>
        <div class="project__box-hide"></div>
    </div>
    <div class="project__box box4">
        <a href="#" class="project__box-text">{{MAIN_LANG.works.project4}}</a>
        <div class="project__box-hide"></div>
    </div>
  </article>
</template>

<script>
import {mapGetters} from 'vuex'


export default {
  name: "Map",
  computed: {
    ...mapGetters([
      'MAIN_LANG',
      'GET_MAP_VISION'
    ])
  },
};
</script>

<style lang="scss">
    .project__box{
        position: relative;
        display: inline-block;
        margin: auto;
        z-index: 5;
        &-hide{
            transition: all 1s ease;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #000;
        }
        &-text{
          position: absolute;
          width: 80px;
          font-family: 'Merriweather', serif;
          font-size: 20px;
          z-index: 5;
          text-align: center;
          &:hover + .project__box-hide{
            background: transparent;
          }
        }
    }
    .map{
      margin-top: 140px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-template-areas: 
        ".    box1 box2 box2"
        ".    box1 box2 box2"
        "box3 box3 box2 box2"
        "box3 box3 box4 box4"
        ".    .    box4 box4";
      &.show .project__box-hide{
            background: transparent;
      }
    }
    .box1{
        background: url('../assets/images/animation_project.png');
        width: 264px;
        height: 640px;
        grid-area: box1;
        & .project__box-text{
          left: -50%;
          top: 30%;
        }
    }
    .box2{
        background: url('../assets/images/videoplayer__project.png');
        width: 260px;
        height: 600px;
        grid-area: box2;
        & .project__box-text{
          right: -50%;
          top: 40%;
        }
    }
    .box3{
        background: url('../assets/images/timers__project.png');
        width: 422px;
        height: 535px;
        grid-area: box3;
        & .project__box-text{
          right: -30%;
          top: 40%;
        }
    }
    .box4{
        background: url('../assets/images/landing__project.png');
        width: 206px;
        height: 652px;
        grid-area: box4;
        & .project__box-text{
          left: -60%;
          top: 40%;
        }
    }

</style>