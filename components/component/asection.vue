<template>
  <div>
    <div class="section">
      <h2 class="header1">Services</h2>
      <div class="flexing">
      <div class="griding">
      <div class="comment">
      <h2 class="h2c">Get an essay helper or a research paper helper now</h2>
       The assignment puzzle is a mystery to most students throughout their academic lives as there are assignments from left, right, and center. The assignments range from simple essays to complex dissertations, which have to be delivered and marked to determine their fate. It is not easy to handle all these assignments, attain the best grades in classes, and handle other activities outside classes like work and the likes. It is important to note that most students double education and work, which therefore strains them and makes their lives a nightmare. Worry no more as we are ready o help you take an online class or complete that assignment within any set deadline.<br />
You can pay for your first assignment once it is completed, as It takes the first order to trust a service. You can never regret it.
      </div>
      <div class="imaging">
        <img src="~/assets/imgs/2.webp" alt="responsive dashboard" class="cardimg1"/>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.section{
  @apply bg-gray-50 py-8;
}
.header1{
  @apply flex justify-center py-5 items-center text-3xl mt-5 md:text-5xl md:mx-10 md:px-10 font-semibold text-gray-900 ;
}
.flexing{
  @apply flex justify-center items-center;
}
.griding{
  @apply grid lg:grid-cols-2 container gap-8 md:mt-10;
}
.comment{
  @apply text-gray-700 text-xl font-normal m-2 mx-5;
}
.imaging{
  @apply rounded overflow-hidden mx-5 ;
}
.cardimg1{
  @apply w-full h-32 sm:h-full object-cover ;
}
.br{
  @apply my-2;
}
.h2c{
  @apply my-4;
}
</style>