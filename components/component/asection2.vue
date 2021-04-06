<template>
  <div>
    <div class="section">
      <h2 class="header1">Research Papers Help Services</h2>
      <div class="flexing">
      <div class="griding">
         <div class="imaging">
        <img src="~/assets/imgs/16.webp" alt=" dashboard" class="cardimg1"/>
      </div>
      <div class="comment">
      <h2 class="h2c">Write my research paper</h2>
         Our research paper helps services have gained most of the students' trust, and we have constantly delivered high-quality papers. Most of the students looking for a research paper helper or an essay helper have landed on our team's best writers and have worked with them all through.  <br />
We understand that research papers can be tricky and challenging at the same time. We understand that there is a lot of information out there and can be applied in research papers but doing so without plagiarizing their work usually is not easy for most students. At an essay helper company, we provide students with complete research papers ready to submit and 0% plagiarized. We ensure that the researched work is original top-notch and guarantee high grades always. 
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
.stron{
  @apply text-blue-700 font-bold;
}
</style>