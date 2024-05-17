import { createRouter, createWebHistory } from "vue-router";

import admin from "../components/admin.vue";
import booking from "../components/booking.vue";
import LogIn from "../components/LogIn.vue";
import guard from "../components/guard.vue";
import home from "../components/home.vue";
import viewapps from "../components/viewapps.vue";
import office from "../components/office.vue";
import registration from "../components/registration.vue";
import settings from "../components/settings.vue";
import adminVinformation from "../components/adminVinformation.vue";


const routes = [
{      path: "/",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: "/admin",
      name: "Admin",
      component: admin,
    },
    {
      path: "/adminVinformation",
      name: "Admin Visitor Information",
      component: adminVinformation,
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
      {
        path: "/registration",
        name: "Registration",
        component: registration,
      },
      {
        path: "/home",
        name: "Home",
        component: home,
      },
      {
      path: "/settings",
      name: "Settings",
      component: settings,
    },
      {
        path: "/viewapps",
        name: "View Appointments",
        component: viewapps,
      },
      {
        path: "/office",
        name: "Office",
        component: office,
      },
   
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;
  