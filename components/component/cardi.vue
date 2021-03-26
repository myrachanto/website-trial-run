<template>
     <div class="card1">
        <div class="cardbody">
          <h4 class="h4header">{{item.title}}</h4>
          <p class="cardbodyp">
           {{item.description}}
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
  @apply bg-gray-100 rounded overflow-hidden md:w-80 ;
}
.h4header{
  @apply font-serif text-xl py-5 md:text-2xl text-gray-700 flex flex-wrap items-center justify-center leading-tight;
}
.cardbody{
  @apply m-4 text-xl text-gray-600 ;
}
</style>