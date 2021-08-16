<template>
  <div class="quizsect">
    <div class="quizgrid">
    <div class="quizinner" v-if="question">
      <div class="quiztopic"> {{question.topic}}</div>
      <div class="quizbody" v-html="question.question">
      </div>
      
    <div class="quizanswer">
      <div class="h2c">Answer
        <div id="app">
    <Modal
      v-show="purchaseModal"
      :question="question"
      :handleSubmit="handleSubmit"
      @close="closeModal"
    />
  </div></div>
  <div class="brugrid">
    <div>
      <blurry  :showModal="showModal" :closeModal="closeModal"  :cost="question.cost"/>
    </div>
    <div>
      <div class="rates">This answer was provided by one of our premium writers</div>
      <div class="rates"> <ratings /></div>
    </div>
  </div>
        </div>

    <!-- <div class="quizorder1">Buy the answer above</div>
    <div class="quizorder1">Our experts have answered this question before</div>
    <div class="quizorder2">We recommend you order your fresh answer to avoid plagiarism issues</div> -->

    <div class="quizorder3"><a :href="`https://app.topresearchpapers.com/signup`"><div class="ms">Order your customized answer 0% plagiarized written from scratch</div></a></div>
    <div class="quizfoot">
      
          <div @click="showModal" class="flat_btn"><button class="quizbtn">
            Buy Answer
          </button></div>
          <button class="quizbtn1" @click="showInta" data-amount="10" data-currency="KES">Pay With Intasend</button>
      </div>
    </div>
    <div class="quizcal">
      <contactform />
      <freeitems />
    </div>
    </div>
    <inta
      v-show="intaModal"
      :question="question"
      :handleInta="handleInta"
      @close="closeInta"
    />
  </div>
</template>

<script>
// import IntaSend from 'intasend-inlinejs-sdk';
import axios from 'axios'
import { http,appUrl } from '@/helpers/index.js'
import contactform from '~/components/component/contactform.vue'
import Freeitems from '~/components/component/freeitems.vue'
import Ratings from '~/components/component/ratings.vue'
import Modal from '~/components/layouts/modal.vue'
import Blurry from '~/components/component/blurry.vue'
import Inta from '~/components/layouts/inta.vue'
export default {
  components: { contactform, Freeitems, Ratings, Modal, Blurry, Inta },
  data(){
    return{
      purchaseModal: false,
      intaModal: false,
      activeQuestion: null,
      name: '',
      phone: '',
      email: '',
      appUrl,
      emailState: null,
    }
  },
  created(){
    this.appUrl = appUrl
  },
   async asyncData ({ params }) {
    //  console.log(params.url,'test url')
    let quiz = null
    const { data } = await http.get('/api/maswali/'+params.url)
    // console.log("data test",data)
    const { state, maswali } = data

    if (state) {
        quiz = maswali
    }

    return { question: quiz }

  },
   head () {
    const question = this.question || {}
    return {
      title: question.title,
      meta: [
        { hid: 'description', name: 'description', content: question.meta },
        { hid: 'og:title', name: 'og:title', content: question.title },
        { hid: 'og:description', name: 'og:description', content: question.meta },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: `https://essaymentor.us` },
      ]
    }
  },
   methods: {
     showInta() {
        this.intaModal = true;
      },
      closeInta() {
        this.intaModal = false;
      },
     showModal() {
        this.purchaseModal = true;
      },
      closeModal() {
        this.purchaseModal = false;
      },
      ValidateEmail(email){
        console.log(email)
         var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(!email.match(mailformat)){
          return false
          }
          return true
      },
      // handleInta(name,phone,email, question) {
      //     let customBtnObj = new window.IntaSend({
      //         host: 'http://localhost:4621',
      //         publicAPIKey: "REPLACE-WITH-YOUR-PUBLISHABLE-KEY",
      //         live: false // set to true when going live
      //     })
      //     IntaSend.run({
      //         amount: question.cost,
      //         currency: "USD",
      //         email: email,
      //         first_name: name,
      //         // host: 'http://localhost:4621',
      //         phone: phone,
      //         country: "US"
      //     })
      //     .on("COMPLETE", () => alert("Do something on success"))
      //     .on("FAILED", () => alert("Do something on failure"))
      //     .on("IN-PROGRESS", () => console.log("Payment in progress status"))
      // },
      async handleInta(name,phone,email, question){
        //validate email //
        var ok = this.ValidateEmail(email)
        if(!ok){
          return
        }
                  // intaSendInstance.run({
        //   amount: question.cost,
        //           currency: "USD",
        //           email: email,
        //           first_name: name,
        //           // host: 'http://localhost:4621',
        //           phone: phone,
        //           country: "US"
        //           })
        //           .on("COMPLETE", (results) => {
        //             const url = `${this.appUrl}/api/paymentquiz/success/${name}/${phone}/${email}/${question._id}/${question.cost}?PayerID=${results.data.signature}&&paymentId=${results.data.id}`;
        //             window.location.href = url;                    
        //           })
        //           .on("FAILED", () => {
        //              this.$router.push('/failed')                    
        //           })
          let url = "https://sandbox.intasend.com/api/v1/checkout/"
              let payload = {
                  public_key: "ISPubKey_test_1d05f642-f7b6-40c1-8cf7-76f712f68df0",
                  amount: question.cost,
                  currency: "USD",
                  email: email,
                  first_name: name,
                  host: 'http://localhost:4621/succ',
                  phone_number: phone,
                  country: "US"
              }
              //validate email //
              var ok = this.ValidateEmail(email)
              if(!ok){
                return
              }
             await axios.post(url, payload).then((resp) => {
                  if (resp.data.url) {
                      window.open(resp.data.url, '_blank').focus();
                      // handling(resp.data)
                      console.log("res insta response", resp.data)
                  }
              }).catch((err) => {
                console.log(err)
                // this.$router.push('/failed')
              })

      },
      handling(resp){
           console.log('inta response', resp.data)
            if (resp.signature === ''){
              throw error();
            }
            const url = `${this.appUrl}/api/paymentquiz/success/${name}/${phone}/${email}/${question._id}/${this.question.cost}?PayerID=${resp.data.signature}&&paymentId=${resp.data.id}`;
            window.location.href = url;
      },
    handleSubmit(name,phone,email, question) {
      console.log("spit email",email, question)
      this.email = email
      this.name = name
      this.phone = phone
      this.activeQuestion = question

      //validate email //
      var ok = this.ValidateEmail(email)
      if(!ok){
        return
      }
      const url = `${this.appUrl}/api/paymentquiz/${this.name}/${this.phone}/${this.email}/${this.activeQuestion._id}/${this.activeQuestion.cost}`;
      window.location.href = url;

    }
  }
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
  @apply bg-blue-800 text-white text-lg mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 focus:outline-none ;
}
.quizbtn1{
  @apply bg-blue-400 text-black text-lg mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 focus:outline-none ;
}
.quizorder1{
  @apply text-2xl flex justify-center items-center text-blue-800;
}
.quizorder2{
  @apply text-2xl flex justify-center items-center text-blue-800;
}
.ms{
  @apply text-center mx-2;
}
.quizorder3{
  @apply text-2xl flex justify-center items-center text-white bg-blue-800 rounded-full;
}
.h2c{
  @apply my-4 text-3xl text-green-800;
}

.rates{
  @apply text-xl my-2;
}
.quizorder3 a {
  @apply text-white no-underline;
}
.brugrid{
  @apply grid  grid-cols-1 lg:grid-cols-2;
}
</style>
