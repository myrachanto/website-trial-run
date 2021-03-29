<template>
  <div>
    <div class="section">
      <h2 class="header1">Services</h2>
      <div class="flexing">
      <div class="griding">
         <div class="imaging">
        <img src="~/assets/imgs/16.webp" alt=" dashboard" class="cardimg1"/>
      </div>
      <div class="comment">
      <h2 class="h2c">What we do</h2>
           We design and develop both websites and application. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case the website that you hired us to develop.<br />
        Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers<br />

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
  @apply flex justify-center py-4 items-center text-3xl md:text-5xl md:mx-16 md:px-16 font-semibold text-gray-900 ;
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
  @apply rounded overflow-hidden mx-5;
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