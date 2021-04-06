<template>
     <div class="card1">
        <div class="cardbody">
            <nuxt-link :to="`/questions/${item.url}`">
          <h1 class="title">The tiltle of the question</h1>
          <p class="cardbodyp">
           {{elipso(item.question)}}
          </p>
          </nuxt-link>
        </div>
        </div>
</template>

<script>
export default {
  props: ['item'],
  methods:{
        elipso(question) {
      if (question.length > 250) {
          return question.substring(0, 250) + '...';
      }
      return question;
    }
  }
}
</script>
<style scoped>
.card1{
  @apply bg-gray-100 rounded overflow-hidden  mb-2;
}
.title{
  @apply text-2xl ;
}
.cardbody{
  @apply m-4 text-xl my-4 mx-4 text-gray-600 block;
}
.cardbody a {
  @apply no-underline text-green-900;
}
.btn4{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-1 py-1 px-8 focus:outline-none ;
}
.gradient {
        background: linear-gradient(90deg, #3394ee 0%, #e5ecf0 100%);
}
</style>