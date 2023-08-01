<script setup>
import Card from "./Card.vue";
import {ref} from "vue";
import {register} from 'swiper/element/bundle';

register();

let interval = null;
const activeSlide = ref(1);
let slide = false;

const slides = ref([{
  title: "Black morning",
  description: "Bebida preparada de café tipo negro ideal para quienes quieren iniciar el día con energía.",
  image: "BlackMorning.png"
},
  {
    title: "Choco Latte",
    description: "Bebida de café con leche con un delicioso toque de chocolate puro como acentuador del sabor.",
    image: "ChocoLatte.png"
  },
  {
    title: "K Puccino",
    description: "Bebida de café con leche, bajo en grasa para los amantes de los cappuccinos.",
    image: "Kpuccino.png"
  },
  {
    title: "Mistik Ccinno",
    description: "Bebida de café con leche natural de almendras, panela y un desafiante toque de canela.",
    image: "MistikCcino.png"
  },
  {
    title: "Skimmed Milk",
    description: "Bebida de café con leche descremada, para disfrutar sin preocupaciones.",
    image: "SkimmedMilk.png"
  }]);

</script>

<template>
  <div class="text-center grid grid-cols-12 max-w-screen-2xl mx-auto">
    <div class="col-span-10 col-start-2 inline-flex items-center justify-center w-full">
      <hr class="w-full h-px my-8 bg-[#ff5192] border-0">
      <span class="absolute px-6 text-gray-900 bg-white text-3xl font-bold text-end
      ">¡Disfrúta de la variedad y frescura!</span>
    </div>

    <div class="col-span-10 col-start-2 mt-16">
      <swiper-container autoplay-delay="3000" autoplay-pause-on-mouse-enter="true"
                        centeredSlides="true" coverflow-effect-rotate="0"
                        coverflow-effect-scale="0.75" coverflow-effect-slide-shadows="false"
                        effect="coverflow"
                        loop="true"
                        navigation="true"
                        slides-per-view="3"
                        speed="1000"
                        breakpoints>
        <swiper-slide v-for="(slide, index) in slides" slidesPerView="3">
          <Card :key="index"
                :description="slide.description"
                :image="slide.image"
                :title="slide.title"/>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style scoped>

</style>