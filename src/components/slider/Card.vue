<script setup>
const props = defineProps({
  image: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true}
});
</script>

<template>
  <div class="grid mx-auto justify-items-center content-end relative h-[31rem] w-fit">
    <div class="absolute z-10">
      <img :src="'images/' + image" alt="Beverage" class="w-auto h-[22rem]" height="257.63" width="100">
    </div>

    <div class="grid content-end rounded-xl backdrop-blur-xl bg-white/30
    h-80 w-72 min-w-72 py-6 px-2 text-center">
      <h1 class="text-xl font-poppins pb-3 uppercase font-extrabold text-black/80">{{ title }}</h1>
      <p class="font-montserrat font-light text-sm ">{{ description }}</p>
    </div>
  </div>
</template>
