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
    description: "Bebida  de café con leche y un toque de chocolate para endulzar tu paladar.",
    image: "ChocoLatte.png"
  },
  {
    title: "K Puccino",
    description: "Bebida  de café con leche y un toque de chocolate para endulzar tu paladar.",
    image: "Kpuccino.png"
  },
  {
    title: "Mistik Ccinno",
    description: "Bebida  de café con leche y un toque de chocolate para endulzar tu paladar.",
    image: "MistikCcino.png"
  },
  {
    title: "Skimmed Milk",
    description: "Bebida  de café con leche y un toque de chocolate para endulzar tu paladar.",
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
  <div class="text-center">
    <h1 class="text-2xl font-bold">¡Disfrúta de la variedad y frescura!</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 mt-12">
      <div v-for="(slide, index) in slides" :class="{
       'order-1 transition -translate-x-full': getPosition(index) === 'L',
       'order-2 transition -translate-x-full': getPosition(index) === 'C',
       'order-3 ': getPosition(index) === 'R',
       'hidden': getPosition(index) == null,
    }">
        <Card :key="index"
              :class="{
              '': true,
              'scale-110 z-10': activeSlide === index,
              'scale-100 z-0': activeSlide !== index,
              'translate-x-full': slide
            }"
              :description="slide.description"
              :image="slide.image"
              :title="slide.title"
              class="transition-all duration-700"
        />
      </div>


    </div>
      <p class="mt-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare euismod luctus. Ut suscipit, ligula
        quis mollis semper, purus nisi elementum erat, quis eleifend risus magna sit amet felis. Morbi nec velit sed
        magna vulputate eleifend. Duis tempus nibh vitae nisi sollicitudin tempor. Morbi condimentum aliquet urna, a
        congue urna vestibulum vel
      </p>
  </div>
</template>

<style scoped>

</style>o