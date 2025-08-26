<script setup lang="ts">
import "primeicons/primeicons.css";
import MaxWidthWrapper from "./MaxWidthWrapper.vue";
</script>
<template>
  <footer class="bg-[url(@/assets/bg_image.svg)] bg-cover bg-no-repeat bg-center text-white py-14">
    <MaxWidthWrapper className="flex items-start justify-between flex-wrap gap-6">
      <section class="w-full sm:w-auto">
        <img src="@/assets/logo_light.png" class="mb-6" alt="" />
        <p class="text-sm">Bell transport &copy; 2025</p>
      </section>
      <section class="w-full sm:w-auto">
        <h4 class="text-lg font-bold mb-4">Company</h4>
        <ul>
          <li class="mb-3">About us</li>
          <li class="mb-3">Terms of use</li>
          <li class="mb-3">Privacy policy</li>
          <li class="mb-3">FAQs</li>
        </ul>
      </section>
      <section class="w-full sm:w-auto">
        <h4 class="text-lg font-bold mb-4">Need help?</h4>
        <p class="mb-3">contact@belltransport.ng</p>
        <p class="mb-6">07049355500</p>
        <h4 class="text-lg font-bold mb-4">Socials</h4>
        <p class="flex items-center gap-3 mb-3">
          <img src="@/assets/instagram.svg" alt="" /> Instagram
        </p>
        <p class="flex items-center gap-3 mb-3"><img src="@/assets/x.svg" alt="" /> X (Twitter)</p>
      </section>
      <section class="w-full text-center border-t border-solid border-white pt-6">
        Copyright © Bell Transport 2025. All rights reserved. Built by Seneca Technologies .
      </section></MaxWidthWrapper
    >
  </footer>
</template>
