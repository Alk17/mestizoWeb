<script setup>
import {onMounted, ref} from "vue";
import Navlink from "./Navlink.vue";

const scrollPosition = ref(null);
let mainDivider = null;
const showNav = ref(false);

function updateScroll() {
  let dividerBounding = mainDivider.getBoundingClientRect();
  scrollPosition.value = dividerBounding.y + dividerBounding.height - 60;
}

onMounted(() => {
  mainDivider = document.getElementById('nav-divider');
  window.addEventListener('scroll', updateScroll);
})

function toggle() {
  showNav.value = !showNav.value;
}

</script>

<template>
  <header>
    <nav class="fixed w-full z-20 top-0 left-0 backdrop-blur-lg">
      <div class="grid grid-cols-12">
        <div class="col-span-10 col-start-2">
          <div class="max-w-screen-2xl flex flex-wrap items-center justify-between py-4 mx-auto">

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
                    justify-center text-sm  rounded-lg lg:hidden"
                    :class="[scrollPosition >= 0 ? 'text-white' : 'text-[#ff478b]']"
                    type="button"
                    v-on:click="toggle">
              <span class="sr-only">Open main menu</span>
              <svg aria-hidden="true" class="w-5 h-5" fill="none" viewBox="0 0 17 14"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1h15M1 7h15M1 13h15" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
              </svg>
            </button>

            <div
                 :class="[showNav ? 'max-h-[176px]' : 'max-h-0' ]"
                 class="items-center w-full justify-between lg:max-h-[176px] lg:flex lg:w-auto overflow-y-hidden
                      transition-[max-height] duration-500">
              <ul class="flex flex-col p-4 w-full lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-medium"
                  :class="{
                'text-white' : scrollPosition >= 0,
                'text-black' : scrollPosition < 0,
              }">

                <Navlink href="#conocenos" label="Conócenos"/>
                <Navlink href="#nuestrocafe" label="Nuestro café"/>
                <Navlink href="#valoragregado" label="Valor agregado"/>
                <Navlink href="#encuentranos" label="Encuéntranos"/>

              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>
  </header>
</template>