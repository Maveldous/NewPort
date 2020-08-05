<template>
  <article class="map" :class="{'show': GET_MAP_VISION}">
    <div class="project__box box1">
        <p class="project__box-text">
          <a 
            class="box__text-ref"
            href="https://maveldous.github.io/Some_projects/Aimation/">
            {{MAIN_LANG.works.project1}}
          </a>
          <a class="box__text-git" href="https://github.com/Maveldous/Animations">github</a>
        </p>
        <div class="project__box-hide"></div>
    </div>
    <div class="project__box box2">
        <p class="project__box-text">
          <a 
            class="box__text-ref" 
            href="https://maveldous.github.io/Some_projects/VueVideo/">
            {{MAIN_LANG.works.project2}}
          </a>
          <a class="box__text-git" href="https://github.com/Maveldous/VueVideo">github</a>
        </p>
        <div class="project__box-hide"></div>
    </div>
    <div class="project__box box3">
        <p class="project__box-text">
          <a 
            class="box__text-ref" 
            href="https://maveldous.github.io/Some_projects/TimersProject">
            {{MAIN_LANG.works.project3}}
          </a>
          <a class="box__text-git" href="https://github.com/Maveldous/TimersPage">github</a>
        </p>
        <div class="project__box-hide"></div>
    </div>
    <div class="project__box box4">
        <p class="project__box-text">
          <a 
            class="box__text-ref" 
            href="https://maveldous.github.io/Some_projects/LandingProject">
            {{MAIN_LANG.works.project4}}
          </a>
          <a class="box__text-git" href="https://github.com/Maveldous/landingPageProject">github</a>
        </p>
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
            @media(max-width: $tableWidth){
              &{
                background: transparent;
              }
            }
        }
        &-text{
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 120px;
          font-family: 'Merriweather', serif;
          font-size: 20px;
          z-index: 5;
          text-align: center;
          @media(max-width: 1100px){
            .map .project__box &{
              display: block;
              width: 100%;
              top: -10%;
              left: 50%;
              right: 0;
              transform: translateX(-50%);
            }
          }
          &:hover + .project__box-hide{
            background: transparent;
          }
          .box__text-git{
            margin: 10px;
            color: #218129;
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
      
      @media(max-width: $tableWidth){
        &{
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas: 
          "box1 box1 box1 box1"
          "box2 box2 box2 box2"
          "box3 box3 box3 box3"
          "box4 box4 box4 box4";
        }
        grid-row-gap: 100px;
      }
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
        background: url('../assets/images/timers__project.png') no-repeat;
        background-size: contain;
        max-width: 100%;
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