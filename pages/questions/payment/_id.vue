<template>
  <div class="payment">
      <div class="tpayment">
           <div> We have received your payment the Answer would be emailed to you soon!</div>
      </div>
    <div class="bpayment">
        <div>If any issues arise please reach us through <b>info@topresearchpapers.com</b></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentSuccessful'
}
</script>

<style>
.payment{
    @apply container mx-auto text-green-800 my-20;
}
.tpayment{
    @apply text-xl font-semibold flex justify-center items-center;
}
.bpayment{
    @apply text-xl font-semibold flex justify-center items-center;
}
</style>