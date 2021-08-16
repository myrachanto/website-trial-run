<template>
  <div class="payment">
      <div class="tpayment">
           <div class="text-red-700"> Payment failed</div>
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
    @apply container mx-auto text-red-800 my-20 text-3xl;
}
.tpayment{
    @apply font-semibold flex justify-center items-center;
}
.bpayment{
    @apply font-semibold flex justify-center items-center;
}
</style>