<script setup lang="ts">
defineProps({
  className: String,
});
</script>

<template>
  <div
    :class="`${className} h-full mx-auto w-full max-w-[1440px] min-w-[325px] px-2.5 md:px-16 lg:px-20`"
  >
    <slot></slot>
  </div>
</template>
