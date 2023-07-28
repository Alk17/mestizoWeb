<script setup>
import {onMounted, ref} from "vue";
import Navlink from "./Navlink.vue";

const scrollPosition = ref(null);
let mainDivider = null;
const showNav = ref(false);
const expandedMenu = ref(null);

function updateScroll() {
  let dividerBounding = mainDivider.getBoundingClientRect();
  scrollPosition.value = dividerBounding.y + dividerBounding.height - 60;
}

onMounted(() => {
  mainDivider = document.getElementById('nav-divider');
  window.addEventListener('scroll', updateScroll);
  //expandedMenu.value.getBoundingClientRect();

})

function toggle() {
  showNav.value = !showNav.value;
}

</script>

<template>
  <header>
    <nav class="fixed w-full z-20 top-0 left-0 md:flex md:flex-row md:justify-between max-w-screen-2xl">
      <div class="grid grid-cols-12 backdrop-blur-md">
        <div class="col-span-10 col-start-2">
          <div class="flex flex-wrap items-center justify-between py-4 mx-auto">

            <a class="flex items-center" href="#mestizo">
              <div v-if="scrollPosition >= 0" class="flex items-center">
                <img alt="Logo" class="h-12 mr-5" src="../../assets/brand/LogoWhite.svg">
                <img alt="Name" class="h-5 mr-5" src="../../assets/brand/NameWhite.svg">
              </div>

              <div v-else-if="scrollPosition < 0" class="flex items-center">
                <img alt="Logo" class="h-12 mr-5" src="/src/assets/brand/LogoPink.svg">
                <img alt="Name" class="h-5 mr-5" src="/src/assets/brand/NameBlue.svg">
              </div>
            </a>

            <button class="inline-flex items-center p-2 w-10 h-10 focus:bg-transparent
                    justify-center text-sm text-white rounded-lg md:hidden"
                    type="button"
                    v-on:click="toggle">
              <span class="sr-only">Open main menu</span>
              <svg aria-hidden="true" class="w-5 h-5" fill="none" viewBox="0 0 17 14"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1h15M1 7h15M1 13h15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"/>
              </svg>
            </button>

          </div>
        </div>
      </div>

      <div :class="[showNav ? 'scale-x-100' : ' -translate-x-[125%] scale-x-0 md:-translate-x-0 md:scale-x-100' ]"
           class="grid grid-cols-12 backdrop-blur-md transition-all duration-700 h-screen md:h-auto">
        <div ref="expandedMenu"

             class="items-center w-full  justify-between md:flex
           md:w-auto  col-span-10 col-start-2
                  md:-translate-x-0">
          <ul :class="{
                'text-white' : scrollPosition >= 0,
                'text-black' : scrollPosition < 0,
              }"
              class="flex flex-col p-4 w-full md:p-0 md:flex-row md:space-x-8 md:mt-0 font-medium">

            <Navlink href="#conocenos" label="Conócenos"></Navlink>
            <Navlink href="#nuestrocafe" label="Nuestro café"></Navlink>
            <Navlink href="#valoragregado" label="Valor agregado"></Navlink>
            <Navlink href="#encuentranos" label="Encuéntranos"></Navlink>

          </ul>
        </div>
      </div>


    </nav>

  </header>
</template>