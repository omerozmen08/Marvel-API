<template >
    <!-- <p>{{ this.$route.params.id }}</p> --> 
 <div class="row" v-for="char in comics" >
  <div class="column" >
    <img :src="url" class="imgStyle">
  </div>
  <div class="column" >
    <h2 class="pStyle">{{ char.title }}</h2><br>
   <p class="pStyle">{{ char.description }}</p> 
   
   <!-- <p class="pStyle">{{ char.creators }}</p>  -->
  </div>
</div>
<!-- <div class="row">
<div class="buttons">
  <router-link  :to="{name:'comics'}" class="bTextStyle">BACK</router-link>
</div>
</div> -->
</template>
<script>
import { public_key } from '@/marvel';
import axios  from 'axios';
export default {
    name:'Comic',
    data(){
	return{
		comics:[],
        url:'',
      
	}
   },
  mounted(){
	this.getComics();
  },
methods: {
    getComics:function(){
        var comicId=this.$route.params.id
        axios.get(`http://gateway.marvel.com/v1/public/comics/${comicId}?apikey=${public_key}`)
        .then((result)=>{
		result.data.data.results.forEach((item) => {
			console.log(item);
		 	this.comics.push(item); 
            this.url=`${item.thumbnail.path}${".jpg"}`
            console.log(this.url)
	      })
		console.log(result)
	})
	.catch((error)=>{
		console.log(error)
	})
    }
},

}
</script>
<style>
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
  width: 50%;
  padding-left: 2%;
  padding-right: 5%;
  margin-top: 3%;
  height: 300px; /* Should be removed. Only for demonstration */
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
}
.pStyle{
    text-align: justify;
 
}
.imgStyle{
  height: 700px;
}
.buttons {
	 position: absolute;
	 z-index: 3;
	 top: 1em;
	 left: 50%;
	 width: 10em;
	 margin-left: -5em;
	 height: 2em;
	 line-height: 2em;
	 text-align: center;
	 cursor: pointer;
	 user-select: none;
	 animation: button 8s linear;
	 margin-top: 4%;
}
.bTextStyle{
	border: solid 1px white;
    color: white;
    padding: 15px;
    font-size: 20px;
 }
 @media only screen and (max-width: 980px) {
  .column {
 
  width: 100%;
  padding-left: 0%;
  padding-right: 0%;
  margin-top: 0%;
  height: 300px; /* Should be removed. Only for demonstration */
}
.imgStyle{
  height: 100%;
width: 100%;
}
}
</style>