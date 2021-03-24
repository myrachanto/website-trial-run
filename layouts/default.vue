<template>
  <div class="wrapper">
    <navbar />
    <Nuxt />
    <footing />
  </div>
</template>
<script>

import Navbar from '~/components/layouts/Navbar.vue'
import Footing from '~/components/layouts/Footing.vue'
export default {
  components: { Navbar, Footing },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.wrapper{
  @apply w-full;
} 
/* .container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}  */
</style>