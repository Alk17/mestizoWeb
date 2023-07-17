<script setup>
import NavBar from "./components/Navbar.vue";
import Slider from "./components/slider/Slider.vue";
import Main from "./views/Main.vue";
</script>

<template>
  <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <NavBar class="pb-20"/>
    <div class="max-w-6xl w-screen mx-auto">
      <Main/>
    </div>
  </div>
  <div class="my-5">

  <Slider/>
  </div>

</template>

<style scoped>



</style>
