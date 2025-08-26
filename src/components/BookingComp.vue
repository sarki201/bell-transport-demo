<script setup lang="ts">
const props = defineProps({
  isHome: Boolean,
});

import "primeicons/primeicons.css";
import "@vuepic/vue-datepicker/dist/main.css";
import { useModalStore } from "@/stores/modal";
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import MaxWidthWrapper from "./MaxWidthWrapper.vue";
import { useBookingStore } from "@/stores/booking";
import router from "@/router";

const store = useModalStore();
const bookingStore = useBookingStore();
type Destination = {
  name: string;
  sub: string;
  code: string;
};

type Trip = "One-way" | "Round-trip" | "Hire One-way" | "Hire Round-trip";

const destinationList: Destination[] = [
  { name: "Abuja", sub: "Kaduna route", code: "ABJK" },
  { name: "Abuja", sub: "Jos route", code: "ABJJ" },
  { name: "Kano", sub: "Kundila", code: "KANK" },
  { name: "Kaduna", sub: "Kawo", code: "DKAK" },
  { name: "Maiduguri", sub: "BOGIS", code: "MAGB" },
  { name: "Jos", sub: "Narakuta", code: "JOSN" },
];

const departureDate = ref<string | null>(bookingStore.state.departureDate);
const destinationDate = ref<string | null>(bookingStore.state.returnDate);
const tripList: Trip[] = ["One-way", "Round-trip", "Hire One-way", "Hire Round-trip"];

const isRoundTrip = ref<boolean>(bookingStore.state.isRoundTrip || false);

const depatureTerminal = ref<Destination | null>(
  destinationList.find((des) => des.code === bookingStore.state.departure) || null
);
const destinationTerminal = ref<Destination | null>(
  destinationList.find((des) => des.code === bookingStore.state.destination) || null
);
const tripType = ref<Trip>(
  tripList.find((trip) => trip === bookingStore.state.tripType) || tripList[0]
);

const today = new Date();

let day: number | string = today.getDate();
let month: number | string = today.getMonth() + 1;
const year = today.getFullYear();

if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}
const dateToday = `${day}/${month}/${year}`;

const setDepature = (code: string) => {
  depatureTerminal.value = destinationList.find((des) => code === des.code) || null;
  store.closeDeparture();
};
const setDestination = (code: string) => {
  destinationTerminal.value = destinationList.find((des) => code === des.code) || null;
  store.closeDestination();
};
const setTrip = (trip: Trip) => {
  tripType.value = trip;
  store.closeTrip();
  isRoundTrip.value = trip === "Round-trip" || trip === "Hire Round-trip";
};

const handleSearch = () => {
  if (!depatureTerminal.value || !destinationTerminal.value || !departureDate.value) {
    return alert("fill in all the fields!!");
  }

  bookingStore.setBooking({
    departure: depatureTerminal.value?.code || null,
    destination: destinationTerminal.value?.code || null,
    departureDate: departureDate.value,
    returnDate: destinationDate.value,
    isRoundTrip: isRoundTrip.value,
    tripType: tripType.value,
  });
  if (props.isHome) {
    router.push("/booking");
  }
};
</script>
<template>
  <section
    class="bg-[url(@/assets/hero.jpg)] bg-cover bg-no-repeat w-full min-h-40 h-120 bg-center mb-58 sm:mb-18 lg:mb-30"
  >
    <MaxWidthWrapper className="flex items-end justify-center sm:pb-10 relative sm:static">
      <div
        class="w-[95%] sm:w-full absolute -bottom-40 sm:static mx-auto sm:mx-0 bg-white/95 backdrop-f rounded-lg p-4 flex flex-col sm:flex-row items-stretch gap-x-2 gap-y-4 border border-solid border-gray-300 flex-wrap lg:flex-nowrap"
      >
        <div class="relative w-full sm:w-[calc(50%-1rem)] lg:flex-3">
          <div
            @click="store.openDeparture"
            :class="`border border-solid border-blue-800 h-full ${
              depatureTerminal == null ? 'text-gray-700/65' : ''
            } rounded-lg px-2 py-4 cursor-pointer`"
          >
            {{ depatureTerminal?.name ?? "Coming from" }}
            <span class="text-xs text-gray-600">{{ depatureTerminal?.sub }}</span>
          </div>

          <div
            :class="`absolute w-full min-w-40 bg-white bottom-0 py-4 border border-solid border-gray-300 transition-all duration-300 translate-y-full shadow-xl rounded-md overflow-hidden z-30 ${
              store.state.modals.isDepartureOpen ? '' : 'pointer-events-none opacity-0'
            }`"
          >
            <ul>
              <li
                class="px-4 py-2 cursor-pointer bg-transparent hover:bg-gray-100"
                v-for="(des, index) in destinationList.filter(
                  (des) => des.name !== destinationTerminal?.name
                )"
                :key="index"
                @click="() => setDepature(des.code)"
              >
                {{ des.name }}, <span class="text-xs text-gray-600">{{ des.sub }}</span>
              </li>
            </ul>
          </div>
        </div>
        <i class="pi pi-arrow-right-arrow-left text-blue-800 flex-1 lg:flex-0 self-center"></i>
        <div class="relative w-full sm:w-[calc(50%-1rem)] lg:flex-3">
          <div
            @click="store.openDestination"
            :class="`border border-solid border-blue-800 h-full ${
              destinationTerminal == null ? 'text-gray-700/65' : ''
            } rounded-lg px-2 py-4 cursor-pointer`"
          >
            {{ destinationTerminal?.name ?? "Going to" }}
            <span class="text-xs text-gray-600">{{ destinationTerminal?.sub }}</span>
          </div>

          <div
            :class="`absolute w-full min-w-40 bg-white bottom-0 py-2 border border-solid border-gray-300 transition-all duration-300 translate-y-full shadow-xl rounded-md overflow-hidden z-30 ${
              store.state.modals.isDestinationOpen ? '' : 'pointer-events-none opacity-0'
            }`"
          >
            <ul>
              <li
                class="px-4 py-2 cursor-pointer bg-transparent hover:bg-gray-100"
                v-for="(des, index) in destinationList.filter(
                  (des) => des.name !== depatureTerminal?.name
                )"
                :key="index"
                @click="() => setDestination(des.code)"
              >
                {{ des.name }}, <span class="text-xs text-gray-600">{{ des.sub }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div :class="`w-full flex gap-2 ${isRoundTrip ? 'md:flex-5' : 'md:flex-2'}`">
          <div class="border border-solid border-blue-800 rounded-lg flex-1">
            <VueDatePicker
              v-model="departureDate"
              format="dd-MMM-yyy"
              :enableTimePicker="false"
              :minDate="dateToday"
              :ui="{
                input: 'bg-blue-400',
              }"
              placeholder="Departure date"
            ></VueDatePicker>
          </div>
          <div v-if="isRoundTrip" class="border border-solid border-blue-800 rounded-lg flex-1">
            <VueDatePicker
              v-model="destinationDate"
              format="dd-MMM-yyyy"
              :minDate="dateToday"
              :enableTimePicker="false"
              :ui="{
                input: 'bg-blue-400',
              }"
              placeholder="Return date"
            ></VueDatePicker>
          </div>
        </div>
        <div :class="`relative w-full ${isRoundTrip ? 'md:flex-3' : 'md:flex-2'}`">
          <div
            @click="store.openTrip"
            class="border border-solid border-blue-800 rounded-lg px-2 py-4 cursor-pointer h-full"
          >
            {{ tripType }}
          </div>
          <!-- <div
              class="absolute w-full min-w-40 bg-white bottom-0 translate-y-full shadow-xl rounded-md overflow-hidden z-40"
            > -->
          <div
            :class="`absolute w-full min-w-40 bg-white bottom-0 translate-y-full py-2 border border-solid border-gray-300 transition-all duration-300 shadow-xl rounded-md overflow-hidden z-30 ${
              store.state.modals.isTripOpen ? '' : 'pointer-events-none opacity-0'
            }`"
          >
            <ul>
              <li
                class="px-4 py-2 cursor-pointer bg-transparent hover:bg-gray-100"
                v-for="(trip, index) in tripList.slice(0, 2)"
                :key="index"
                @click="() => setTrip(trip)"
              >
                {{ trip }}
              </li>
              <li class="px-4 mt-2 text-gray-600 text-xs">HIRE A VEHICLE</li>
              <li
                class="px-4 py-2 cursor-pointer bg-transparent hover:bg-gray-100"
                v-for="(trip, index) in tripList.slice(2)"
                :key="index"
                @click="() => setTrip(trip)"
              >
                {{ trip }}
              </li>
            </ul>
          </div>
        </div>
        <button
          @click="handleSearch"
          class="bg-[#0d1a4f] text-white rounded-lg p-4 md:flex-2 w-full font-semibold cursor-pointer"
        >
          Search
        </button>
      </div>
    </MaxWidthWrapper>
  </section>
</template>
<style>
/* Target the default input field */
.dp__input {
  width: 100%;
  padding: 16px 8px;
  border-radius: 0px;
  border: none;
  background-color: transparent;
  color: #333;
  font-size: 14px;
  outline: none;
}
.dp__input::placeholder {
  color: #333;
}

.dp__input:focus {
  border: none;
  box-shadow: none;
}

.dp__input_icon {
  display: none;
}
</style>
