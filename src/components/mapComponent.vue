<template>
  <article class="map">
      <div class="map__img">
            <p class="map__text1">TEXT1</p>
        <div class="map__block1"></div>
            <p class="map__text2">TEXT2</p>
        <div class="map__block2"></div>
            <p class="map__text3">TEXT3</p>
        <div class="map__block3"></div>
            <p class="map__text4">TEXT4</p>
        <div class="map__block4"></div>
            <p class="map__text5">TEXT5</p>
        <div class="map__block5"></div>
            <p class="map__text6">TEXT6</p>
        <div class="map__block6"></div>
            <p class="map__text7">TEXT7</p>
        <div class="map__block7">
            <div class="map__block7-1"></div>
        </div>
            <p class="map__text8">TEXT8</p>
        <div class="map__block8"></div>
            <p class="map__text9">TEXT9</p>
        <div class="map__block9">
            <div class="map__block9-1"></div>
        </div>

        <img src="../assets/images/map.png" alt="">
      </div>
  </article>
</template>

<script>

export default {
  name: "Map"

};
</script>

<style lang="scss">
    
    .map__text1:hover + .map__block1{
        background: rgba($color: #000, $alpha: 0);
    }

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
            }
        }

        &__block{
            &1, &2, &3, &4, &5, &6, &7, &7-1, &8, &9, &9-1{
                position: absolute;
                background: rgba($color: #000, $alpha: 1);
                transition: all 1s;
                &:hover{
                    background: rgba($color: #000, $alpha: 0);
                }
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
            &:hover{
                .map__block7-1{
                    background: rgba($color: #000, $alpha: 0);
                }
            }
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
            &:hover{
                .map__block9-1{
                    background: rgba($color: #000, $alpha: 0);
                }
            }
            &-1{
                top: 100%;
                right: 0;
                width: 271%;
                height: 485%;
            }
        }
    }


</style>