<template>
  <div class="quizsect">
    <div class="quizgrid">
    <div class="quizinner">
      <div class="quiztopic"> {{item.topic}}</div>
      <div class="quizbody">
        {{item.question}}
      </div>
    <div class="quizorder1">Our experts have answered this question before</div>
    <div class="quizorder2">Order your fresh answer as we don't resell customers nswers to avoid plagiarism</div>
    <div class="quizorder3">Order your customized answer written from scracth now</div>
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
import { http, } from '@/helpers/index.js'
import contactform from '~/components/component/contactform.vue'
import Freeitems from '~/components/component/freeitems.vue'
export default {
  components: { contactform, Freeitems },

   async asyncData ({ params }) {
     console.log(params.url,'test url')
    let quiz = null
    const { data } = await http.get('/api/maswali/'+params.url)
    console.log("data test",data)
    const { state, maswali } = data

    if (state) {
        quiz = maswali
    }

    return { question: quiz }

  },
   head () {
    const question = this.question || {}
    return {
      title: question.topic,
      meta: [
        { hid: 'description', name: 'description', content: question.question },
        { hid: 'og:title', name: 'og:title', content: question.topic },
        { hid: 'og:description', name: 'og:description', content: question.meta },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: `https://essaymentor.us` },
      ]
    }
  },
}
</script>

<style>
.quizsect{
  @apply mt-16 container mx-auto ;
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
  @apply bg-blue-800 text-white text-lg mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 focus:outline-none ;
}
.quizorder1{
  @apply text-2xl flex justify-center items-center text-blue-800;
}
.quizorder2{
  @apply text-2xl flex justify-center items-center text-blue-800;
}
.quizorder3{
  @apply text-2xl flex justify-center items-center text-white bg-blue-800 rounded-full;
}
</style>