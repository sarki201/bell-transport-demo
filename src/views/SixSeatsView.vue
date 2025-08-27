<script setup lang="ts">
import MaxWidthWrapper from "@/components/MaxWidthWrapper.vue";
import SixSeaterComp from "@/components/SixSeaterComp.vue";
</script>
<template>
  <header
    class="bg-white/75 backdrop-blur-lg py-4 sticky z-10 top-0 border-b border-solid border-gray-300"
  >
    <MaxWidthWrapper className="flex items-center gap-4">
      <RouterLink
        to="/booking"
        class="bg-transparent hover:bg-gray-300 transition-all duration-300 px-4 py-2 rounded-lg cursor-pointer"
      >
        <i class="pi pi-arrow-left"></i>
      </RouterLink>
      <div class="w-[1px] h-10 bg-gray-700/50"></div>
    </MaxWidthWrapper>
  </header>
  <main class="mt-10 mb-30">
    <MaxWidthWrapper className="grid lg:grid-cols-5 gap-8">
      <SixSeaterComp />
    </MaxWidthWrapper>
  </main>
</template>
