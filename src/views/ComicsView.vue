<template>
  
  <Nav></Nav>
  <Slider></Slider>
  
<h2 class="headerStyle">COMICS</h2>
<Comics></Comics>
</template>

<script>
// @ is an alias to /src
import Nav from  '@/components/Nav.vue';
import Slider from '@/components/Slider.vue';
import Comics from '@/components/Comics.vue';
export default {
  name: 'ComicsView',
  components: {
    Nav,
    Slider,
    Comics
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



</style>