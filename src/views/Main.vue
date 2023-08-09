<template>
  <div class="max-w-screen-2xl mx-auto h-screen grid grid-cols-10 place-content-center">
    <div class="col-span-10 mt-16 lg:my-auto md:col-span-6 lg:col-span-6
    xl:col-span-5 flex items-center">

      <div class="space-y-8 md:space-y-10 md:mt-0">
        <div class="font-poppins font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl
        text-white">
          <h1>Recargate</h1>
          <h1>naturalmente</h1>
        </div>

        <Transition appear>

          <p class="font-medium text-sm md:text-base text-white">
            Disfruta las cinco opciones especialmente creadas para diversificar tu paladar brindándote
            la frescura de un delicioso café helado en cualquier momento y lugar.
          </p>
        </Transition>

        <div class="text-start md:text-start">
          <button class="bg-transparent p-2.5 px-14 rounded-full ease-in-out duration-100
          outline outline-2 outline-offset-2 outline-white text-white font-poppins
          hover:bg-white hover:text-black hover:outline hover:outline-offset-2 hover:outline-white">
            <a href="#nuestrocafe">
              Menú
            </a>
          </button>
        </div>
      </div>
    </div>

    <div class="col-span-4 col-end-11 xl:col-span-5">
      <img alt="BlackMorning" class="transform rotate-12 lg:my-auto h-[16rem] md:h-[20rem]
           lg:h-[28rem] xl:h-[35rem] md:mt-10 mx-auto" src="/images/BlackMorningHQ.webp"
           srcset="/images/BlackMorning.webp 767w, /images/BlackMorningHQ.webp 1200w">
    </div>
  </div>
</template>
