<script setup>
defineProps({
  text: String,
  positionClasses: String
})
</script>

<template>
  <div class="grid grid-cols-12 max-w-screen-2xl mx-auto">
    <p :class="positionClasses"
       class="backdrop-blur-lg bg-white/60 text-black px-6 md:px-10 py-4 md:py-6 rounded-xl drop-shadow-2xl shadow-2xl">
      {{ text }}
    </p>
  </div>
</template>
