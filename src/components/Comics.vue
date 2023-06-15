<template>
<carousel :settings="settings" :breakpoints="breakpoints" class="crStyle"> 
      <slide v-for="comic in comics" :key="slide">
        <div class="carousel__item"> 
          <div style="height: 410px;">
          <router-link :to="{name:'comic',params:{id:comic.id}}"> <img :src=comic.thumbnail.path+url class="imgStyle"></router-link>
          <router-link :to="{name:'comic',params:{id:comic.id}}"> <h4 class="textStyle"><b>{{ comic.title }}</b></h4></router-link>
        </div> 
          <button id="favBtn"   @click="addFavorite(comic)"><img  id="favId" src="../assets/star.png" height="32"><span id="favSpan">Favorite</span></button>

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
   computed:{
    favorites(){
     return this.$store.state.favorites.favoritesState;
    }
  },
  mounted(){
	this.getComics();
  },
  methods:{
    addFavorite(favorite){
        this.$store.dispatch("favorites/addFavorite",favorite);
        },
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
    transition: transform 450ms;
    height: 100%;
    background-repeat: round;
   
}

.carousel__slide {
    width: 12%!important;
    margin-left: 1%;
    border: solid 1px #ffffff3b;
    padding-bottom: 1%;
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
<style>
#favBtn{
  background-color: transparent;
    border-color: transparent;
    color: #ffc107;
    border: solid 1px #ffc10747;
    padding: 4%;
}

</style>