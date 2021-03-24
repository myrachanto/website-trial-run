<template>
  <div class="formg">
    <div class="group">
        <label class="lab" for="forms-labelOverInputCode">Academic Level:</label>
        <select class="form-name">
             <option v-for="(level, i) in levels" :key="i" :value="level.name">
                    {{ level.name }}
            </option>
            </select>
    </div>
    
    <div class="group">
        <label class="lab" for="forms-labelOverInputCode">Writer Category:</label>
        <select class="form-name">
             <option v-for="(writer, i) in writerLevels" :key="i" :value="writer.level">
                    {{ writer.level }}
            </option>
            </select>
    </div>
    <div class="group">
        <label class="lab" for="forms-labelOverInputCode">Delivery Period:</label>
        <select class="form-name">
             <option v-for="(level, i) in time" :key="i" :value="level.name">
                    {{ level.name }}
            </option>
            </select>
    </div>
    <div class="group">
        <label class="lab" for="forms-labelOverInputCode">Service Type:</label>
        <select class="form-name">
             <option v-for="(level, i) in services" :key="i" :value="level.name">
                    {{ level.name }}
            </option>
            </select>
    </div>
    <div class="group">
        <label class="lab" for="forms-labelOverInputCode">Pages / Slides:</label>
        <input class="form-name" type="number" placeholder="Pages /slides" id="forms-labelOverInputCode"/>
    </div>
    <div class="group">
        <label class="lab">
    <input type="radio" value=""/>
    <span class="ml-1">Single spacing</span>
    </label>
     <label class="lab">
    <input type="radio" value=""/>
    <span class="ml-1">Double</span>
    </label>
    </div>
    <div><nuxt-link to="/about"><button class="btn3 gradient">
            Order Now
          </button></nuxt-link></div>
  </div>
</template>

<script>
export default {
data(){
    return {
         levels: [
        { name: 'Select level', rate: 1 },
        { name: 'High school', rate: 1.2 },
        { name: 'Collage', rate: 1.5 },
        { name: 'Undergraduate', rate: 1.8 },
        { name: 'Masters', rate: 2 },
        { name: 'PhD', rate: 2.5 },
      ],
      writerLevels: [
        { level: 'standard', rate: 1 },
        { level: 'premium', rate: 2 },
        { level: 'platnum', rate: 3 }
      ],
      time: [
        { name: '6 hrs', value: 6, charge: 1 },
        { name: '12 hrs', value: 12, charge: 0.9 },
        { name: '24 hrs', value: 24, charge: 0.85 },
        { name: '2 days', value: 48, charge: 0.8 },
        { name: '3 days', value: 72, charge: 0.75 },
        { name: '4 days', value: 96, charge: 0.7 },
        { name: '6 days', value: 144, charge: 0.65 },
        { name: '8 days', value: 192, charge: 0.6 },
        { name: '10 days', value: 240, charge: 0.55 },
        { name: '14 days', value: 336, charge: 0.5 },
        { name: '20 days', value: 480, charge: 0.45 },
        { name: '30 days', value: 720, charge: 0.4 },
        { name: '40 days', value: 960, charge: 0.35 }
      ],
      services: [
        { name: 'Writting from scratch', charge: 1 },
        { name: 'Editing and proofreading', charge: 0.8 },
        { name: 'Presentation', charge: 0.6 }
      ],
    }
}
}
</script>

<style>

.gradient {
        background: linear-gradient(90deg, #3394ee 0%, #e5ecf0 100%);
}
.formg{
    @apply border-gray-50 bg-gray-50 rounded-lg my-5 py-4;
}
.group{
    @apply bg-gray-50;
}
.lab{
    @apply mb-1 mx-3 flex justify-start text-black;
}
.form-name{
    @apply w-10/12 h-10 px-3 mx-4 text-base placeholder-gray-600 border rounded-lg;
}
.btn3{
  @apply text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
</style>