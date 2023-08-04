<script setup>
import Card from "./Card.vue";
import {onMounted, ref} from "vue";
import {register} from 'swiper/element/bundle';

register();

onMounted(() => {
  const swiper = document.querySelector('swiper-container');
  swiper.breakpoints = {
    920: {
      slidesPerView: 3,
      loop: true,
      autoplay: true,
    }
  }
})

const slides = ref([
  {
    title: "Black morning",
    description: "Bebida preparada de café tipo negro ideal para quienes quieren iniciar el día con energía.",
    image: "BlackMorning.webp"
  },
  {
    title: "Choco Latte",
    description: "Bebida de café con leche con un delicioso toque de chocolate puro como acentuador del sabor.",
    image: "ChocoLatte.webp"
  },
  {
    title: "K Puccino",
    description: "Bebida de café con leche, bajo en grasa para los amantes de los cappuccinos.",
    image: "Kpuccino.webp"
  },
  {
    title: "Mistik Ccinno",
    description: "Bebida de café con leche natural de almendras, panela y un desafiante toque de canela.",
    image: "MistikCcino.webp"
  },
  {
    title: "Skimmed Milk",
    description: "Bebida de café con leche descremada, para disfrutar sin preocupaciones.",
    image: "SkimmedMilk.webp"
  }
]);
</script>

<template>
  <div class="text-center grid grid-cols-12 max-w-screen-2xl mx-auto">
    <div class="col-span-10 col-start-2 inline-flex items-center justify-center w-full">
      <hr class="w-full h-px my-8 bg-[#ff5192] border-0">
      <span class="absolute px-6 text-gray-900 bg-white text-3xl font-bold text-center
      ">¡Disfrúta de la variedad y frescura!</span>
    </div>

    <div class="col-span-10 col-start-2 mt-16">
      <swiper-container autoplay-delay="3000"
                        autoplay-pause-on-mouse-enter="true"
                        centeredSlides="true"
                        coverflow-effect-rotate="0" coverflow-effect-scale="0.75"
                        coverflow-effect-slide-shadows="false"
                        effect="coverflow"
                        loop="true" navigation="true"
                        slides-per-view="1" speed="1000">
        <swiper-slide v-for="slide in [...slides, ...slides]">
          <Card :description="slide.description"
                :image="slide.image"
                :title="slide.title"/>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>
