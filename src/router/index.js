import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main.index',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'product.index',
      component: () => import('../views/products/Index.vue')
    }
  ]
})

export default router
