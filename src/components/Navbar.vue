<script setup>
import {onMounted, ref} from "vue";

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
                <img alt="Logo" class="h-12 mr-5" src="src/assets/brand/LogoWhite.svg">
                <img alt="Name" class="h-5 mr-5" src="src/assets/brand/NameWhite.svg">
              </div>

              <div v-else-if="scrollPosition < 0" class="flex items-center">
                <img alt="Logo" class="h-12 mr-5" src="/src/assets/brand/LogoPink.svg">
                <img alt="Name" class="h-5 mr-5" src="/src/assets/brand/NameBlue.svg">
              </div>
            </a>

            <button data-collapse-toggle="navbar-default" type="button"
                    v-on:click="toggle"
                    class="inline-flex items-center p-2 w-10 h-10
                    justify-center text-sm text-gray-500 rounded-lg md:hidden
                    hover:bg-gray-100 focus:outline-none focus:ring-2
                    focus:ring-gray-200" aria-controls="navbar-default"
                    aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>

            <Transition>
              <p v-if="showNav">Hello</p>
            </Transition>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto"
                 :class="[showNav ? 'flex' : 'hidden' ]"
                 id="navbar-default">
              <ul :class="{
                'text-white' : scrollPosition >= 0,
                'text-black' : scrollPosition < 0,
              }"
                  class="flex p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 font-medium">
                <li>
                  <a href="#conocenos">Conócenos</a>
                </li>
                <li>
                  <a href="#nuestrocafe">Nuestro café</a>
                </li>
                <li>
                  <a href="#valoragregado">Valor agregado</a>
                </li>
                <li>
                  <a href="#encuentranos">Encuéntranos</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>

  </header>
</template>