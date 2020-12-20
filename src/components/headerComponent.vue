<template>
  <header class="startWindow">
    <div class="startWindow__wrapper" :class="{header:HEADER_STATE}">
      <div class="startWindow__main">
        <h1 class="startWindow__main-title" v-show="!HEADER_STATE">
          {{MAIN_LANG.header.title}} {{HEADER_NAME}}!
        </h1>
        <p class="startWindow__main-text" v-show="!HEADER_STATE">
          {{MAIN_LANG.header.text}}
        </p>
        <form class="startWindow__form">
          <ul class="startWindow__form-socialmedia" v-show="HEADER_STATE">
            <li class="startWindow__form-item"> 
              <a href="https://t.me/Maveldous"> 
                <i class="fab fa-telegram-plane"></i> 
              </a>
            </li>
            <li class="startWindow__form-item"> 
              <a href="https://www.linkedin.com/in/naumov-artem-progdev/">
               <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li class="startWindow__form-item"> 
              <a href="https://github.com/Maveldous"> 
                <i class="fab fa-github"></i> 
              </a>
            </li>
          </ul>
          <input 
            @input="updateName" 
            v-show="!HEADER_STATE" 
            class="startWindow__form-input" 
            type="text"
            :placeholder="MAIN_LANG.header.placeholder"
          >
          <div class="startWindow__form-btnBlock">
            <router-link class="router-link" to='/'>
              <button 
                v-show="HEADER_STATE" 
                @click.prevent="headerUpdate(false)"
                class="startWindow__form-btnHome"
              >
                <router-link to='/'>
                  <i class="fas fa-home"></i>
                </router-link>
              </button>
            </router-link>
            <button @click.prevent="TOGGLE_LANG(false)" class="startWindow__form-btn">ENG</button>
            <button @click.prevent="TOGGLE_LANG(true)" class="startWindow__form-btn">RUS</button>
          </div>
        </form>
        <button 
            @click.prevent="headerUpdate(true)"
            v-show="!HEADER_STATE" 
            class="startWindow__main-btn">
            {{MAIN_LANG.header.btn}}
        </button>
      </div>
    </div>
  </header>
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
      'HEADER_NAME',
      'HEADER_STATE',
      'MAIN_LANG'
    ])
  },
  methods: {
    ...mapActions([
      'TOGGLE_STATE_TRUE',
      'TOGGLE_LANG'
    ]),
    updateName (e) {
      this.$store.commit('UPDATE_NAME', e.target.value)
    },
    headerUpdate: function(statement){
      let arr, time = 2000;
      if(statement){
        this.TOGGLE_STATE_TRUE()
        arr = document.querySelectorAll('.startWindow__form-item, .main__title, .background')
        time = 1000
      }
      new Promise((resolve)=>{
        setTimeout(()=>{
          resolve()
        }, time)
      }).then(()=>{
        if(!statement) arr = document.querySelectorAll('.main__title, .background')
        arr.forEach((item, index)=>{
            setTimeout(()=>{
              item.classList.add('animation')
            },index * 1000)
        })
      })
    }
  }
};
</script>

<style scoped lang="scss">

  .startWindow{
    &__wrapper{
      display: flex;
      position: fixed;
      height: 100vh;
      width: 100vw;
      top: 0;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      background-color: $base-color;
      transition: all 1s ease;
    }

    &__main{
      width: rem(455);
      border: 2px solid black;
      background: #181717;
      border-radius: 10px;
      text-align: center;
      transition: all 1s ease;

      &-title{
        padding: 20px 0 10px;
        word-wrap: break-word;
        font-size: rem(35);
      }
      &-text{
        padding: 5px 0;
      }
      &-btn{
        height: 50px;
        background: transparent;
        border: 1px solid #000;
        color: #fff;
        margin-bottom: 10px;
        &:hover{
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        }
        &:active{
          border: 1px solid #fff;
        }
      }
    }

    &__form{
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      &-socialmedia{
        display: flex;
      }
      &-item{
        opacity: 0;
        visibility: hidden;
        transform: translateY(70px);
        transition: all 1s ease;
        margin: 0 10px;
        font-size: 20px;
        .fa-telegram-plane:hover{
          color: #0296e0;
        }
        .fa-linkedin-in:hover{
          color: #07577c;
        }
        .fa-github:hover{
          color: rgb(33, 129, 41);
        }
      }

      &-input{
        height: 40px;
        font-size: $mainFontSize;
        border: 2px solid #000;
        border-radius: 5px;
        width: 65%;
      }

      &-btn{
        height: 50px;
        background: transparent;
        border: 1px solid #000;
        color: #fff;

        &:first-child{
          border-right: none;
        }
        &:hover{
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          &:first-child{
            border-right: none;
          }
        }
        &:active{
          border: 1px solid #fff;
        }
      }

      &-btnHome{
        height: 40px;
        width: 40px;
        background: transparent;
        border: 1px solid #000;
        border-radius: 50%;
      }
    }
  }

  .startWindow__wrapper.header{
    height: 50px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px;
    .startWindow__main{
      width: 100%;
      border: none;
      background: transparent;
    }
    .startWindow__form{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      @media(max-width: 400px){
        &{
          padding: 0px;
        }
      }
      &-btnBlock{
        margin-right: 20px;
      }
      &-btn{
        height: 40px;
        font-size: 14px;
      }
    }
    .router-link{
      margin-right: 20px;
    }
  }

</style>

