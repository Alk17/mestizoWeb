<script setup>
import {onMounted, ref} from "vue";

const scrollPosition = ref(null);
let mainDivider = null;

function updateScroll() {
  let dividerBounding = mainDivider.getBoundingClientRect();
  scrollPosition.value = dividerBounding.y + dividerBounding.height - 60;
}

onMounted( () => {
  mainDivider = document.getElementById('nav-divider');
  window.addEventListener('scroll', updateScroll);
})



</script>

<template>
  <header>
    <nav class="fixed w-full z-20 top-0 left-0 backdrop-blur-lg">
      <div class="grid grid-cols-12">
        <div class="col-span-10 col-start-2">
          <div class="max-w-screen-2xl flex flex-wrap items-center justify-between py-4 mx-auto">
            <a class="flex items-center" href="#mestizo">
              <img alt="Logo" class="h-12 mr-5" src="../assets/images/LogoWhite.png">
              <img alt="Logo" class="h-5 mr-5" src="../assets/images/NameWhite.png">
              <span class="self-center text-2xl font-semibold font-syne text-white whitespace-nowrap"></span>
            </a>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto">
              <ul class="flex p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 font-medium"
              :class="{
                'text-white' : scrollPosition >= 0,
                'text-black' : scrollPosition < 0
              }">
                <li>
                  <a href="#conocenos">Conócenos</a>
                </li>
                <li>
                  <a href="#nuestrocafe">Nuestro café</a>
                </li>
                <li>
                  <a href="#valoragregado" >Valor agregado</a>
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