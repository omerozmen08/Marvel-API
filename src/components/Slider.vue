<template>
    <carousel>
      <slide v-for="slide in 10" :key="slide">
      <div class="carousel__item"><img src="https://cdn.marvel.com/content/1x/dplus_lob_mas_dsk_05.jpg ">   </div>
    </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
  name: 'Slider',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  
}

</script>
<style scoped>
.carousel__item {
	min-height: 500px;
	width: 100%;
	background-color: #111111;
	color: white;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}

body{
    margin: 0px!important;
}

</style>