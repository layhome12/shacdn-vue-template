<script setup lang="ts">
import AppSidebar from "@/layout/sidebar/AppSidebar.vue"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import SiteHeader from "@/components/SideHeader.vue";
import Dashboard from "@/views/dashboard/index.vue";
</script>

<template>
  <SidebarProvider :style="{
    '--sidebar-width': 'calc(var(--spacing) * 72)',
    '--header-height': 'calc(var(--spacing) * 12)',
  }">
    <AppSidebar />
    <SidebarInset>
      <SiteHeader />

      <!-- page render -->
      <Dashboard />

    </SidebarInset>
  </SidebarProvider>
</template>