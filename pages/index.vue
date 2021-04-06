<template>
  <div class="cont">
   <!--Hero-->
    <div class="herobg">
      <span class="spany"></span>
      <img class="bgimg" src="~/assets/imgs/11.webp"/>
    </div>
      <div class="hero">
    <div class="grido">
      <div class="span2">
      <div class="main ">
        <!--Left Col-->
          <p class="message2 ">An Essay Helper  </p>
         
          <p class="comment">
            Get online and regular class help through our assignments, discussions, responses, quizzes, and exams professionals.
          </p>
           <p class="comment">
            We offer assignment help to thousands of students globally. We have been in the industry since 2009, and we have handled thousands of essays, as can be seen in the questions section. 
          </p>
          <nuxt-link to="/aboutus"><button class="btn5">
            For more info
          </button></nuxt-link>
      </div>
      </div>
        <!--Right Col-->
        <div class="drimg">
        <contactform />
        </div>
      </div>
      </div>
    <!-- <div class="cv">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shaper"></path>
    </svg>
    
    </div> -->
    
    <div class="main1">
      <div class="griding">
        <cardi v-for="(item, i) in items" :key="i" :item="item" />
      </div>
    </div>
<asection />
     <!-- section -->
<asection-2 />
<!-- sec3 -->
<section-3 />
  </div>
</template>
<script>
import Asection from '~/components/component/asection.vue'
import Asection2 from '~/components/component/asection2.vue'
import cardi from '~/components/component/cardi.vue'
import Contactform from '~/components/component/contactform.vue'
import Section3 from '~/components/component/section3.vue'
export default {
  components: { cardi, Asection, Asection2, Contactform, Section3 },
   head () {
    return {
      title: 'An Essay Helper | A research paper helper| Take my Online class ',
      meta: [
        { hid: 'description', name: 'description', content: 'An essay helper online ready! Are you looking for “someone to take my online class?” You are at the right place. Get  0% plagiarized essays with as short as 3 HOURS from our experts.' },
        { hid: 'og:title', name: 'og:title', content: 'An Essay Helper | A research paper helper| Take my Online class ' },
        { hid: 'og:description', name: 'og:description', content: 'An essay helper online ready! Are you looking for “someone to take my online class?” You are at the right place. Get  0% plagiarized essays with as short as 3 HOURS from our experts.' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: `https://essaymentor.us` },
      ]
    }
  },
  data () {
    return {
      items: [
        {
          id: 1,
          title: 'An essay helper',
          description: `Our essay helpers can help you complete 0% plagiarized essays with as short as 3 hours deadline. We have professionals from different fields who have over five years' experience. All our tutors have masters and Ph.D. qualifications, and hence we deliver high-quality papers always to our customers. We also have free unlimited revisions requests in all the papers we provide in line with your instructor's revision comments. `
        },
         {
          id: 2,
          title: 'A research paper helper',
          description: `Are you looking for a research paper helper? Feel free to ask for our help as our professional research paper helpers are ready to assist you 24/7. We have a support team on stand-by, and we guarantee timely response and delivery of your research paper. Our professionals have long-term experience, and hence we guarantee top-notch quality orders. Your academic excellence is our pride, so order a research paper now.`
        },
         {
          id: 3,
          title: 'Take my Online class ',
          description: `We can help you take your online class by handling the assignments, discussion posts, responses, quizzes, and exams. We have completed online courses for students before, and we can guarantee you that we can help you complete that class and help you gain high grades. Our professionals have Masters and Ph.D. qualifications from different courses, and for this reason, we deliver professional assignments all the time.`
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS */

.herobg{
  @apply h-full w-full absolute;
}
.spany{
  @apply h-full w-full absolute bg-black bg-opacity-10 bg-gradient-to-b from-gray-900 via-transparent to-black;
}
.bgimg{
  @apply h-full w-full object-cover bg-cover bg-no-repeat;
}
.grido{
  @apply container mx-auto relative grid lg:grid-cols-3 gap-4;
}
.hero{
  @apply mx-5 mb-2;
}
.shaper{
 fill: white;
}
.span2{
  @apply col-span-2;
}
.main{
  @apply mt-16 text-black mx-auto flex flex-wrap px-4 md:px-0 justify-between;
}
.message{
  @apply flex  flex-col text-xl font-bold w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left;
}
.message2{
  @apply my-4 text-2xl md:text-4xl text-white font-bold leading-tight;
}
.comment{
  @apply leading-normal text-white font-semibold md:text-white text-xl md:text-2xl mb-8 mr-4;
}
.btn5{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 focus:outline-none ;
}
.img{
  @apply w-full md:w-4/5 z-50 rounded-3xl;
}
.drimg{
  @apply w-full  py-6 text-center bg-transparent;
}
.cv{
  @apply relative -mt-10 lg:-mt-24 border-transparent;
}
.section{
  @apply bg-white -mt-2 border border-b-2 py-4;
}
.s-head{
  @apply flex justify-center items-center text-3xl md:text-5xl mx-10 px-10 font-semibold text-gray-900;
}

.main1{
  @apply container text-black mx-auto py-1 mt-2;
}
.griding{
  @apply grid md:grid-cols-2 lg:grid-cols-3 mx-5 gap-1 my-1;
}
</style>