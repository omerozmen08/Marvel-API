<template>
  <Slider></Slider>
<h2 class="headerStyle"> MY FAVORITE LIST</h2>
<FavList></FavList>
<h2 class="headerStyle">COMICS</h2>
<Comics></Comics>
<h2 class="headerStyle">CHARACTERS</h2>
<Characters></Characters>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue';
import Comics from '@/components/Comics.vue';
import Characters from '@/components/Characters.vue';
import Nav from  '@/components/Nav.vue'
import FavList from '@/components/FavList.vue';
export default {
  name: 'ComicsView',
  components: {
    Nav,
    Slider,
    Comics,
    Characters,
    FavList
  }
} 
</script>
<style scoped>
.headerStyle{
text-align: left;
color:white
}
@import url(https://fonts.googleapis.com/css?family=Passion+One);
 body {
	 background: #111;
	 overflow: hidden;
	 margin: 0;
	 font-family: 'Passion One', impact;
}

.carousel__prev, .carousel__next {
    box-sizing: content-box;
    background: var(--vc-nav-background);
    border-radius: var(--vc-nav-border-radius);
    width: var(--vc-nav-width);
    height: var(--vc-nav-height);
    text-align: center;
    font-size: var(--vc-nav-height);
    padding: 0;
    color: var(--vc-nav-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: white !important;;
    border: 0;
    cursor: pointer;
    margin: 0 10px;
    top: 50%;
    transform: translateY(-50%);
}
.carousel__prev:hover, .carousel__next:hover {
    color: #ffffff!important;
}



</style>