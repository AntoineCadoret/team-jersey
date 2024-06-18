import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TeamView from '../views/TeamView.vue';
import FavoritesView from '@/views/favoritesView.vue';
import MyJerseysView from '@/views/myJerseysView.vue';
import JerseyView from '@/views/jerseyView.vue';
import JerseysListView from '@/views/jerseysListView.vue';
import SignUpView from '@/views/SignUpView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:team_name',
      name: 'team',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TeamView,
      props: (route) => ({ teamId: (history.state as any).team_id })
    },
    {
      path: '/favorites',
      name: 'favorites',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: FavoritesView
    },
    {
      path: '/myjerseys',
      name: 'myjerseys',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MyJerseysView
    },
    {
      path: '/jersey/:jerseyId',
      name: 'jersey',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: JerseyView,
      props: true
    },
    {
      path: '/jerseyslist',
      name: 'jerseyslist',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: JerseysListView
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SignUpView
    }
  ]
})

export default router
