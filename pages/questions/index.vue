<template>
  <div>
    <div class="section">
      <h2 class="header1">Questions</h2>
      <div class="quiz">
      <question v-for="(item, i) in items" :key="i" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import question from '~/components/component/question.vue'
export default {
  components: { question },
  head () {
    return {
      title: 'questions list',
      meta: [
        { hid: 'description', name: 'description', content: 'questions list' },
        { hid: 'og:title', name: 'og:title', content: 'questions list' },
        { hid: 'og:description', name: 'og:description', content: 'questions list' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: `https://essaymentor.us` },
      ]
    }
  },
  data(){
    return {
      items: [
        {
          id: 1,
          title: 'primera ',
          description: `We design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop.
          Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers`
        },
         {
          id: 2,
          title: 'segundo ',
          description: `We design and develop websites or application to accomodate both personal or business related.`
        },
         {
          id: 3,
          title: 'tress ',
          description: `We design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop.`
        },
         {
          id: 4,
          title: 'tress ',
          description: `We design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in thiss`
        },
        {
          id: 5,
          title: 'primera ',
          description: `We design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop.
          Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers`
        },
         {
          id: 6,
          title: 'segundo ',
          description: `We design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop.
          Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers`
        },
         {
          id: 7,
          title: 'tress ',
          description: `We design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop.
          Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers`
        },
         {
          id: 8,
          title: 'tress ',
          description: `We design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop.
          Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers`
        }
      ]
    }
  }
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