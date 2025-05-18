import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import CompleteView from '../views/CompleteView.vue';
import Pools from '../views/products/PoolsView.vue';
import WaterblasterPlatforms from '../views/products/WaterblasterPlatformsView.vue';
import Waterslides from '../views/products/WaterslidesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
    },
    {
      path: '/complete',
      name: 'complete',
      component: CompleteView,
    },
    {
      path: '/products/pools',
      name: 'pools',
      component: Pools,
    },
    {
      path: '/products/waterslides',
      name: 'product-waterslides',
      component: Waterslides,
    },
    {
      path: '/products/waterblaster-platforms',
      name: 'waterblaster-platforms',
      component: WaterblasterPlatforms,
    },
  ],
});

export default router;
