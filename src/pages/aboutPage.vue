<template>
  <section class="about">
    <div class="about__warapper">
      <div class="about__inner">
        <h1 class="about__title">Обо мне</h1>
        <p class="about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa temporibus repellendus possimus aspernatur autem doloremque tempora consequuntur dolorum labore, iste, quo, ipsam veritatis? Deserunt, inventore ad minus ratione dolorem tenetur!</p>
      </div>
    </div>
  </section>
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

  .about{
    &__warapper{
      margin: 25vh auto 0;
      width: 40vw;
      border: 2px solid rgb(126, 126, 122);
      padding: 50px;
      background: rgb(8, 8, 8);
    }

    &__inner{
      border: 2px solid rgb(46, 45, 2);
      border-radius: 10px;
      padding: 20px;
    }

    &__title{
      margin-bottom: 50px;
      color: rgb(97, 95, 4);
    }
  }

</style>

