<script setup lang="ts">
const shimmer = "animate-pulse bg-gray-300";
</script>
<template>
  <div
    class="bg-[#eee] flex flex-col md:flex-row justify-between items-start mb-6 md:items-center gap-3 p-4 sm:p-15 md:p-4 rounded-lg border border-solid border-gray-300 mx-auto max-w-250"
  >
    <div class="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
      <div
        :class="`${shimmer} h-20 w-35 sm:w-50 sm:h-40 md:w-26 md:h-20 lg:w-30 lg:h-26 object-cover rounded-md mb-3`"
      ></div>
      <div class="w-30 md:w-auto">
        <div :class="`${shimmer} mb-3 h-4 w-27 rounded-sm`"></div>
        <div :class="`${shimmer} mb-3 h-4 w-30 rounded-sm`"></div>
      </div>
    </div>
    <div
      class="mb-2 lg:mb-0 flex justify-between w-full md:w-auto md:flex-col lg:flex-row lg:self-start lg:mt-4 gap-3 lg:gap-6"
    >
      <div class="md:flex md:flex-col md:items-center">
        <div :class="`${shimmer} h-4 w-14 rounded-sm mb-2`"></div>
        <div :class="`${shimmer} h-4 w-25 rounded-sm`"></div>
      </div>
      <div :class="`${shimmer} w-14 h-10 hidden sm:block md:hidden`"></div>
      <div class="w-30 md:w-auto md:flex md:flex-col md:items-center">
        <div :class="`${shimmer} h-4 w-14 rounded-sm mb-2`"></div>
        <div :class="`${shimmer} h-4 w-25 rounded-sm`"></div>
      </div>
    </div>
    <div
      class="mb-2 lg:mb-0 flex justify-between w-full md:w-auto md:flex-col lg:flex-row lg:self-start lg:mt-4 gap-3 lg:gap-6"
    >
      <div class="md:flex md:flex-col md:items-center">
        <div :class="`${shimmer} h-4 w-14 rounded-sm mb-2`"></div>
        <div :class="`${shimmer} h-4 w-25 rounded-sm`"></div>
      </div>
      <div class="w-30 md:w-auto md:flex md:flex-col md:items-center">
        <div :class="`${shimmer} h-4 w-14 rounded-sm mb-2`"></div>
        <div :class="`${shimmer} h-4 w-25 rounded-sm`"></div>
      </div>
    </div>
    <div
      class="flex justify-between md:justify-start md:flex-col items-center gap-2 w-full md:w-auto"
    >
      <div :class="`${shimmer} h-6 w-20 rounded-sm`"></div>
      <div :class="`${shimmer} w-30 md:w-26 h-8 rounded-md`"></div>
    </div>
  </div>
  <div
    class="bg-[#eee] flex flex-col md:flex-row justify-between items-start mb-6 md:items-center gap-3 p-4 sm:p-15 md:p-4 rounded-lg border border-solid border-gray-300 mx-auto max-w-250"
  >
    <div class="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
      <div
        :class="`${shimmer} h-20 w-35 sm:w-50 sm:h-40 md:w-26 md:h-20 lg:w-30 lg:h-26 object-cover rounded-md mb-3`"
      ></div>
      <div class="w-30 md:w-auto">
        <div :class="`${shimmer} mb-3 h-4 w-27 rounded-sm`"></div>
        <div :class="`${shimmer} mb-3 h-4 w-30 rounded-sm`"></div>
      </div>
    </div>
    <div
      class="flex justify-between w-full md:w-auto md:flex-col lg:flex-row lg:self-start lg:mt-4 gap-3 lg:gap-6"
    >
      <div class="md:flex md:flex-col md:items-center">
        <div :class="`${shimmer} h-4 w-14 rounded-sm mb-2`"></div>
        <div :class="`${shimmer} h-4 w-25 rounded-sm`"></div>
      </div>
      <div :class="`${shimmer} w-14 h-10 hidden sm:block md:hidden`"></div>
      <div class="w-30 md:w-auto md:flex md:flex-col md:items-center">
        <div :class="`${shimmer} h-4 w-14 rounded-sm mb-2`"></div>
        <div :class="`${shimmer} h-4 w-25 rounded-sm`"></div>
      </div>
    </div>
    <div
      class="flex justify-between w-full md:w-auto md:flex-col lg:flex-row lg:self-start lg:mt-4 gap-3 lg:gap-6"
    >
      <div class="md:flex md:flex-col md:items-center">
        <div :class="`${shimmer} h-4 w-14 rounded-sm mb-2`"></div>
        <div :class="`${shimmer} h-4 w-25 rounded-sm`"></div>
      </div>
      <div class="w-30 md:w-auto md:flex md:flex-col md:items-center">
        <div :class="`${shimmer} h-4 w-14 rounded-sm mb-2`"></div>
        <div :class="`${shimmer} h-4 w-25 rounded-sm`"></div>
      </div>
    </div>

    <div
      class="flex justify-between md:justify-start md:flex-col items-center gap-2 w-full md:w-auto"
    >
      <div :class="`${shimmer} h-6 w-20 rounded-sm`"></div>
      <div :class="`${shimmer} w-30 md:w-26 h-8 rounded-md`"></div>
    </div>
  </div>
</template>
