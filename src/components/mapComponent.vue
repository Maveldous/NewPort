<template>
  <article class="map" :class="{'active': state}">
      <div class="map__img">
            <p class="map__text1">{{MAIN_LANG.Works.project1}}</p>
        <div class="map__block1"></div>
            <p class="map__text2">{{MAIN_LANG.Works.project2}}</p>
        <div class="map__block2"></div>
            <p class="map__text3">{{MAIN_LANG.Works.project3}}</p>
        <div class="map__block3"></div>
            <p class="map__text4">{{MAIN_LANG.Works.project4}}</p>
        <div class="map__block4"></div>
            <p class="map__text5">{{MAIN_LANG.Works.project5}}</p>
        <div class="map__block5"></div>
            <p class="map__text6">{{MAIN_LANG.Works.project6}}</p>
        <div class="map__block6"></div>
            <p class="map__text7">{{MAIN_LANG.Works.project7}}</p>
        <div class="map__block7">
            <div class="map__block7-1"></div>
        </div>
            <p class="map__text8">{{MAIN_LANG.Works.project8}}</p>
        <div class="map__block8"></div>
            <p class="map__text9">{{MAIN_LANG.Works.project9}}</p>
        <div class="map__block9">
            <div class="map__block9-1"></div>
        </div>

        <img src="../assets/images/map.png" alt="">
      </div>
  </article>
</template>

<script>
import {mapGetters} from 'vuex'


export default {
  name: "Map",
  props: ['state'],
  computed: {
    ...mapGetters([
      'MAIN_LANG'
    ])
  },
};
</script>

<style lang="scss">
    
    .map{
        &__img{
        position: relative;
        display: block;
        margin: 0 auto;
        width: 50vw;
            img{
                width: 100%;
                height: 100%;
            }
        }

        &__text{
            &1, &2, &3, &4, &5, &6, &7, &8, &9{
                position: absolute;
                font-family: 'Merriweather', serif;
                cursor: pointer;
            }
        }

        &__block{
            &1, &2, &3, &4, &5, &6, &7, &7-1, &8, &9, &9-1{
                position: absolute;
                background: rgba($color: #000, $alpha: 1);
                transition: all 1s;
            }
        }

        &__text1, &__text2, &__text3, &__text4, &__text5, &__text6, &__text7, &__text8, &__text9{
            position: absolute;
        }

        &__text1{
            top: 10%;
            left: -20%;
            &:hover + .map__block1{
                background: rgba($color: #000, $alpha: 0);
            }
        }

        &__text2{
            top: 15%;
            right: -20%;
            &:hover + .map__block2{
                background: rgba($color: #000, $alpha: 0);
            }
        }

        &__text3{
            top: 30%;
            left: -20%;
            &:hover + .map__block3{
                background: rgba($color: #000, $alpha: 0);
            }
        }

        &__text4{
            top: 33%;
            right: -20%;
            &:hover + .map__block4{
                background: rgba($color: #000, $alpha: 0);
            }
        }

        
        &__text5{
            top: 48%;
            left: -20%;
            &:hover + .map__block5{
                background: rgba($color: #000, $alpha: 0);
            }
        }

        &__text6{
            top: 40%;
            right: -20%;
            &:hover + .map__block6{
                background: rgba($color: #000, $alpha: 0);
            }
        }

        &__text7{
            top: 70%;
            left: -20%;
            &:hover + .map__block7 .map__block7-1, &:hover + .map__block7{
                background: rgba($color: #000, $alpha: 0);
            }

        }

        &__text8{
            top: 60%;
            right: -20%;
            &:hover + .map__block8{
                background: rgba($color: #000, $alpha: 0);
            }
        }

        &__text9{
            top: 80%;
            right: -20%;
            &:hover + .map__block9 .map__block9-1, &:hover + .map__block9{
                background: rgba($color: #000, $alpha: 0);
            }
        }

        &__block1{
            width: 43%;
            height: 18%;
        }
        &__block2{
            right: 0;
            width: 57%;
            height: 22%;
        }
        &__block3{
            top: 18%;
            width: 43%;
            height: 20%;
        }
        &__block4{
            top: 22%;
            right: 0;
            width: 57%;
            height: 14%;
        }
        &__block5{
            top: 38%;
            width: 48%;
            height: 17%;
        }
        &__block6{
            top: 36%;
            right: 0;
            width: 57%;
            height: 18%;
        }
        &__block7{
            top: 55%;
            width: 35%;
            height: 17%;
            &-1{
                top: 100%;
                width: 180%;
                height: 33%;
            }
        }
        &__block8{
            top: 54%;
            right: 0;
            width: 65%;
            height: 19%;
        }
        &__block9{
            top: 73%;
            right: 0;
            width: 37%;
            height: 4.6%;
            &-1{
                top: 100%;
                right: 0;
                width: 271%;
                height: 485%;
            }
        }
    }

    .map.active{
        .map__block{
            &1, &2, &3, &4, &5, &6, &7, &7-1, &8, &9, &9-1{
                background: rgba($color: #000, $alpha: 0);
            }
        }
    }


</style>