<template>
  <div>
    <div class="section">
      <h2 class="header1">About Us</h2>
      <div class="flexing">
      <div class="griding">
      <div class="comment">
      <h2 class="h2c">What we do</h2>
        We have been in the essay help industry since 2009, and we have helped thousands of students go through High school, degree, masters, and Ph.D. levels at ease. We help student’s complete assignments, essays, research papers, discussion posts, responses, quizzes, and exams. We have professional tutors from all fields with master's and Ph.D. qualifications, and we can handle any assignment. <br />
All our tutors have over five years’ experience in their different fields, and we have constantly delivered high-quality papers, which have helped students gain high grades. We match each customer’s assignment with a professional in that field, and for this reason, we ensure that each paper gets the professional and the technicality it deserves. We deliver 100% original work written from scratch as we do not encourage reselling of other student’s papers. We encourage students to order fresh content that is 0% plagiarised and ready to submit.  <br />
We maintain high ethical standards when handling our customer's work and making any transactions. We also guarantee high quality and confidentiality and ensure that our work matches the value of our customer's money. We adhere to high ethical standards even if we have to refer our customers to other companies that offer services that we do not have to ensure that our customers get nothing but the best. We have a 24 hours communication system with customer service always available. This enables customers to keep track of their orders. We, however, ensure that we deliver all our work way before the deadline to allow time for our customers to go through it and make recommendations. <br />
Our customers are also free to ask anything related, and they get timely answers and guidelines from our customer support. We handle all academic writing styles ranging from APA, MLA, Chicago, Turabian, and Harvard in either double speed or single-spaced. A single-spaced paper has 275 words, while a double-spaced paper has 550 words. Our foundation of interest is placing the clients’ needs first. We believe that delivering high-quality research work satisfies our customers and makes us build trust for a long-term work relationship.
      </div>
      <div class="imaging">
        <img src="~/assets/imgs/2.webp" alt="rresponsive dashboard" class="cardimg1"/>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'about us',
      meta: [
        { hid: 'description', name: 'description', content: 'We have helped thousands of students complete their assignments and enabled them to excel in their academics' },
        { hid: 'og:title', name: 'og:title', content: 'about us' },
        { hid: 'og:description', name: 'og:description', content: 'We have helped thousands of students complete their assignments and enabled them to excel in their academics' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: `https://essaymentor.us` },
      ]
    }
  },
}
</script>

<style scoped>
.section{
  @apply bg-gray-50 mt-16 pt-4;
}
.header1{
  @apply flex justify-center items-center text-3xl md:text-5xl md:mx-10 md:px-10 font-semibold text-gray-900 ;
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
  @apply rounded overflow-hidden ;
}
.cardimg1{
  @apply w-full h-32 sm:h-full object-cover;
}
.br{
  @apply my-2;
}
.h2c{
  @apply my-4;
}
</style>