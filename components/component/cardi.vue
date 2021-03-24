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
  @apply bg-gray-200 rounded overflow-hidden w-60 md:w-80 shadow-lg;
}
.cardimg{
  @apply  w-full h-32 sm:h-48 object-contain;
}
.h4header{
  @apply font-semibold text-xl md:text-2xl text-gray-700 flex flex-wrap items-center justify-center leading-tight;
}
.cardbody{
  @apply m-4 text-xl text-gray-600 font-semibold;
}
</style>