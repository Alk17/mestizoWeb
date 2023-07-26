<script setup>
import NavBar from "./components/nav/Navbar.vue";
import Slider from "./components/slider/Slider.vue";
import Main from "./views/Main.vue";
import Footer from "./components/Footer.vue";
import ValueAdded from "./views/ValueAdded.vue";
import AboutUs from "./views/AboutUs.vue";
import MeetUs from "./views/MeetUs.vue";
</script>

<template>
  <div class="font-montserrat font-light">

    <div class="grid grid-cols-12 bg-gradient-to-tl from-[#50f1ec] to-[#e613be]">
      <div class="col-span-10 col-start-2">
        <NavBar id="mestizo"/>
        <Main/>
      </div>
    </div>

    <AboutUs id="conocenos" class="mt-10 md:mt-20 scroll-mt-[80px]"/>
    <Slider id="nuestrocafe" class="mt-10 md:mt-20  scroll-mt-[80px]"/>
    <ValueAdded id="valoragregado" class="mt-10 md:mt-20  scroll-mt-[80px]"/>
    <MeetUs id="encuentranos" class="mt-10 md:mt-20  scroll-mt-[80px]"/>
    <Footer/>
  </div>

</template>

