import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookingView from "@/views/BookingView.vue";
import FiveSeatsView from "@/views/FiveSeatsView.vue";
import SixSeatsView from "@/views/SixSeatsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/booking",
      name: "booking",
      component: BookingView,
    },
    {
      path: "/booking/fiveseats",
      name: "fiveseats",
      component: FiveSeatsView,
    },
    {
      path: "/booking/sixseats",
      name: "sixseats",
      component: SixSeatsView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
