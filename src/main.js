import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

// VUES
import App from './components/App.vue';
import Home from './components/Home.vue';
import Page1 from './components/Page1.vue';
import Doodle from './components/Doodle.vue';

// INIT
Vue.use(VueRouter);
export const doodleApi = axios.create({
  baseURL: 'https://www.iutbayonne.univ-pau.fr/~klevron/api/'
});

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 },
  { 
    path: '/doodle/:name', 
    component: Doodle,
    name: 'doodle'  
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});