<script setup>
import {ref} from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="w-screen h-screen grid grid-cols-12 place-content-center">
    <div class="col-span-10 col-start-2 lg:col-span-6 space-y-10">
      <div>
        <h1 class="font-poppins font-extrabold text-5xl uppercase">Recargate</h1>
        <h1 class="font-poppins font-extrabold text-4xl sm:text-5xl uppercase">naturalmente</h1>
      </div>
      <p>
        Disfruta las cinco opciones especialmente creadas para diversificar tu paladar brindandote
        la frescura de un delicioso café helado en cualquier momento y lugar.
      </p>
      <p>
        <a href="">Menú</a>
      </p>
    </div>
    <div class="col-span-10 col-start-2 md:col-span-4">
      <img class="transform -rotate-12 h-80" src="/images/BlackMorning.png">
    </div>
  </div>

  <div class="wave">
    <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
      <path
          class="shape-fill"
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>


</template>

<style scoped>
.wave {
  position: absolute;
  bottom: -81px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.wave svg {
  position: relative;
  display: block;
  width: calc(145% + 1.3px);
  height: 100px;
}

.wave .shape-fill {
  fill: #FFFFFF;
}
</style>
