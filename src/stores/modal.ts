import { ref } from "vue";
import { defineStore } from "pinia";

type Modals = {
  modals: {
    isAsideOpen: boolean;
    isDepartureOpen: boolean;
    isDestinationOpen: boolean;
    isTripOpen: boolean;
  };
  isOverlayActive: boolean;
  isOverlayLight: boolean;
};

export const useModalStore = defineStore("modal", () => {
  const state = ref<Modals>({
    modals: {
      isAsideOpen: false,
      isDepartureOpen: false,
      isDestinationOpen: false,
      isTripOpen: false,
    },
    isOverlayActive: false,
    isOverlayLight: false,
  });

  function openAside() {
    state.value.modals.isAsideOpen = true;
    state.value.isOverlayActive = true;
    state.value.isOverlayLight = false;
  }
  function closeAside() {
    state.value.modals.isAsideOpen = false;
    state.value.isOverlayActive = false;
  }
  function openDeparture() {
    state.value.modals.isDepartureOpen = true;
    state.value.isOverlayActive = true;
    state.value.isOverlayLight = true;
  }
  function closeDeparture() {
    state.value.modals.isDepartureOpen = false;
    state.value.isOverlayActive = false;
  }
  function openDestination() {
    state.value.modals.isDestinationOpen = true;
    state.value.isOverlayActive = true;
    state.value.isOverlayLight = true;
  }
  function closeDestination() {
    state.value.modals.isDestinationOpen = false;
    state.value.isOverlayActive = false;
  }
  function openTrip() {
    state.value.modals.isTripOpen = true;
    state.value.isOverlayActive = true;
    state.value.isOverlayLight = true;
  }
  function closeTrip() {
    state.value.modals.isTripOpen = false;
    state.value.isOverlayActive = false;
  }
  function closeAllModals() {
    Object.keys(state.value.modals).forEach((key) => {
      state.value.modals[key as keyof typeof state.value.modals] = false;
    });
    state.value.isOverlayActive = false;
  }

  return {
    state,
    openAside,
    closeAside,
    openDeparture,
    closeDeparture,
    openDestination,
    closeDestination,
    openTrip,
    closeTrip,
    closeAllModals,
  };
});
