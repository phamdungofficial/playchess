import { createRouter, createWebHistory } from 'vue-router'
import Chessboard from '../views/Chessboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Chessboard",
      component: () => import(/* webpackChunkName: "chessboard" */ "../views/Chessboard.vue"),
    },

  ]
})

export default router;
