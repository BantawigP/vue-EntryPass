import { createRouter, createWebHistory } from "vue-router";

import admin from "../components/admin.vue";
import booking from "../components/booking.vue";
import LogIn from "../components/LogIn.vue";
import guard from "../components/guard.vue";

const routes = [
    {
      path: "/",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: "/admin",
      name: "Admin",
      component: admin,
    },
    {
      path: "/booking",
      name: "Booking",
      component: booking,
    },
    {
        path: "/guard",
        name: "Guard",
        component: guard,
      },
   
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;