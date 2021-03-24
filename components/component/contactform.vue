<template>
  <div class="formg">
    <div class="group">
        <label class="lab" for="forms-labelOverInputCode">Academic Level:</label>
        <input class="form-name" type="text" placeholder="Regular input" id="forms-labelOverInputCode"/>
    </div>
    
    <div class="group">
        <label class="lab" for="forms-labelOverInputCode">Writer Category:</label>
        <input class="form-name" type="text" placeholder="Regular input" id="forms-labelOverInputCode"/>
    </div>
    <div class="group">
        <label class="lab" for="forms-labelOverInputCode">Delivery Period:</label>
        <input class="form-name" type="text" placeholder="Regular input" id="forms-labelOverInputCode"/>
    </div>
    <div class="group">
        <label class="lab" for="forms-labelOverInputCode">Service Type:</label>
        <input class="form-name" type="text" placeholder="Regular input" id="forms-labelOverInputCode"/>
    </div>
    <div class="group">
        <label class="lab" for="forms-labelOverInputCode">Pages / Slides:</label>
        <input class="form-name" type="text" placeholder="Regular input" id="forms-labelOverInputCode"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
</style>