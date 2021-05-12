<template>
<div class="parent">
  <div class="bgimging td">
   <div class="bgon" @click="showModal">Buy the Answer $10</div>
  </div>
</div>
</template>

<script>
export default {
  props:[ "showModal","closeModal"]

}
</script>

<style scoped>
.bgimging{
  background-image: url("~/assets/imgs/Answer.png")

}
.td{
  @apply h-48 flex justify-center items-center;
}
.parent{
  @apply container mx-auto;
}
.bgon{
  @apply flex  top-10 left-5   items-center font-bold text-blue-700 justify-center text-3xl cursor-pointer;
}
</style>