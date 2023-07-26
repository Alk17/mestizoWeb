<script setup>
defineProps(['href', 'label']);
</script>

<template>
  <li>
    <a :href="href">
      <p class="py-1.5">
        {{ label }}
      </p>
    </a>
  </li>
</template>
