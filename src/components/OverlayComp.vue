<script setup lang="ts">
import "primeicons/primeicons.css";
import { useModalStore } from "@/stores/modal";

const store = useModalStore();
</script>

<template>
  <div
    @click="store.closeAllModals"
    :class="`fixed left-0 right-0 top-0 bottom-0 ${
      store.state.isOverlayActive ? '' : 'pointer-events-none'
    } ${
      store.state.isOverlayActive && !store.state.isOverlayLight ? 'bg-black/30' : 'bg-transparent'
    } z-20`"
  ></div>
</template>
