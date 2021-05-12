<template>
  <div class="rates flex justify-center items-center flex-wrap text-xl md:text-2xl">
    <div class="mx-2">Average Rating:
       <span class="star"></span>
       <span class="star"></span>
       <span class="star"></span>
       <span class="star"></span>
                <span class="star1 half"></span>4.7</div>
            
            Rated: 3 times
          </div>
</template>

<script>
export default {

}
</script>

<style>
.svgstar{
  @apply text-yellow-700;
}
.star {
    font-size: x-large;
    width: 20px;
    display: inline-block;
    color: gold;
}
.star1 {
    font-size: x-large;
    width: 20px;
    display: inline-block;
    color: gray;
}
.star:last-child {
    margin-right: 0;
}
.star1:last-child {
    margin-right: 0;
}
.star:before {
    content:'\2605';
}
.star1:before {
    content:'\2605';
}
.star1.on {
    color: gold;
}
.star1.half:after {
    content:'\2605';
    color: gold;
    position: absolute;
    margin-left: -20px;
    width: 10px;
    overflow: hidden;
}
</style>
