<template>
<div>
  <div class="freeheader">Free Features</div>
     <div class="card1" v-for="(item, i) in features" :key="i">
        <div class="cardbody">
          <div>{{item.name}}</div><div class="pricing"><div>For <span class="cost">${{item.cost}}</span> <span class="free">FREE</span></div>
        </div></div>
</div>
</div>
</template>

<script>
export default {
  data(){
    return{
        features: [
                { name: 'Limitless Amendments', cost: '23.99' },
                { name: 'Bibliography', cost: '12.99' },
                { name: 'Outline', cost: '4.99' },
                { name: 'Title page', cost: '4.99' },
                { name: 'Formating', cost: '7.99' },
                { name: 'Plagialism report', cost: '15.99' },
              ]
    }
  }
  
}
</script>
<style scoped>
.card1{
  @apply bg-gray-100 rounded overflow-hidden ;
}
.freeheader{
  @apply font-serif bg-black text-xl text-white py-5 md:text-2xl text-gray-700 flex flex-wrap items-center justify-center leading-tight;
}
.cardbody{
  @apply m-1 text-lg text-gray-600 flex justify-between items-center;
}
.cost{
  @apply line-through;
}
.free{
  @apply text-red-700;
}
.pricing{
  @apply flex justify-between items-center
}
</style>