import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/admin",
      component: () => import("@/layout/Admin.vue"),
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("@/views/dashboard/index.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/layout/404.vue"),
    },
  ],
});

export default router;
