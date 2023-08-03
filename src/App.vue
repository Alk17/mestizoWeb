<script setup>
import NavBar from "./components/nav/Navbar.vue";
import Slider from "./components/slider/Slider.vue";
import Main from "./views/Main.vue";
import Footer from "./components/Footer.vue";
import ValueAdded from "./views/ValueAdded.vue";
import AboutUs from "./views/AboutUs.vue";
import MeetUs from "./views/MeetUs.vue";
import 'swiper/css';
</script>

<template>
  <div class="font-montserrat font-light">

    <div class="grid grid-cols-12 bg-gradient-to-tl from-[#50f1ec] to-[#e613be]">
      <div class="col-span-10 col-start-2 relative">
        <NavBar id="mestizo"/>
        <Main/>
      </div>
      <div id="nav-divider" class="absolute border-b-4 border-white
      bottom-0 left-0 w-full overflow-hidden leading-[0] h-[35px] ">
        <svg class="h-full mx-auto" viewBox="0 0 500 318" xmlns="http://www.w3.org/2000/svg">
          <path d="M453.44 318h-415q-16.38-.79-32.75 0H0v-1.06l.68-4.85q.07-.55.63-.56 4.61-.1 9.15-.13c4.04-.02 6.25 1.27 9.3-2.52q.32-.39.81-.52 7.99-1.99 16.02-3.65c3.08-.63 5.02-2.83 8.41-3.5q7.73-1.51 15.53-2.72.51-.08.89-.42.76-.67 1.31-.87 6.52-2.25 13.01-4.57c5.26-1.88 9.39-5.83 13.73-9.18q10.56-8.16 14.32-9.67c8.04-3.22 14.82-4.93 21.59-11.66 6.9-6.86 13.1-12.57 21.61-18.93 18.7-13.97 31.17-30.01 47.03-49.16q6.91-8.33 11.02-17.54c5.01-11.22 11.72-21.2 16.57-32.51 2.74-6.41 6.56-12.82 8.32-19.4 1.46-5.46 1.5-8.92 2.44-13.3q.88-4.08.89-4.17 2.13-16.08 6.51-31.69c3.15-11.23 2.04-22 2.95-33.38q.55-6.86.89-13.73c.23-4.46 1.32-8.67 1.94-13.15q.06-.48.53-.63c1.44-.48 1.49 2.63 1.39 3.58q-.05.55.21 1.05.96 1.85-.2 3.75-.3.5.17.85.69.52.35 1.38-.2.51-.13 1.05 1.03 7.37 1.52 14.78c.28 4.23 1.24 9.59 1.5 14.4.36 6.72 2.11 13.63 3.14 20.32.25 1.65 1.27 3.14 1.54 4.79q3.12 18.5 6.58 36.94c.92 4.91 2.62 11.15 5.03 15.51 4.46 8.07 6.86 17 11.73 24.95 3.11 5.07 6.16 9.56 8.16 15.33 1.81 5.2 2.96 8.12 5.86 12.15 2.64 3.67 6.18 6.95 9.12 10.5q2.86 3.45 5.75 6.47 9.2 9.62 16.61 20.7c3.75 5.61 9.72 9.29 14.44 14.09 7.43 7.56 16.35 13.7 23.71 20.73 3 2.86 6.71 5.2 9.84 8.13 2.23 2.09 6.11 3.8 9.02 4.65 11.41 3.32 19.15 10.46 28.55 17.55 7.4 5.59 15.62 8.68 24.29 10.29 9.38 1.74 15.67 3.58 25.71 6.94 6.77 2.27 12.94 2.97 19.24 3.69q.61.07.62.69.01 3.42-2.59 5.23-.42.29-.15.74 1.17 1.87 3.48 1.45.3-.06.2.22-.04.14-.09.28-.04.11-.16.11l-27.08.18Z"
                fill="#fff"/>
        </svg>
      </div>

    </div>
    <AboutUs id="conocenos" class="mt-10 md:mt-20 scroll-mt-[80px]"/>
    <Slider id="nuestrocafe" class="mt-10 md:mt-20  scroll-mt-[80px]"/>
    <ValueAdded id="valoragregado" class="mt-10 md:mt-16  scroll-mt-[80px]"/>
    <MeetUs id="encuentranos" class="mt-10 md:mt-20  scroll-mt-[80px]"/>
    <Footer/>
  </div>
</template>

