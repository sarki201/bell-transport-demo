<script setup lang="ts">
import { RouterLink } from "vue-router";
import "primeicons/primeicons.css";
import { useModalStore } from "@/stores/modal";
import MaxWidthWrapper from "./MaxWidthWrapper.vue";

const store = useModalStore();
</script>
<template>
  <header
    class="py-2 bg-white/75 backdrop-blur-lg sticky z-10 top-0 border-b border-solid border-gray-300"
  >
    <MaxWidthWrapper className="flex items-center lg:justify-between gap-10">
      <button @click="store.openAside" class="lg:hidden">
        <i class="pi pi-align-justify text-xl md:text-3xl"></i>
      </button>
      <img alt="Bell logo" class="w-15 h-15" src="@/assets/LOGO.svg" width="50" height="50" />
      <nav class="items-center justify-between gap-3 font-semibold hidden lg:flex">
        <RouterLink
          class="bg-transparent hover:bg-slate-200 px-3 py-1.5 rounded-md transition-all duration-200 text-slate-800"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="bg-transparent hover:bg-slate-200 px-3 py-1.5 rounded-md transition-all duration-200 text-slate-800"
          to="/about"
          >My Bookings</RouterLink
        >
        <RouterLink
          class="bg-transparent hover:bg-slate-200 px-3 py-1.5 rounded-md transition-all duration-200 text-slate-800"
          to="/about"
          >Contact</RouterLink
        >
        <RouterLink
          class="bg-transparent hover:bg-slate-200 px-3 py-1.5 rounded-md transition-all duration-200 text-slate-800"
          to="/about"
          >About</RouterLink
        >
        <RouterLink
          class="bg-transparent hover:bg-slate-200 px-3 py-1.5 rounded-md transition-all duration-200 text-slate-800"
          to="/about"
          >Login</RouterLink
        >
      </nav>
    </MaxWidthWrapper>
  </header>
</template>
