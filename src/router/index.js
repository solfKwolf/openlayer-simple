import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/map",
    name: "Map",
    component: () => import(/* webpackChunkName: "about" */ "../views/Map.vue"),
  },
  {
    path: "/proj4326",
    name: "Proj4326",
    component: () => import("../views/Proj4326.vue"),
  },
  {
    path: "/proj3857",
    name: "Proj3857",
    component: () => import("../views/Proj3857.vue"),
  },
  {
    path: "/gaode",
    name: "Gaode",
    component: () => import("../views/Gaode.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
