import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/predio",
    name: "Predio",
    component: () => import("../views/Predio.vue"),
  },
  {
    path: "/predio/:id",
    name: "UpdatePredio",
    component: () => import("../views/UpdatePredio.vue"),
  },
  {
    path: "/apartamento",
    name: "Apartamento",
    component: () => import("../views/Apartamento.vue"),
  },
  {
    path: "/apartamento/:id",
    name: "UpdateApartamento",
    component: () => import("../views/UpdateApartamento.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
