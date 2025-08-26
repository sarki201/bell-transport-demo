import { ref } from "vue";
import { defineStore } from "pinia";

type Booking = {
  departure: string | null;
  destination: string | null;
  departureDate: string | null;
  returnDate: string | null;
  isRoundTrip: boolean;
  tripType: string | null;
};

export const useBookingStore = defineStore("booking", () => {
  const state = ref<Booking>({
    departure: null,
    destination: null,
    departureDate: null,
    returnDate: null,
    isRoundTrip: false,
    tripType: null,
  });

  function setBooking(booking: Booking) {
    state.value = { ...booking };
  }

  return {
    state,
    setBooking,
  };
});
