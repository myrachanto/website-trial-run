<template>
  <div>
    <div class="section">
      <h2 class="header1">Questions</h2>
      <div class="quiz">
      <question v-for="(item, i) in questions" :key="i" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from '@/helpers/index.js'
import question from '~/components/component/question.vue'
export default {
  components: { question },
  head () {
    return {
      title: 'Questions Answered | Research Paper Answers | Assignments Answers',
      meta: [
        { hid: 'description', name: 'description', content: ' We have answered thousands of questions for students. We can also help you complete any assignment, Research papers, quizzes, exams and any other academic papers.' },
        { hid: 'og:title', name: 'og:title', content: 'Questions Answered | Research Paper Answers | Assignments Answers' },
        { hid: 'og:description', name: 'og:description', content: ' We have answered thousands of questions for students. We can also help you complete any assignment, Research papers, quizzes, exams and any other academic papers.' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: `https://essaymentor.us` },
      ]
    }
  },
  data(){
    return {
      items: [
      ]
    }
  },
  
  watchQuery: true,

   async asyncData() {
     let quizes = []
    //  console.log("ffffffffffffffffffff")
    const { data } = await http.get(`/api/maswali`)
    const { state, maswalis } = data
    // console.log(maswali)
    // const { docs, page, pages, total, limit } = questions
    if (state) {
        quizes = maswalis
    }

    return { questions: quizes}
  },
  //  async asyncData({query}) {
  //   let quizes = []
  //   let currentPage = query.currentPage || 1
  //   // console.log(query)
  //   let perPage = 50
  //   let rows = 0
  //   let tot = 0
  //   const { data } = await http.get(`/api/question?page=${currentPage}&limit=${perPage}`)
  //   const { state, questions } = data
  //   // console.log(questions)
  //   const { docs, page, pages, total, limit } = questions
  //   if (state) {
  //       quizes = docs
  //       currentPage = page
  //       rows = pages
  //       tot = total
  //       perPage = limit
  //   }

  //   return { questions: quizes, currentPage, rows,tot, perPage}
  // },
  methods: {
    // next(rows,currentPage){
    //   console.log("next button hit")
      
    //   // console.log(rows)
    //   if (currentPage < rows){
    //       currentPage ++
    //       // console.log(currentPage)
    //       this.$router.push({ name: 'questions', query: { currentPage } })
    //     }else{
    //       return
    //     }
    // },
    // prev(currentPage){
    //     if (currentPage > 1){
    //       currentPage --
    //      this.$router.push({ name: 'questions', query: { currentPage } })
    //     }else{
    //       return
    //     }
    // },
  },
}
</script>

<style scoped>
.section{
  @apply bg-gray-50 mt-16 pt-4;
}
.header1{
  @apply flex justify-center items-center text-3xl md:text-5xl md:mx-10 md:px-10 font-semibold text-gray-900 py-4;
}
.quiz{
  @apply container mx-auto
}

</style>