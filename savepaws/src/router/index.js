import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "home-page",
      path: "/",
      component: () => import("../pages/home-page.vue"),
    },

    {
      name: "find-location-page",
      path: "/find",
      component: () => import("../pages/find-location-page.vue"),
    },

    {
      name: "set-info-page",
      path: "/request",
      component: () => import("../pages/set-info-page.vue"),
    },
  ],
});

export {
  router,
};
