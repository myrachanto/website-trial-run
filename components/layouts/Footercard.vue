<template>
<div class="wraps">
   <div class="main">
     <!-- {{item.title.head}} -->
            <ul class="uls">
              <li class="lis">
                <nuxt-link :to="item.title.link" class="link">{{item.title.head}}</nuxt-link>
              </li>
              <li class="lis">
                <nuxt-link :to="item.link1.link" class="link">{{item.link1.head}}</nuxt-link>
              </li>
              <li class="lis">
                <nuxt-link :to="item.link2.link" class="link">{{item.link2.head}}</nuxt-link>
              </li>
              <li class="lis">
                <nuxt-link :to="item.link3.link" class="link">{{item.link3.head}}</nuxt-link>
              </li>
            </ul>
          </div></div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
.wraps{
  @apply flex justify-between items-center;
}
.main{
  @apply flex-1 container;
}
.p{
  @apply uppercase text-gray-500 md:mb-6;
}
.uls{
  @apply list-none mb-6;
}
.lis{
  @apply mt-2 inline-block mr-2 md:block md:mr-0;
}
.link{
  @apply no-underline hover:underline text-white hover:text-gray-800;
}
</style>