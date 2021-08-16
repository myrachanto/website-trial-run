<template>
  <div class="modal-backdrop">
    <div class="modal gradient">
      <header class="modal-header">
        <slot name="header">
         <div class="hed"></div>
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body gradient">
        <slot name="body">
          <div class="group texti">
        <label class="lab" for="forms-labelOverInputCode">Name</label>
        <input class="form-name" type="name" v-model="name" placeholder="Name" />
    </div><div class="group texti">
        <label class="lab" for="forms-labelOverInputCode">Phone</label>
        <input class="form-name" type="number" v-model="phone" placeholder="+1 202-555-5555" />
    </div>
          <div class="group texti">
        <label class="lab" for="forms-labelOverInputCode">Email Address</label>
        <input class="form-name" type="email" v-model="email" placeholder="email" />
    </div>
        </slot>
       </section>

      <footer class="modal-footer"> 
        
        <button
          type="button"
          class="btn3"
          @click="handleInta(name, phone,email, question)"
        >
          Pay with Intasend
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Modal',
    props:['handleInta', "question"],
    data(){
      return{
        name: '',
        phone: '',
        email: ''
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style scoped>
.group{
    @apply block my-1;
}
.btn3{
  @apply mx-auto lg:mx-0 hover:underline text-gray-800 font-bold rounded-full py-4 px-8;
}
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(8, 5, 5, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    /* background: #FFFFFF; */
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-header {
    position: relative;
    /* border-bottom: 1px solid #eeeeee; */
    color: black;
    justify-content: space-between;
  }

  .modal-footer {
    /* border-top: 1px solid #eeeeee; */
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  /* .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  } */
</style>