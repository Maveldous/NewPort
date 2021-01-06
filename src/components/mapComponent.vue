<template>
  <article class="map" :class="{'show': GET_MAP_VISION}">
    <div class="project__box box1">
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
            href="https://maveldous.github.io/Some_projects/Aimation/">
            {{MAIN_LANG.works.project1}}
          </a>
          <a class="box__text-git" href="https://github.com/Maveldous/Animations">github</a>
        </p>
        <div class="project__box-hide"></div>
    </div>
    <div class="project__box box5">
        <p class="project__box-text">
          <a 
            class="box__text-ref" 
            href="https://maveldous.github.io/Some_projects/WetherPlug">
            {{MAIN_LANG.works.project5}}
          </a>
          <a class="box__text-git" href="https://github.com/Maveldous/WetherWidget">github</a>
        </p>
        <div class="project__box-hide"></div>
    </div>
    <div class="project__box box6">
      <p class="project__box-text">
        <a 
          class="box__text-ref" 
          href="https://maveldous.github.io/Some_projects/2048Project">
          {{MAIN_LANG.works.project6}}
        </a>
        <a class="box__text-git" href="https://github.com/Maveldous/2048">github</a>
      </p>
      <div class="project__box-hide"></div>
    </div>
    <div class="project__box box7">
      <p class="project__box-text">
        <a 
          class="box__text-ref" 
          href="https://mindformat.ru/lab">
          {{MAIN_LANG.works.project7}}
        </a>
      </p>
      <div class="project__box-hide"></div>
    </div>
    <div class="project__box box8">
      <p class="project__box-text">
        <a 
          class="box__text-ref" 
          href="https://maveldous.github.io/Some_projects/gifTSProject/">
          {{MAIN_LANG.works.project8}}
        </a>
        <a class="box__text-git" href="https://github.com/Maveldous/Vuetify_gifs_project">github</a>
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
      margin-top: 180px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(11, 1fr);
      grid-template-areas: 
        ".    box7 box7 .   "
        "box8 box8 box8 ."
        "box8 box8 box8 ."
        ".    .    box6 box6"
        "box1 .    box6 box6"
        "box1 .    box2 box2"
        "box1 .    box2 box2"
        "box3 box3 box2 box2"
        "box3 box3 box4 box4"
        "box5 box5 box4 box4"
        "box5 box5 .    .   "
        ;
      
      @media(max-width: $tableWidth){
        &{
        margin-top: 30px;
        grid-template-rows: 220px repeat(6, 1fr);
        grid-template-areas: 
          "box7 box7 box7 box7"
          "box8 box8 box8 box8"
          "box6 box6 box6 box6"
          "box1 box1 box1 box1"
          "box1 box1 box1 box1"
          "box2 box2 box2 box2"
          "box3 box3 box3 box3"
          "box4 box4 box4 box4"
          "box5 box5 box5 box5";
        }
        grid-row-gap: 100px;
      }
      &.show .project__box-hide{
        background: transparent;
      }
    }
    .box1{
        background: url('../assets/images/landing__project.png');
        width: 206px;
        height: 652px;
        grid-area: box1;
        & .project__box-text{
          right: -60%;
          top: 40%;
        }
    }
    .box2{
        background: url('../assets/images/videoplayer__project.png');
        width: 260px;
        height: 600px;
        grid-area: box2;
        & .project__box-text{
          left: -50%;
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
        background: url('../assets/images/animation_project.png');
        width: 264px;
        height: 640px;
        grid-area: box4;
        & .project__box-text{
          left: -50%;
          top: 30%;
        }
    }
    .box5{
        background: url('../assets/images/wetherPlugin__project.png');
        width: 281px;
        height: 610px;
        grid-area: box5;
        & .project__box-text{
          right: -50%;
          top: 60%;
        }
    }
    .box6{
        background: url('../assets/images/2048_project.png') no-repeat;
        background-size: contain;
        margin-bottom: 40px;
        max-width: 100%;
        width: 100%;
        height: 410px;
        grid-area: box6;
        & .project__box-text{
          left: -20%;
          top: 40%;
        }
    }
    .box7{
        background: url('../assets/images/mindformat_project.png') no-repeat;
        background-size: contain;
        margin-bottom: 40px;
        max-width: 100%;
        width: 100%;
        height: 350px;
        grid-area: box7;
        & .project__box-text{
          right: 55%;
          top: -25%;
        }
    }
    .box8{
      background: url('../assets/images/gifsTS__project.png') no-repeat;
      background-size: contain;
      margin-left: 7rem;
      margin-bottom: 40px;
      max-width: 100%;
      width: 100%;
      height: 350px;
      grid-area: box8;
      & .project__box-text{
        left: 700px;
        top: 35%;
      }
       @media(max-width: $tableWidth){
         & {
           margin-left: auto;
         }
       }
    }

</style>