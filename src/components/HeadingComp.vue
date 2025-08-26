<script setup lang="ts">
import MaxWidthWrapper from "./MaxWidthWrapper.vue";

defineProps({
  className: String,
  heading: String,
  isCenter: Boolean,
});
</script>

<template>
  <MaxWidthWrapper
    :className="`${className} mb-8 flex ${isCenter ? 'justify-center' : 'justify-start'}`"
  >
    <h2 class="text-2xl xl:text-3xl font-bold text-[rgb(13,26,79)] relative">
      {{ heading }}
      <div class="absolute w-10 h-0.5 md:h-1 top-7 lg:top-9 bg-orange-500"></div>
    </h2>
  </MaxWidthWrapper>
</template>
