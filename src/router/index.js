import GeoPosition from '@/MobileDevice/pages/GeoPosition.vue'
import GeoPositionOff from '@/MobileDevice/pages/GeoPositionOff.vue'
import SettingsPage from '@/MobileDevice/pages/SettingsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: SettingsPage,
      name: 'home',
      path: '/',
    },
    {
      component: GeoPositionOff,
      name: 'off',
      path: '/off',
    },
    {
      component: GeoPosition,
      name: 'on',
      path: '/on',
    },
  ],
})

export default router
