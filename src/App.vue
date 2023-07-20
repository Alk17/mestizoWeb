<script setup>
import NavBar from "./components/Navbar.vue";
import Slider from "./components/slider/Slider.vue";
import Main from "./views/Main.vue";
import Benefits from "./views/Benefits.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="font-montserrat font-light">

    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <NavBar class="pb-20"/>
      <div class="max-w-6xl w-screen px-10 mx-auto">
        <Main/>
      </div>
    </div>

    <div class="grid grid-cols-12">

      <div class="col-span-10 col-start-2 ">

        <div class="max-w-5xl grid grid-cols-2 mx-auto my-24">
          <div class="space-y-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare euismod luctus. Ut suscipit,
              ligula
              quis mollis semper, purus nisi elementum erat, quis eleifend risus magna sit amet felis. Morbi nec velit
              sed
              magna vulputate eleifend. Duis tempus nibh vitae nisi sollicitudin tempor. Morbi condimentum aliquet urna,
              a
              congue urna vestibulum vel.
            </p>
            <p>
              Sed accumsan mauris suscipit laoreet auctor. Donec augue urna, auctor a nisl id, pretium blandit nulla.
              Vestibulum turpis ex, pellentesque quis mi nec, tincidunt porttitor nisl. Nulla felis tellus, semper
              convallis
              congue nec, congue vitae tellus. Sed lacinia lorem quis magna auctor accumsan. Nam nec tellus eu velit
              vulputate
              posuere molestie sit amet eros.
            </p>
          </div>
          <div class="grid place-content-center">
            <h1></h1>
            <div class="bg-blob1">
              <button>Yes</button>
            </div>
          </div>
          <div class="col-span-2 mt-20">
            <img alt="" src="./assets/images/LatasAll.jpg">
          </div>
        </div>

        <div class="my-20">

          <Benefits/>
        </div>

        <div class="my-5">
          <Slider/>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-20">
    <Footer/>
  </div>

</template>

<style scoped>


</style>
