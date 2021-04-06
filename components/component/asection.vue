<template>
  <div>
    <div class="section">
      <h2 class="header1">Assignments Help Services</h2>
      <div class="flexing">
      <div class="griding">
      <div class="comment">
      <h2 class="h2c">Write my assignment</h2>
       We offer assignment help services in all subjects. We have helped thousands of students go through high school, college, undergraduate, and master's and Ph.D. levels at ease. We have worked with some students from high school to the Ph.D. level as we have writers qualified to handle assignments in all these categories.  <br />
        We are aware of the concerns that most students have regarding trusting online academic writing websites. We know there is a sense of fear when preparing and completing your assignments. It is hard to complete assignments and enjoy precious time with your loved ones as the deadline always keeps your mind running. To overcome all these, you can seek help from our experts who understand what I take to deliver an excellent assignment. 

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