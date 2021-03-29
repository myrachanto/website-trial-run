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
          <p class="message2 ">E-commerce website solutions</p>
         
          <p class="comment">
            We are the best e-commerce, website and application developers in the industry
            <br />          
            We are the best e-commerce, website and application developers in the industry
          </p>
           <p class="comment">
            We are the best e-commerce, website and application developers in the industry
            <br />          
            We are the best e-commerce, website and application developers in the industry
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
    <div class="cv">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shaper"></path>
    </svg>
    
    </div>
    
    <div class="main1">
      <div class="griding">
        <cardi v-for="(item, i) in items" :key="i" :item="item" />
      </div>
    </div>
<asection />
     <!-- section -->
<asection-2 />
  </div>
</template>
<script>
import Asection from '~/components/component/asection.vue'
import Asection2 from '~/components/component/asection2.vue'
import cardi from '~/components/component/cardi.vue'
import Contactform from '~/components/component/contactform.vue'
export default {
  components: { cardi, Asection, Asection2, Contactform },
   head () {
    return {
      title: 'top questions',
      meta: [
        { hid: 'description', name: 'description', content: 'top questions' },
        { hid: 'og:title', name: 'og:title', content: 'top questions' },
        { hid: 'og:description', name: 'og:description', content: 'top questions' },
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
          title: 'primera ',
          description: `We design and develop both websites and application. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case the website that you hired us to develop.
Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers`
        },
         {
          id: 2,
          title: 'segundo ',
          description: `We design and develop both websites and application. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case the website that you hired us to develop.
Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers`
        },
         {
          id: 3,
          title: 'tress ',
          description: `We design and develop both websites and application. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case the website that you hired us to develop.
Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers`
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
  @apply h-4/6 lg:h-full w-full absolute bg-black bg-opacity-10 bg-gradient-to-b from-gray-400 via-transparent to-black;
}
.bgimg{
  @apply h-4/6 lg:h-full w-full object-cover bg-cover bg-no-repeat;
}
.grido{
  @apply container mx-auto relative grid lg:grid-cols-3 gap-4;
}
.hero{
  @apply mx-5;
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
  @apply my-4 text-2xl md:text-4xl text-black font-bold leading-tight;
}
.comment{
  @apply leading-normal text-white md:text-white text-xl md:text-2xl mb-8 mr-4;
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
  @apply container text-black mx-auto py-1;
}
.griding{
  @apply grid md:grid-cols-2 lg:grid-cols-3 mx-5 gap-1 my-1;
}
</style>