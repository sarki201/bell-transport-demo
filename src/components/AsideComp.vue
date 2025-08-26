<script setup lang="ts">
import { RouterLink } from "vue-router";
import "primeicons/primeicons.css";
import { useModalStore } from "@/stores/modal";

const store = useModalStore();
</script>

<template>
  <aside
    :class="`lg:hidden fixed top-0 ${
      store.state.modals.isAsideOpen ? 'left-0' : '-left-90'
    } bottom-0 w-full max-w-90 bg-white/75 backdrop-blur-lg z-30 transition-all duration-500`"
  >
    <section class="pl-4 pr-8 sm:px-8 py-6 flex gap-6 items-center justify-between bg-gray-300/50">
      <button @click="store.closeAside" class="order-1 cursor-pointer" title="close">
        <i class="pi pi-times text-2xl text-[#0d1a4f]"></i>
      </button>
      <img src="@/assets/LOGO.svg" class="w-16 h-16" alt="" />
    </section>
    <section class="pl-4 pr-8 sm:px-8 py-8">
      <ul>
        <li>
          <RouterLink class="px-4 py-3 mb-1 flex items-center gap-3 bg-gray-300/50 rounded-md" to=""
            ><i class="pi pi-home"></i>Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="px-4 py-3 mb-1 flex items-center gap-3 bg-transparent hover:bg-gray-300/50 rounded-md transition-all duration-200"
            to=""
            ><i class="pi pi-ticket"></i>My Bookings</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="px-4 py-3 mb-1 flex items-center gap-3 bg-transparent hover:bg-gray-300/50 rounded-md transition-all duration-200"
            to=""
            ><i class="pi pi-question-circle"></i>About Us</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="px-4 py-3 mb-1 flex items-center gap-3 bg-transparent hover:bg-gray-300/50 rounded-md transition-all duration-200"
            to=""
            ><i class="pi pi-address-book"></i>Contact Us</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="px-4 py-3 mb-1 flex items-center gap-3 bg-transparent hover:bg-gray-300/50 rounded-md transition-all duration-200"
            to=""
            ><i class="pi pi-shield"></i>Privacy Policy</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="px-4 py-3 mb-1 flex items-center gap-3 bg-transparent hover:bg-gray-300/50 rounded-md transition-all duration-200"
            to=""
            ><i class="pi pi-map"></i>Terms and Conditions</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="px-4 py-3 mb-1 flex items-center gap-3 bg-transparent hover:bg-gray-300/50 rounded-md transition-all duration-200"
            to=""
            ><i class="pi pi-sign-in"></i>Log In</RouterLink
          >
        </li>
      </ul>
    </section>
  </aside>
</template>
