<script setup lang="ts">
import "primeicons/primeicons.css";
import BookingComp from "@/components/BookingComp.vue";
import MaxWidthWrapper from "@/components/MaxWidthWrapper.vue";
import OverlayComp from "@/components/OverlayComp.vue";
import TripLoaderComp from "@/components/TripLoaderComp.vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { useBookingStore } from "@/stores/booking";
import router from "@/router";

const bookingStore = useBookingStore();

if (
  !bookingStore.state.departure ||
  !bookingStore.state.destination ||
  !bookingStore.state.departureDate
) {
  router.push("/");
}

type Ride = {
  name: string;
  class: string;
  time: string;
  price: string;
  img: string;
  link: string;
};
type Destination = {
  name: string;
  sub: string;
  code: string;
};

const rideList: Ride[] = [
  {
    name: "Toyota avensis",
    class: "Economy",
    time: "3:00 AM",
    price: "40,000",
    img: "/car-model.jpeg",
    link: "/booking/sixseats",
  },
  {
    name: "Toyota sienna",
    class: "Business",
    time: "3:00 AM",
    price: "50,000",
    img: "/five-seater.jpeg",
    link: "/booking/fiveseats",
  },
];

const destinationList: Destination[] = [
  { name: "Abuja", sub: "Kaduna route", code: "ABJK" },
  { name: "Abuja", sub: "Jos route", code: "ABJJ" },
  { name: "Kano", sub: "Kundila", code: "KANK" },
  { name: "Kaduna", sub: "Kawo", code: "DKAK" },
  { name: "Maiduguri", sub: "BOGIS", code: "MAGB" },
  { name: "Jos", sub: "Narakuta", code: "JOSN" },
];

const rides = ref<Ride[] | null>(null);

const setTripList = async () => {
  rides.value = null;

  setTimeout(() => {
    rides.value = rideList;
  }, 5000);
};

onMounted(async () => {
  setTripList();
});
</script>
<template>
  <header
    class="bg-white/75 backdrop-blur-lg py-4 sticky z-10 top-0 border-b border-solid border-gray-300"
  >
    <MaxWidthWrapper className="flex items-center gap-4">
      <RouterLink
        to="/"
        class="bg-transparent hover:bg-gray-300 transition-all duration-300 px-4 py-2 rounded-lg cursor-pointer"
      >
        <i class="pi pi-arrow-left"></i>
      </RouterLink>
      <div class="w-[1px] h-10 bg-gray-700/50"></div>
    </MaxWidthWrapper>
  </header>
  <main>
    <BookingComp :isHome="false" />
    <section class="lg:-mt-20 mb-30">
      <MaxWidthWrapper className="">
        <TripLoaderComp
          v-if="
            rides === null ||
            !bookingStore.state.departure ||
            !bookingStore.state.destination ||
            !bookingStore.state.departureDate
          "
        />
        <div
          v-else
          v-for="(ride, index) in rides"
          :key="index"
          class="bg-[#eee] drop-shadow-lg flex flex-col md:flex-row justify-between items-start mb-6 md:items-center gap-3 p-4 sm:p-15 md:p-4 rounded-lg border border-solid border-gray-300 mx-auto max-w-250"
        >
          <div class="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
            <img
              :src="ride.img"
              alt=""
              class="w-35 sm:w-50 md:w-26 lg:w-30 object-cover rounded-md mb-3"
            />
            <div class="w-30 md:w-auto">
              <h4 class="text-[#0d1a4f] mb-3">{{ ride.class }} class</h4>
              <h5 class="font-bold text-gray-800 mb-3">{{ ride.name }}</h5>
            </div>
          </div>
          <div
            class="mb-2 lg:mb-0 flex justify-between w-full md:w-auto md:flex-col lg:flex-row lg:self-start lg:mt-4 gap-3 lg:gap-6"
          >
            <div class="md:text-center">
              <p class="text-[#0d1a4f] text-sm">FROM</p>
              <p class="font-semibold">
                {{
                  destinationList.find((des) => des.code === bookingStore.state.departure)?.name
                }},
                <span class="text-xs text-gray-600 text-nowrap">{{
                  destinationList.find((des) => des.code === bookingStore.state.departure)?.sub
                }}</span>
              </p>
            </div>
            <div class="hidden sm:block md:hidden self-center">
              <i class="pi pi-arrow-right text-[#0d1a4f] font-bold text-[1.5rem]"></i>
            </div>
            <div class="w-30 md:w-auto md:text-center">
              <p class="text-[#0d1a4f] text-sm">TO</p>
              <p class="font-semibold">
                {{
                  destinationList.find((des) => des.code === bookingStore.state.destination)?.name
                }}
                <span class="text-xs text-gray-600 text-nowrap">{{
                  destinationList.find((des) => des.code === bookingStore.state.destination)?.sub
                }}</span>
              </p>
            </div>
          </div>
          <div
            class="mb-2 lg:mb-0 flex justify-between w-full md:w-auto md:flex-col lg:flex-row lg:self-start lg:mt-4 gap-3 lg:gap-6"
          >
            <div class="md:text-center">
              <p class="text-[#0d1a4f] text-sm">DATE</p>
              <p class="font-semibold">
                {{ String(bookingStore.state.departureDate).substring(4, 16) }}
              </p>
            </div>
            <div class="w-30 md:w-auto md:text-center">
              <p class="text-[#0d1a4f] text-sm">TIME</p>
              <p class="font-semibold text-nowrap">{{ ride.time }}</p>
            </div>
          </div>

          <div
            class="flex justify-between md:justify-start md:flex-col items-center gap-2 w-full md:w-auto"
          >
            <p class="font-bold text-xl text-[#0d1a4f]">₦{{ ride.price }}</p>
            <RouterLink
              :to="ride.link"
              class="w-30 md:w-auto px-4 py-2 bg-[#0d1a4f] text-white rounded-md font-semibold text-nowrap cursor-pointer"
            >
              View seats
            </RouterLink>
          </div>
        </div>
        <button @click="setTripList">click me</button>
      </MaxWidthWrapper>
    </section>
  </main>
  <OverlayComp />
</template>
