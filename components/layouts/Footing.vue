<template>
<div class="gradient">

  <section class="main3 py-4 my-3">
      <footercard  v-for="(item, i) in items" :key="i" :item="item"/>     
<div class="wraps">
   <div class="main">
       <ul class="uls">
              <li class="lis">
                <a href="#" target="_blank" class="link">SOCIAL</a>
              </li>
              <li class="lis">
                <a href="https://twitter.com/PapersResearch" target="_blank" class="link">Twitter</a>
              </li>
              <li class="lis">
                <a href="https://www.linkedin.com/company/top-research-papers" target="_blank" class="link">Linkedin</a>
              </li>
              <li class="lis">
                <a href="https://www.facebook.com/Top-Research-Papers-101848294787396" target="_blank" class="link">Facebook</a>
              </li>
            </ul>
   </div>
</div>
    </section>
    </div>
</template>

<script>
import footercard from './Footercard.vue'
export default {
  components: { footercard },
  data () {
    return {
      items: [
        {
          title: { head: 'LINKS', link: '#' },
          link1: { head: 'FAQ', link: '#' },
          link2: { head: 'Help', link: '#' },
          link3: { head: 'Support', link: '#' }
        },
        {
          title: { head: 'LEGAL', link: '#' },
          link1: { head: 'Terms', link: '#' },
          link2: { head: 'Privacy', link: '#' },
          link3: { head: 'Contract', link: '#' }
        },
        {
          title: { head: 'FIRM', link: '#' },
          link1: { head: 'Blog', link: '#' },
          link2: { head: 'Porfolio', link: '#' },
          link3: { head: 'Contact', link: '#' }
        }
      ]
    }
  }
}
</script>

<style scoped>
.gradient {
        background: linear-gradient(90deg, #3394ee 0%, #e5ecf0 100%);
}
.main3{
  @apply  container mx-auto grid grid-cols-2 lg:grid-cols-4;
}
.war{
  @apply w-full mb-4;
}
.try{
  @apply h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t;
}
.mess{
  @apply my-4 text-3xl leading-tight;
}
.uls{
  @apply list-none mb-6;
}
.lis{
  @apply mt-2  mr-2 block md:mr-0;
}
.link{
  @apply no-underline hover:underline text-black hover:text-gray-300;
}
.wraps{
  @apply mx-5;
}
.main{
  @apply container mx-auto;
}
</style>