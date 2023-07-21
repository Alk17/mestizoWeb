<script setup>
import {ref} from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="max-w-screen-2xl w-screen px-10 mx-auto h-screen grid grid-cols-10 place-content-center">
    <div class="col-span-4 lg:col-span-6 xl:col-span-5 flex items-center">
      <div class="space-y-10">
        <div class="font-poppins font-extrabold uppercase text-6xl">
          <h1>Recargate</h1>
          <h1>naturalmente</h1>
        </div>
        <p>
          Disfruta las cinco opciones especialmente creadas para diversificar tu paladar brindándote
          la frescura de un delicioso café helado en cualquier momento y lugar.
        </p>
        <div class="">
          <button class="bg-transparent p-3 px-12 border border-amber-800 rounded-full hover:ring hover:ring-amber-100">Menú</button>
        </div>
      </div>
    </div>

    <div class="col-span-4 lg:col-span-4 xl:col-span-5">
      <img class="transform -rotate-12 h-[14rem] lg:h-[28rem] xl:h-[46rem] mx-auto" src="/images/BlackMorning.png">
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
  bottom: -1px;
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
