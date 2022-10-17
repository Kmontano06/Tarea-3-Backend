import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ComicIndex from "./components/ComicIndex.vue";
import ComicDetails from "./components/ComicDetails.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/comic", component: ComicIndex },
  { path: "/comic/edit/:id", 
    component: ComicDetails, props: {edit:true} },
  { path: "/comic/create", 
    component: ComicDetails, props: {create:true} },
  { path: "/comic/delete/:id", 
    component: ComicIndex, props: {delete:true} },
    //Ilustrador
  { path: "/ilustrador", component: ComicIndex },
  { path: "/ilustrador/edit/:id", 
    component: ComicDetails, props: {edit:true} },
  { path: "/ilustrador/create", 
    component: ComicDetails, props: {create:true} },
  { path: "/ilustrador/delete/:id", 
    component: ComicIndex, props: {delete:true} },
    //Personaje
  { path: "/personaje", component: ComicIndex },
  { path: "/personaje/edit/:id", 
    component: ComicDetails, props: {edit:true} },
  { path: "/personaje/create", 
    component: ComicDetails, props: {create:true} },
  { path: "/personaje/delete/:id", 
    component: ComicIndex, props: {delete:true} }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;