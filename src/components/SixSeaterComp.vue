<script setup lang="ts">
import { useBookingStore } from "@/stores/booking";
import { computed, ref } from "vue";

type Seat = {
  id: string;
  status: "Available" | "Booked" | "Selected";
};

type Destination = {
  name: string;
  sub: string;
  code: string;
};

const bookingStore = useBookingStore();

const destinationList: Destination[] = [
  { name: "Abuja", sub: "Kaduna route", code: "ABJK" },
  { name: "Abuja", sub: "Jos route", code: "ABJJ" },
  { name: "Kano", sub: "Kundila", code: "KANK" },
  { name: "Kaduna", sub: "Kawo", code: "DKAK" },
  { name: "Maiduguri", sub: "BOGIS", code: "MAGB" },
  { name: "Jos", sub: "Narakuta", code: "JOSN" },
];

const seatsList = ref<Seat[]>([
  { id: "S1", status: "Booked" },
  { id: "S2", status: "Booked" },
  { id: "S3", status: "Booked" },
  { id: "S4", status: "Available" },
  { id: "S5", status: "Available" },
  { id: "S6", status: "Available" },
]);

const handleSelectSeat = (id: string) => {
  const clickedSeat = seatsList.value.find((seat) => seat.id === id);
  const newSeatList = seatsList.value.filter((seat) => seat.id !== id);
  if (clickedSeat?.status === "Available") {
    clickedSeat.status = "Selected";
    seatsList.value = [...newSeatList, clickedSeat];
  } else if (clickedSeat?.status === "Selected") {
    clickedSeat.status = "Available";
    seatsList.value = [...newSeatList, clickedSeat];
  }
};

const findSeatStatus = (id: string) => {
  const selected = seatsList.value.find((seat) => seat.id === id);
  return selected?.status;
};

const total = computed(() => {
  const selectedSeats = seatsList.value.filter((seat) => seat.status === "Selected").length;
  if (selectedSeats === 1) {
    return "40,000";
  } else if (selectedSeats === 2) {
    return "80,000";
  } else if (selectedSeats === 3) {
    return "120,000";
  } else if (selectedSeats === 4) {
    return "160,000";
  } else if (selectedSeats === 5) {
    return "200,000";
  } else if (selectedSeats === 6) {
    return "240,000";
  }
  return "0";
});

const handleSubmit = () => {
  alert("The demonstration ends here!!!");
};
</script>

<template>
  <section class="lg:col-span-2 flex flex-col items-center w-full lg:w-auto">
    <h4 class="mb-6 font-bold text-[#0d1a4f] text-lg text-left w-full">Select seat(s)</h4>
    <article class="flex items-center gap-6 mb-10">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-white rounded-full border border-solid border-gray-300"></div>
        Available
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-gray-500 rounded-full border border-solid border-gray-300"></div>
        Sold
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-green-500 rounded-full border border-solid border-gray-300"></div>
        Selected
      </div>
    </article>
    <article
      class="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-10 border border-solid border-gray-600 px-5 pt-20 pb-10 rounded-t-[3rem] rounded-b-[1rem] min-w-55 mx-auto"
    >
      <div class="flex items-center justify-center">
        <img src="@/assets/driver.svg" alt="driver" />
      </div>
      <div
        @click="() => handleSelectSeat('S1')"
        :class="`${
          findSeatStatus('S1') === 'Available'
            ? 'bg-white text-green-500'
            : findSeatStatus('S1') === 'Selected'
            ? 'bg-green-500 text-white'
            : 'bg-gray-500 text-white'
        }  h-10 rounded-sm flex items-center justify-center font-bold border border-solid border-gray-300 cursor-pointer col-start-3`"
      >
        S1
      </div>
      <div
        @click="() => handleSelectSeat('S2')"
        :class="`${
          findSeatStatus('S2') === 'Available'
            ? 'bg-white text-green-500'
            : findSeatStatus('S2') === 'Selected'
            ? 'bg-green-500 text-white'
            : 'bg-gray-500 text-white'
        } h-10 rounded-sm flex items-center justify-center font-bold border border-solid border-gray-300 cursor-pointer`"
      >
        S2
      </div>
      <div
        @click="() => handleSelectSeat('S3')"
        :class="`${
          findSeatStatus('S3') === 'Available'
            ? 'bg-white text-green-500'
            : findSeatStatus('S3') === 'Selected'
            ? 'bg-green-500 text-white'
            : 'bg-gray-500 text-white'
        } h-10 rounded-sm flex items-center justify-center font-bold border border-solid border-gray-300 cursor-pointer`"
      >
        S3
      </div>
      <div
        @click="() => handleSelectSeat('S4')"
        :class="`${
          findSeatStatus('S4') === 'Available'
            ? 'bg-white text-green-500'
            : findSeatStatus('S4') === 'Selected'
            ? 'bg-green-500 text-white'
            : 'bg-gray-500 text-white'
        } h-10 rounded-sm flex items-center justify-center font-bold border border-solid border-gray-300 cursor-pointer`"
      >
        S4
      </div>
      <div
        @click="() => handleSelectSeat('S5')"
        :class="`${
          findSeatStatus('S5') === 'Available'
            ? 'bg-white text-green-500'
            : findSeatStatus('S5') === 'Selected'
            ? 'bg-green-500 text-white'
            : 'bg-gray-500 text-white'
        } h-10 rounded-sm flex items-center justify-center font-bold border border-solid border-gray-300 cursor-pointer`"
      >
        S5
      </div>
      <div
        @click="() => handleSelectSeat('S6')"
        :class="`${
          findSeatStatus('S6') === 'Available'
            ? 'bg-white text-green-500'
            : findSeatStatus('S6') === 'Selected'
            ? 'bg-green-500 text-white'
            : 'bg-gray-500 text-white'
        }  h-10 rounded-sm flex items-center justify-center font-bold border border-solid border-gray-300 cursor-pointer col-start-3`"
      >
        S6
      </div>
    </article>
  </section>
  <section class="lg:col-span-3">
    <div class="flex items-center justify-between w-full mb-6">
      <div class="">
        <p class="text-[#0d1a4f] text-sm">FROM</p>
        <p class="font-semibold">
          {{
            destinationList.find((des) => des.code === bookingStore.state.departure)?.name ||
            "Maiduguri"
          }},
          <span class="text-xs text-gray-600 text-nowrap">{{
            destinationList.find((des) => des.code === bookingStore.state.departure)?.sub || "BOGIS"
          }}</span>
        </p>
      </div>
      <div class="">
        <i class="pi pi-arrow-right text-[#0d1a4f] font-bold text-[1rem]"></i>
      </div>
      <div class="w-30">
        <p class="text-[#0d1a4f] text-sm">TO</p>
        <p class="font-semibold">
          {{
            destinationList.find((des) => des.code === bookingStore.state.destination)?.name ||
            "Abuja"
          }}
          <span class="text-xs text-gray-600 text-nowrap">{{
            destinationList.find((des) => des.code === bookingStore.state.destination)?.sub ||
            "Kaduna route"
          }}</span>
        </p>
      </div>
    </div>
    <h4 class="mb-6 font-bold text-[#0d1a4f] text-lg">Seat Details</h4>
    <article>
      <div
        class="flex items-center justify-between font-bold border-b border-solid border-gray-400 pb-4 mb-4 text-[#0d1a4f]"
      >
        <h5>Seat</h5>
        <h5>Price</h5>
      </div>
      <div
        v-for="(seat, index) in seatsList.filter((st) => st.status === 'Selected')"
        :key="index"
        class="flex items-center justify-between border-b border-solid border-gray-400 pb-4 mb-4 text-[#0d1a4f]"
      >
        <h5>{{ seat.id }}</h5>
        <h5>₦40,000</h5>
      </div>
      <div class="flex items-center justify-between font-bold pb-4 mb-4 text-[#0d1a4f]">
        <h5>Total</h5>
        <h5>₦{{ total }}</h5>
      </div>
    </article>
    <form @submit.prevent="handleSubmit">
      <div
        v-for="(seat, index) in seatsList.filter((st) => st.status === 'Selected')"
        :key="index"
        class="mb-3 pt-3 border-t border-solid border-gray-400"
      >
        <h5 class="text-lg text-[#0d1a4f] font-bold mb-4">Seat: {{ seat.id }}</h5>
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="font-semibold mb-1" for="">Full name</label>
            <input
              required
              class="w-full border border-solid border-gray-400 outline-none px-4 py-2 rounded-md"
              type="text"
              placeholder="e.g Umar Usman"
            />
          </div>
          <div>
            <label class="font-semibold mb-1" for="">Phone number</label>
            <input
              required
              class="w-full border border-solid border-gray-400 outline-none px-4 py-2 rounded-md"
              type="text"
              placeholder="e.g 08062094639"
            />
          </div>
          <div>
            <label class="font-semibold mb-1" for="">Email address</label>
            <input
              required
              class="w-full border border-solid border-gray-400 outline-none px-4 py-2 rounded-md"
              type="email"
              placeholder="e.g umarfrq65@gmail.com"
            />
          </div>
          <div>
            <label class="font-semibold mb-1 block" for="">Gender</label>

            <span class="mr-4">
              <input required type="radio" name="gender" value="male" /> Male
            </span>
            <span> <input required type="radio" name="gender" value="female" /> Female </span>
          </div>
          <h5 class="sm:col-span-2 text-[#0d1a4f] font-bold mt-4">Next of kin details</h5>
          <div>
            <label class="font-semibold mb-1" for="">Fullname</label>
            <input
              required
              class="w-full border border-solid border-gray-400 outline-none px-4 py-2 rounded-md"
              type="text"
              placeholder="e.g Umar Usman"
            />
          </div>
          <div>
            <label class="font-semibold mb-1" for="">Phone number</label>
            <input
              required
              class="w-full border border-solid border-gray-400 outline-none px-4 py-2 rounded-md"
              type="text"
              placeholder="e.g 08062094639"
            />
          </div>
        </div>
      </div>
      <button class="w-full py-2 font-bold bg-[#0d1a4f] text-white rounded-sm">Continue</button>
    </form>
  </section>
</template>
