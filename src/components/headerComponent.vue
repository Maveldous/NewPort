<template>
  <header class="startWindow">
    <div class="startWindow__wrapper" :class="{header:state}">
      <div class="startWindow__main">
        <h1 class="startWindow__main-title" v-show="!state">Здравствуйте {{name}}! </h1>
        <p class="startWindow__main-text" v-show="!state">Введите свое имя и выберите язык</p>
        <form class="startWindow__form">
          <ul class="startWindow__form-socialmedia" v-show="state">
            <li class="startWindow__form-item"> 
              <a href="https://t.me/Maveldous"> <i class="fab fa-telegram-plane"></i> </a>
            </li>
            <li class="startWindow__form-item"> 
              <a href="https://www.linkedin.com/in/naumov-artem-progdev/"> <i class="fab fa-linkedin-in"></i> </a>
            </li>
            <li class="startWindow__form-item"> 
              <a href="https://github.com/Maveldous"> <i class="fab fa-github"></i> </a>
            </li>
          </ul>
          <input v-model="name" v-show="!state" class="startWindow__form-input" type="text">
          <div class="startWindow__form-btnBlock">
            <button v-show="state" @click.prevent="" class="startWindow__form-btnHome">
              <router-link to='/'><i class="fas fa-home"></i></router-link>
            </button>
            <button @click.prevent="" class="startWindow__form-btn">ENG</button>
            <button @click.prevent="" class="startWindow__form-btn">RUS</button>
          </div>
        </form>
        <button 
            @click.prevent="headerUpdate"
            v-show="!state" 
            class="startWindow__main-btn">
            Подтвердить
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function(){
    return {
      name: '',
      state: false
    }
  },
  methods: {
    headerUpdate: function(){
      this.state = true
      let arr = document.querySelectorAll('.startWindow__form-item')
      new Promise((resolve)=>{
        setTimeout(()=>{
          resolve()
        },1000)
      }).then(()=>{
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
      z-index: 10;
      background-color: rgb(32, 31, 31);
      transition: all 1s ease;
    }

    &__main{
      width: 40vw;
      border: 2px solid black;
      border-radius: 10px;
      text-align: center;
      transition: all 1s ease;

      &-title{
        padding: 20px;
        word-wrap: break-word;
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
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

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
        width: 200px;
        height: 20px;
        border: 1px solid #000;
        border-radius: 5px;
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
        color: #fff;
        margin-right: 20px;
        .router-link-exact-active router-link-active{
          width: 100%;
          height: 100%;
        }
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
    }
    .startWindow__form{
      justify-content: space-between;
      &-btnBlock{
        margin-right: 20px;
      }
      &-btn{
        height: 40px;
        font-size: 14px;
      }
    }
  }

</style>

