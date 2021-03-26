<template>
  <div class="formg">
    <div class="formposition">
    <div class="group texti">
        <label class="lab " for="forms-labelOverInputCode">Academic Level:</label>
        <select class="form-name" v-model="order.academicLevel">
             <option v-for="(level, i) in levels" :key="i" :value="level.name">
                    {{ level.name }}
            </option>
            </select>
    </div>
    
    <div class="group texti">
        <label class="lab" for="forms-labelOverInputCode">Writer Category:</label>
        <select class="form-name"  v-model="order.writerLevel">
             <option v-for="(writer, i) in writerLevels" :key="i" :value="writer.level">
                    {{ writer.level }}
            </option>
            </select>
    </div>
    <div class="group texti">
        <label class="lab" for="forms-labelOverInputCode">Delivery Period:</label>
        <select class="form-name" v-model="order.deadline">
             <option v-for="(level, i) in time" :key="i" :value="level.name">
                    {{ level.name }}
            </option>
            </select>
    </div>
    <div class="group texti">
        <label class="lab" for="forms-labelOverInputCode">Service Type:</label>
        <select class="form-name" v-model="order.serviceType">
             <option v-for="(level, i) in services" :key="i" :value="level.name">
                    {{ level.name }}
            </option>
            </select>
    </div>
    <div class="group texti">
        <label class="lab" for="forms-labelOverInputCode">Pages / Slides:</label>
        <input class="form-name" v-model="order.pages" type="number" placeholder="Pages /slides" id="forms-labelOverInputCode"/>
    </div>
    <div class="group texti">
        <label class="lab">
    <input type="radio" value="" v-model="order.spacing" :options="spacingOptions"/>
    <span class="ml-1">Single spacing</span>
    </label>
     <!-- <label class="lab">
    <input type="radio" value="" v-model="order.spacing"/>
    <span class="ml-1">Double</span> -->
    <!-- </label> -->
    </div>
    <div class="group texti">
      <div class="di">Discount code: 
        <span class="discount">GWEXDDSRGCF</span></div>
     <div class="di"> Proceed to get a discount</div>
    </div>
    <div class="groupi">Words: {{ order.pages * 275 * spacingSelected }} <span class="amount"> $ {{ total }}</span></div>
    <div> <a :href="`https://app.topresearchpapers.com/signup`"><button class="btn3 gradient">
            Order Now
          </button></a></div>
  </div>
  </div>
</template>

<script>
import calc from '../../support/calculator.mixins'
export default {
mixins: [calc],
data(){
    return {
    }
}
}
</script>

<style>
.texti{
  text-align: left;
}
.gradient {
        background: linear-gradient(90deg, #3394ee 0%, #e5ecf0 100%);
}
.formg{
    @apply border-gray-50 bg-gray-50 rounded-lg pt-8;
}
.group{
    @apply block my-1;
}
.lab{
    @apply mb-1 mx-3 text-black;
}
.form-name{
    @apply w-10/12 h-10 px-3 mx-4 text-base placeholder-gray-600 border rounded-lg;
}
.formposition{
  @apply py-10 mx-5;
}
.btn3{
  @apply text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8;
}
.di {
  @apply ml-3 mt-2;
}
.discount{
  @apply text-green-900 font-bold;
}
.groupi{
  @apply bg-gray-50 my-2 text-xl font-bold;
}
.amount{
  @apply ml-5;
}
</style>