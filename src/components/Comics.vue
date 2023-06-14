<template>
<carousel :settings="settings" :breakpoints="breakpoints" class="crStyle"> 
      <slide v-for="comic in comics" :key="slide">
        <div class="carousel__item"> 
          <router-link :to="{name:'comic',params:{id:comic.id}}"> <img :src=comic.thumbnail.path+url class="imgStyle"></router-link>
          <router-link :to="{name:'comic',params:{id:comic.id}}"> <h4 class="textStyle"><b>{{ comic.title }}</b></h4></router-link>
        </div>   
    </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </template>
<script>
import { public_key,secret_key } from '@/marvel';
import axios from 'axios';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
export default {
  name: 'Comics',
   components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
   data(){
	return{
		comics:[],
    url:'',
        size:'standart_large.jpg',
	}
   },
  mounted(){
	this.getComics();
  },
  methods:{
 getComics:function(){
 
	axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
	.then((result)=>{
		result.data.data.results.forEach((item) => {
			console.log(item);
		 	this.comics.push(item); 
       this.url=`${".jpg"}`
	      })
		console.log(result)
	})
	.catch((error)=>{
		console.log(error)
	})
   }
  }
  }


</script>

<style scoped>
.carousel__item {
    object-fit: contain;
    margin-right: 10px;
    transition: transform 450ms;
    height: 100%;
    background-repeat: round;
   
}

.carousel__slide {
	padding-right: 10px;
    padding-left: 10px;
  width: 12%!important;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding-top: 25%;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
* {
  box-sizing: border-box;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
.column {
  float: left;
  width: 12%;
  height: 100%; /* Should be removed. Only for demonstration */
  padding-right: 1%;
}
.imgStyle{
  width: 100%;
  height: 300px;
}
.crStyle{
  padding-left: 2%;
  padding-right: 2%;

}
.textStyle{
  color: white;
}
@media only screen and (max-width: 980px) {
  .carousel__slide {
	padding: 10px;
  width: 100%!important;
}
}
</style>