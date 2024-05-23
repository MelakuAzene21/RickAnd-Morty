
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Episode from '../components/Episode.vue';
import character from '../components/character.vue';
import Location from '../components/Location.vue';
import EpisodeDetails from '../components/EpisodeDetails.vue';
import LocationDetails from '../components/LocationDetails.vue';
import CharacterDetails from '../components/CharacterDetails.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/episodes',
    name: 'Episode',
    component: Episode,
  },
  {
 path:'/episodes/:id',
    name:'EpisodeDetails',
  component: EpisodeDetails,
  props: true
  },


  {
    path: '/characters/',
    name: 'character',
    component: character,
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: CharacterDetails,
    props: true
  },

  {
    path: '/location',
    name: 'location',
    component: Location,
  },
{
path:'/location/:id',
name:'LocationDetails',
component:LocationDetails,
props:true
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
