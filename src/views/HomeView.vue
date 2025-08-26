<script setup lang="ts">
import "primeicons/primeicons.css";
import "@vuepic/vue-datepicker/dist/main.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper.vue";
import HeadingComp from "@/components/HeadingComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import AsideComp from "@/components/AsideComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import OverlayComp from "@/components/OverlayComp.vue";
import BookingComp from "@/components/BookingComp.vue";
</script>

<template>
  <HeaderComp />
  <AsideComp />
  <main class="mt-8">
    <section>
      <HeadingComp
        className=""
        heading="Welcome to Bell Transport Services, let's book your next trip!"
        :isCenter="false"
      />
    </section>
    <BookingComp :isHome="true" />
    <section class="mb-30">
      <HeadingComp heading="Simple booking process" className="" :isCenter="true" />
      <p class="text-center text-[#0d1a4f] mb-20">
        Experience hassle-free booking with our streamlined and efficient process.
      </p>
      <MaxWidthWrapper
        className="flex items-center justify-between gap-6 lg:gap-x-20 xl:gap-6 flex-col lg:justify-center lg:flex-wrap lg:flex-row"
      >
        <div
          class="flex-1 lg:min-w-90 flex items-center justify-center flex-col max-w-100 gap-6 bg-white border border-solid border-blue-400 rounded-[5rem] lg:rounded-full px-10 lg:px-20 py-10 lg:py-20"
        >
          <img src="@/assets/booking_icon1.png" class="w-20 h-20 lg:w-auto lg:h-auto" alt="" />
          <h3 class="font-bold text-xl text-center">Search for trips</h3>
          <p class="text-center">
            Explore our extensive list of destinations to find your preferred destination.
          </p>
        </div>
        <div
          class="flex-1 lg:min-w-90 flex items-center justify-center flex-col max-w-100 gap-6 bg-white border border-solid border-green-400 rounded-[5rem] lg:rounded-full px-10 lg:px-20 py-10 lg:py-20"
        >
          <img src="@/assets/booking_icon2.png" class="w-20 h-20 lg:w-auto lg:h-auto" alt="" />
          <h3 class="font-bold text-xl text-center">Select destination</h3>
          <p class="text-center">
            Choose from a wide range of destinations to create your ideal travel experience.
          </p>
        </div>
        <div
          class="flex-1 lg:min-w-90 flex items-center justify-center flex-col max-w-100 gap-6 bg-white border border-solid border-yellow-400 rounded-[5rem] lg:rounded-full px-10 lg:px-20 py-10 lg:py-20"
        >
          <img src="@/assets/booking_icon3.png" class="w-20 h-20 lg:w-auto lg:h-auto" alt="" />
          <h3 class="font-bold text-xl text-center">Effort less booking</h3>
          <p class="text-center">
            Enjoy a seamless and speedy booking process for a stress-free journey.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
    <section class="mb-20 lg:mb-30">
      <HeadingComp heading="Our top travel destinations" className="" :isCenter="true" />
      <MaxWidthWrapper className="lg:mt-20">
        <article class="flex items-center flex-col lg:flex-row gap-20">
          <div
            class="grid grid-cols-2 grid-rows-2 rounded-4xl overflow-hidden flex-3 lg:order-1 max-w-80 lg:max-w-none"
          >
            <img src="@/assets/kano.png" class="w-full" alt="" />
            <img src="@/assets/abuja.png" class="w-full" alt="" />
            <img src="@/assets/maiduguri.png" class="w-full" alt="" />
            <img src="@/assets/kaduna.png" class="w-full" alt="" />
          </div>
          <div class="flex-5 self-start lg:self-auto">
            <div class="max-w-160 mb-10 lg:mb-6">
              <div
                class="bg-orange-500 text-white font-bold inline-block px-3 py-1 rounded-full mb-1"
              >
                Kano
              </div>
              <h2 class="font-bold text-[#0d1a4f] text-xl mb-2">Centre of commerce</h2>
              <h4 class="text-[#0d1a4f] text-lg">
                Explore the historic city of Kano, known for its ancient walls, bustling markets,
                and traditional craftsmanship.
              </h4>
            </div>
            <div class="max-w-160 mb-10 lg:mb-6">
              <div
                class="bg-green-600 text-white font-bold inline-block px-3 py-1 rounded-full mb-1"
              >
                Abuja
              </div>
              <h2 class="font-bold text-[#0d1a4f] text-xl">Unity in diversity</h2>
              <h4 class="text-[#0d1a4f] text-lg">
                Discover the vibrant capital city of Nigeria with its rich cultural heritage and
                modern allure in Abuja.
              </h4>
            </div>
            <div class="max-w-160 mb-10 lg:mb-6">
              <div
                class="bg-yellow-500 text-white font-bold inline-block px-3 py-1 rounded-full mb-1"
              >
                Maiduguri
              </div>
              <h2 class="font-bold text-[#0d1a4f] text-xl">Home of peace</h2>
              <h4 class="text-[#0d1a4f] text-lg">
                Embark on an adventure to Maiduguri, where history intertwines with resilience,
                offering unique cultural experiences.
              </h4>
            </div>
            <div class="max-w-160 mb-10 lg:mb-6">
              <div
                class="bg-blue-400 text-white font-bold inline-block px-3 py-1 rounded-full mb-1"
              >
                Kano
              </div>
              <h2 class="font-bold text-[#0d1a4f] text-xl">Centre of learning</h2>
              <h4 class="text-[#0d1a4f] text-lg">
                Experience the dynamic city of Kaduna, blending historical landmarks with
                contemporary attractions and natural beauty.
              </h4>
            </div>
          </div>
        </article>
      </MaxWidthWrapper>
    </section>
    <section class="mb-30 lg:mb-60">
      <MaxWidthWrapper className="">
        <article
          class="lg:border border-solid border-gray-300/50 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0"
        >
          <div class="lg:p-6 lg:border-r border-solid border-gray-300/50">
            <h2 class="text-2xl xl:text-3xl font-bold text-[rgb(13,26,79)] relative">
              Why travel with us?
              <div class="absolute w-8 lg:w-10 h-0.5 md:h-1 top-7 lg:top-9 bg-orange-500"></div>
            </h2>
            <p class="mb-10 px-2.5">
              Discover why we're the preferred choice for your travel needs and why your journey is
              in good hands.
            </p>
            <img src="@/assets/travalQuestionMark.png" class="block mx-auto" alt="" />
          </div>
          <div class="grid grid-cols-1 lg:grid-rows-6">
            <div
              class="flex items-center gap-4 lg:pl-8 lg:pr-16 py-4.5 lg:py-3 lg:border-b border-solid border-gray-300/50"
            >
              <img src="@/assets/travel_icon1.png" alt="" />
              <div>
                <h2 class="font-bold text-xl mb-1">Affordable Prices</h2>
                <h4 class="text-base">
                  Our fares are budget-friendly, ensuring you travel in comfort without breaking the
                  bank.
                </h4>
              </div>
            </div>
            <div
              class="flex items-center gap-4 lg:pl-8 lg:pr-16 py-4.5 lg:py-3 lg:border-b border-solid border-gray-300/50"
            >
              <img src="@/assets/travel_icon2.png" alt="" />
              <div>
                <h2 class="font-bold text-xl mb-1">Flexible Rescheduling</h2>
                <h4 class="text-base">
                  Need to change your plans? It's hassle-free with just a few simple steps. Terms
                  and conditions apply.
                </h4>
              </div>
            </div>
            <div
              class="flex items-center gap-4 lg:pl-8 lg:pr-16 py-4.5 lg:py-3 lg:border-b border-solid border-gray-300/50"
            >
              <img src="@/assets/travel_icon3.png" alt="" />
              <div>
                <h2 class="font-bold text-xl mb-1">Transparent Charges</h2>
                <h4 class="text-base">you see is what you pay - no hidden fees, ever.</h4>
              </div>
            </div>
            <div
              class="flex items-center gap-4 lg:pl-8 lg:pr-16 py-4.5 lg:py-3 lg:border-b border-solid border-gray-300/50"
            >
              <img src="@/assets/travel_icon4.png" alt="" />
              <div>
                <h2 class="font-bold text-xl mb-1">Refer & Earn</h2>
                <h4 class="text-base">
                  Refer & Earn Share the love! Refer friends and earn rewards for each successful
                  referral.
                </h4>
              </div>
            </div>
            <div
              class="flex items-center gap-4 lg:pl-8 lg:pr-16 py-4.5 lg:py-3 lg:border-b border-solid border-gray-300/50"
            >
              <img src="@/assets/travel_icon5.png" alt="" />
              <div>
                <h2 class="font-bold text-xl mb-1">Secure Transactions</h2>
                <h4 class="text-base">
                  Secure Transactions Rest assured, your transactions are safe and secure with our
                  wallet system.
                </h4>
              </div>
            </div>
            <div class="flex items-center gap-4 lg:pl-8 lg:pr-16 py-3">
              <img src="@/assets/travel_icon6.png" alt="" />
              <div>
                <h2 class="font-bold text-xl mb-1">Accessible Support</h2>
                <h4 class="text-base">
                  Accessible Support We're here for you, ready to assist with any requests or
                  concerns you may have.
                </h4>
              </div>
            </div>
          </div>
        </article>
      </MaxWidthWrapper>
    </section>
    <section class="mb-30">
      <MaxWidthWrapper className="">
        <article
          class="bg-[url(@/assets/bg_image.svg)] bg-cover bg-no-repeat bg-center flex relative rounded-4xl p-12"
        >
          <div class="w-full lg:w-[60%]">
            <h2 class="text-3xl xl:text-4xl text-white font-bold mb-15">
              What are you waiting for?<br />
              Download the Bell Transport <br />App and get started now!
            </h2>
            <div class="flex flex-col sm:flex-row items-center gap-4">
              <button
                class="bg-white flex items-center gap-4 px-5 py-3 rounded-2xl w-full md:w-auto"
              >
                <img src="@/assets/playIcon.png" alt="" />
                <span class="sm:text-xl font-bold text-left">
                  Get it on <br />
                  Google Play
                </span>
              </button>
              <button
                class="bg-white flex items-center gap-4 px-5 py-3 rounded-2xl w-full md:w-auto"
              >
                <img src="@/assets/appleIcon.png" alt="" />
                <span class="sm:text-xl font-bold text-left">
                  Download on the <br />
                  App Store
                </span>
              </button>
            </div>
          </div>
          <img
            src="@/assets/appMockup.png"
            class="absolute bottom-0 right-0 hidden lg:block"
            alt=""
          />
        </article>
      </MaxWidthWrapper>
    </section>
    <section class="mb-30">
      <HeadingComp heading="Frequently Asked Questions" className="" :isCenter="true" />
      <MaxWidthWrapper className="">
        <div
          class="mx-auto max-w-200 bg-transparent hover:bg-gray-300 flex items-center gap-4 py-3 px-6 rounded-lg mb-6 cursor-pointer transition-all duration-300 relative"
        >
          <i class="pi pi-plus text-orange-500"></i>
          <p class="font-bold text-lg">What is Bell Transport?</p>
          <!-- <div class="absolute -bottom-10 ml-10">
            Bell Transport is a reliable transportation service provider offering comfortable and
            affordable travel options to various destinations.
          </div> -->
        </div>
        <div
          class="mx-auto max-w-200 bg-transparent hover:bg-gray-300 flex items-center gap-4 py-3 px-6 rounded-lg mb-6 cursor-pointer transition-all duration-300"
        >
          <i class="pi pi-plus text-orange-500"></i>
          <p class="font-bold text-lg">How does Bell Transport work?</p>
        </div>
        <div
          class="mx-auto max-w-200 bg-transparent hover:bg-gray-300 flex items-center gap-4 py-3 px-6 rounded-lg mb-6 cursor-pointer transition-all duration-300"
        >
          <i class="pi pi-plus text-orange-500"></i>
          <p class="font-bold text-lg">What is Bell Transport?</p>
        </div>
      </MaxWidthWrapper>
    </section>
  </main>
  <FooterComp />
  <OverlayComp />
</template>
