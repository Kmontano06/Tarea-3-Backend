import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ComicIndex from "./components/ComicIndex.vue";

const routes = [
  { path: "/", component: Home },
	
  { path: "/comic", component: ComicIndex }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;