<template>
  <main class="main">
      <div class="main__warapper">
        <h1 class="main__title">Портфолио</h1>
      </div>
      <nav class="main__nav">
          <ul class="main__nav-items">
              <li class="main__nav-item"><a href="#"><router-link to='/about'> Обо мне</router-link> </a></li>
              <li class="main__nav-item"><a href="#"> Мои навыки </a></li>
              <li class="main__nav-item"><a href="#"> Мои работы </a></li>
              <li class="main__nav-item"><a href="#"> Выход </a></li>
          </ul>
      </nav>
      <img class="background" src="../assets/images/vgif-ru-25372.gif" alt="">
  </main>
</template>

<script>
export default {
  name: "Header",
  data: function(){
    return {
      
    }
  },
  methods: {
    
  }
};
</script>

<style scoped lang="scss">

  .main{
    width: 100%;
    height: 100%;
    text-align: center;

    &__title{
        position: relative;
        margin: 25vh 0 20vh 0;
        font-size: 100px;
        font-family: 'Merriweather', serif;
        &::before{
            position: absolute;
            content: '';
            width: 60vw;
            left: 19vw;
            top: 65px;
            height: 10px;
            background: url('../assets/images/line.png') center no-repeat;
            z-index: 4;
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
          width: 130px;
          top: 10px;
          left: -22px;
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
  }

</style>

