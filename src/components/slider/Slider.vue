<script setup>
import Card from "./Card.vue";
import {onMounted, ref} from "vue";

let interval = null;
const activeSlide = ref(1);
let slide = false;

const slides = [{
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
  }]

onMounted(() => {
  switchInterval();
})

function next() {
  if (activeSlide.value < slides.length - 1)
    activeSlide.value++;
  else
    activeSlide.value = 0;
}

function prev() {
  activeSlide.value--;
}

function switchInterval() {
  if (interval !== null) clearInterval(interval);
  interval = setInterval(() => {
    next();
    slide = true;
  }, 2000)
}

function getPosition(index) {
  if (activeSlide.value === index)
    return 'C';
  if (activeSlide.value - 1 === index || (activeSlide.value === 0 && index === slides.length - 1))
    return 'L';
  if (activeSlide.value + 1 === index || (activeSlide.value === slides.length - 1 && index === 0))
    return 'R';
  return null;
}
</script>

<template>
  <div class="text-center grid grid-cols-12">
    <div class="col-span-10 col-start-2 inline-flex items-center justify-center w-full">
      <hr class="w-full h-px my-8 bg-[#ff5192] border-0">
      <span class="absolute px-6 text-gray-900 bg-white text-3xl font-bold text-end
      ">¡Disfrúta de la variedad y frescura!</span>
    </div>

    <div class="col-span-10 col-start-2">

    <div class="grid grid-cols-1 md:grid-cols-3 mt-20">
      <div v-for="(slide, index) in slides" :class="{
       'order-1': getPosition(index) === 'L',
       'order-2': getPosition(index) === 'C',
       'order-3': getPosition(index) === 'R',
       'hidden ': getPosition(index) == null,
        }">
        <Card :key="index"
              :class="{
              'scale-110 z-10': activeSlide === index,
              'scale-100 z-0': activeSlide !== index,
              '': slide
            }"
              :description="slide.description"
              :image="slide.image"
              :title="slide.title"
              class=""
        />
    </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>