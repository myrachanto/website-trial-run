<template>
  <div class="quizsect">
    <div class="quizgrid">
    <div class="quizinner">
      <div class="quiztopic"> The question</div>
      <div class="quizbody">We design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop. Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developersWe design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop. Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developersWe design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop. Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developersWe design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop. Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developersWe design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop. Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developersWe design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop. Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developersWe design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop. Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developersWe design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop. Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers</div>
      <div class="quizfoot">
          <nuxt-link to="/about"><button class="quizbtn">
            order now
          </button></nuxt-link>
      </div>
    </div>
    <div class="quizcal">
      <contactform />
      <freeitems />
    </div>
    </div>
  </div>
</template>

<script>
import contactform from '~/components/component/contactform.vue'
import Freeitems from '~/components/component/freeitems.vue'
export default {
  components: { contactform, Freeitems },
head () {
    return {
      title: 'quiz',
      meta: [
        { hid: 'description', name: 'description', content: 'quiz' },
        { hid: 'og:title', name: 'og:title', content: 'quiz' },
        { hid: 'og:description', name: 'og:description', content: 'quiz' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: `https://essaymentor.us` },
      ]
    }
  },
}
</script>

<style>
.quizsect{
  @apply mt-16 container mx-auto;
}
.quizgrid{
  @apply grid grid-cols-1 lg:grid-cols-3;
}
.quizinner{
  @apply px-5 col-span-2;
}
.quizcal{
  @apply py-10;
}
.quiztopic{
  @apply my-8 pt-4 text-2xl md:text-3xl;
}
.quizbody {
  @apply text-xl;
}
.quizfoot{
  @apply flex justify-center items-center;
}
.quizbtn{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 focus:outline-none ;
}
</style>