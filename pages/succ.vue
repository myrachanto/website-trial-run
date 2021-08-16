<template>
  <div class="payment">
      <div class="tpayment">
           <div class=""> Payment success</div>
      </div>
    <div class="bpayment">
        <div>If any issues arise please reach us through <b>info@topresearchpapers.com</b></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentSuccessful',
  created(){
    // const url = `${this.appUrl}/api/paymentquiz/success/${name}/${phone}/${email}/${question._id}/${this.question.cost}?PayerID=${resp.data.signature}&&paymentId=${resp.data.id}`;
    // window.location.href = url;
  }
}

</script>

<style>
.payment{
    @apply container mx-auto text-green-800 my-20 text-3xl;
}
.tpayment{
    @apply font-semibold flex justify-center items-center;
}
.bpayment{
    @apply font-semibold flex justify-center items-center;
}
</style>