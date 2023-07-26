<script setup>

defineProps({
  msg: String,
})

</script>

<template>
      <div class="max-w-screen-2xl mx-auto h-screen grid grid-cols-10 place-content-center">
        <div class="col-span-10  md:col-span-4 lg:col-span-6 xl:col-span-5

        flex items-center">
          <div class="space-y-10 mt-12 md:mt-0">
            <div class="font-poppins font-extrabold uppercase text-4xl md:text-6xl text-white">
              <h1>Recargate</h1>
              <h1>naturalmente</h1>
            </div>
            <p class="font-medium text-white">
              Disfruta las cinco opciones especialmente creadas para diversificar tu paladar brindándote
              la frescura de un delicioso café helado en cualquier momento y lugar.
            </p>
            <div class="text-end md:text-start">
              <button class="bg-transparent p-2.5 px-14 rounded-full
          outline outline-2 outline-offset-2 outline-white text-white font-poppins
          hover:bg-white hover:text-black
          hover:outline hover:outline-offset-2 hover:outline-white
          focus:bg-[#d8325e] focus:outline focus:outline-offset-2 focus:outline-[#d8325e]
          ease-in-out duration-100">Menú
              </button>
            </div>
          </div>
        </div>

        <div class="col-span-4 md:col-span-10 lg:col-span-4 xl:col-span-5">
          <img class="transform -rotate-12 md:rotate-12 h-[14rem] md:h-[20rem] md:mt-10
           lg:h-[28rem] xl:h-[46rem] mx-auto" src="/images/BlackMorning.png">
        </div>
      </div>

      <div id="nav-divider" class="divider-bottom">
        <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <rect height="3.6" x="1200"></rect>
          <rect height="3.6"></rect>
          <path class="shape-fill"
                d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"></path>
        </svg>
      </div>

</template>

<style scoped>
.divider-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.divider-bottom svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 200px;
}

.divider-bottom .shape-fill {
  fill: #FFFFFF;
}
</style>
