import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import DetailsPage from "../views/DetailsPage.vue";
import Randomizer from "../views/Randomizer.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/categories",
    name: "Categories",
    // route level code-splitting
    // this generates a separate chunk (Categories.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Categories" */ "../views/Categories.vue")
  },
  {
    path: "/details-page/&:id",
    name: "DetailsPage",
    component: DetailsPage,
    props: true
  },
  {
    path: "/randomizer",
    name: "Randomizer",
    component: Randomizer
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
