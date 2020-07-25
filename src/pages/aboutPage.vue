<template>
  <section class="about">
    <div class="about__warapper wrapper">
      <div class="border"></div>
      <div class="about__inner inner">
        <h1 class="about__title title">Обо мне</h1>
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

<style lang="scss">

  .border{
    height: 100px;
    background: url('../assets/images/Ornament.png') repeat;
    background-size: cover;
  }

</style>

