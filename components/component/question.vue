<template>
     <div class="card1">
        <div class="cardbody">
          <p class="cardbodyp">
           {{item.description}}
          <nuxt-link to="/questions/primera"><button class="btn4">
            View question
          </button></nuxt-link>
          </p>
        </div>
        </div>
</template>

<script>
export default {
  props: ['item']
}
</script>
<style scoped>
.card1{
  @apply bg-gray-100 rounded overflow-hidden  mb-2;
}
.h4header{
  @apply font-serif text-xl md:text-2xl text-gray-700 flex flex-wrap items-center justify-center leading-tight;
}
.cardbody{
  @apply m-4 text-xl my-4 mx-4 text-gray-600 md:flex justify-between items-center flex-wrap ;
}
.btn4{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-1 py-1 px-8 focus:outline-none ;
}
.gradient {
        background: linear-gradient(90deg, #3394ee 0%, #e5ecf0 100%);
}
</style>