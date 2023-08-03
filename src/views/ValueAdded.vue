<script setup>
import BenefitCard from "../components/BenefitCard.vue";
</script>

<template>
  <div>
    <div class="mx-auto max-w-screen-2xl grid grid-cols-12">
      <div class="col-span-10 col-start-2 inline-flex items-center justify-start w-full">
        <hr class="w-full h-px my-8 bg-[#ff5192] border-0">
        <span class="absolute pr-6 text-gray-900 bg-white text-3xl font-bold text-end">Valor agregado</span>
      </div>
    </div>

    <div class="mt-16 py-14 space-y-8 bg-coffeeBeans bg-cover bg-center">
      <BenefitCard positionClasses="col-start-3 col-span-7"
                   text="Café 100% cosechado en fincas salvadoreñas."/>

      <BenefitCard positionClasses="col-start-4 col-span-7"
                   text="Auténticos sabores distribuidos de la manera más práctica."/>

      <BenefitCard positionClasses="col-start-3 col-span-7"
                   text="Altos estándares de cálidad en los procesos de producción."/>

      <div class="max-w-screen-2xl mx-auto grid grid-cols-12">
        <div class="col-span-10 col-start-2 mt-8
            backdrop-blur-lg bg-white/60 py-6 rounded-xl drop-shadow-2xl shadow-2xl">
          <video autoplay class="mx-auto w-full md:w-3/5" controls="controls" height="auto"
                 loop muted>
            <source src="/src/assets/Post-Mestizo.m4v" type="video/mp4"/>
          </video>
        </div>
        <div class="col-span-10 col-start-2"></div>
      </div>
    </div>
  </div>
</template>
