<script setup>

</script>

<template>

  <footer>
    <div class="relative grid grid-cols-12 bg-gradient-to-tl from-[#50f1ec] to-[#e613be] mt-16 h-full content-between">

      <div class="divider-top">
        <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <rect height="3.6" x="1200"></rect>
          <rect height="3.6"></rect>
          <path class="shape-fill"
                d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"></path>
        </svg>
      </div>

      <div class="col-span-10 col-start-2 mt-20">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-12">
            <div class="col-span-12 md:col-span-4 text-white">
              <p class="text-center md:text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lectus sollicitudin, dignissim
                libero nec, efficitur leo. Etiam fermentum odio vel lorem ultricies pellentesque. Nam eu posuere
                mauris, ac feugiat libero.
              </p>
            </div>

            <div class="col-span-10 col-start-2 mt-8 md:mt-0 md:col-span-4 md:col-start-10">
              <a class="flex items-center justify-center" href="#mestizo">
                <img alt="Logo" class="h-48" src="../assets/images/LogoSloganWhite.svg"/>
              </a>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8"/>

          <div class="sm:flex sm:items-center sm:justify-end pb-12">
            <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0 text-gray-300">
              <a class="hover:text-gray-100" href="https://www.facebook.com/" target="_blank">
                <i class="bi bi-facebook"></i>
                <span class="sr-only">Facebook page</span>
              </a>

              <a class=" hover:text-gray-100 " href="https://www.instagram.com/" target="_blank">
                <i class="bi bi-instagram"></i>
                <span class="sr-only">Instagram page</span>
              </a>

              <a class=" hover:text-gray-100 "
                 href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Des"
                 target="_blank">
                <i class="bi bi-twitter"></i>
                <span class="sr-only">Twitter page</span>
              </a>

              <a class=" hover:text-gray-100 " href="https://www.linkedin.com/" target="_blank">
                <i class="bi bi-linkedin"></i>
                <span class="sr-only">LinkedIn page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<style scoped>
.divider-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.divider-top svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 145px;
}

.divider-top .shape-fill {
  fill: #FFFFFF;
}
</style>