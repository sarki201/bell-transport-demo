import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookingView from "@/views/BookingView.vue";
import FiveSeatsView from "@/views/FiveSeatsView.vue";
import SixSeatsView from "@/views/SixSeatsView.vue";

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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
