<template>
<div class="gradient">
  <!-- Change the colour #f8fafc to match the previous section colour -->
    <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g class="wave" fill="#f8fafc">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
            ></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  <section class="main3">
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