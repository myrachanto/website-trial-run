<template>
  <div class="cont">
   <!--Hero-->
    <div class="app bground">
      <div class="main ">
        <!--Left Col-->
        <div class="message">
          <p class="message2">E-commerce website solutions</p>
          <!-- <h1 class="message2">
            Well..., Welcome home!
          </h1> -->
          <p class="comment">
            We are the best e-commerce, website and application developers in the industry
          </p>
          <p class="comment">
            We are the best e-commerce, website and application developers in the industry
          </p>
          <nuxt-link to="/about"><button class="btn3">
            For more info
          </button></nuxt-link>
        </div>
        <!--Right Col-->
        <div class="drimg">
        <!-- <img src="~/assets/imgs/16.webp" alt="web development" class="img"/> -->
        </div>
      </div>
    </div>
    <div class="cv">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shaper"></path>
    </svg>
    
    </div>
<asection />
     <!-- section -->
<asection-2 />
  </div>
</template>
<script>
import Asection from '~/components/component/asection.vue'
import Asection2 from '~/components/component/asection2.vue'
import Cardportfolioi from '~/components/component/cardi.vue'
export default {
  components: { Cardportfolioi, Asection, Asection2 },
  data () {
    return {
      portfolios: [
      ]
    }
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
@apply h-4/6 flex justify-between items-center text-center mx-auto;
}
.app{
  @apply pt-24 bg-opacity-80;
}
.shaper{
 fill: white;
}
.bground{
  background-image: url('~/assets/imgs/11.webp');
  background-repeat: no-repeat;
  background-size: cover;
}
.main{
  @apply container text-black mx-auto flex flex-wrap px-4 md:px-0 justify-between;
}
.message{
  @apply flex  flex-col text-xl font-bold w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left;
}
.message1{
  @apply uppercase text-xl md:text-2xl tracking-normal w-full;
}
.message2{
  @apply my-4 text-2xl md:text-4xl text-black font-bold leading-tight;
}
.comment{
  @apply leading-normal text-black md:text-white text-xl md:text-2xl mb-8 mr-4;
}
.btn3{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.img{
  @apply w-full md:w-4/5 z-50 rounded-3xl;
}
.drimg{
  @apply w-full md:w-3/5 py-6 text-center bg-transparent;
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
.flexin{
  @apply flex justify-center items-center;
}
.gridincard{
  @apply grid  grid-cols-1 lg:grid-cols-4 gap-4  mt-14;
}
</style>