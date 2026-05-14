<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Breadcrumb from "./ui/breadcrumb/Breadcrumb.vue";
import BreadcrumbList from "./ui/breadcrumb/BreadcrumbList.vue";
import BreadcrumbItem from "./ui/breadcrumb/BreadcrumbItem.vue";
import BreadcrumbLink from "./ui/breadcrumb/BreadcrumbLink.vue";
import BreadcrumbPage from "./ui/breadcrumb/BreadcrumbPage.vue";
import BreadcrumbSeparator from "./ui/breadcrumb/BreadcrumbSeparator.vue";
import { useColorMode } from "@vueuse/core";
import DropdownMenu from "./ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuTrigger from "./ui/dropdown-menu/DropdownMenuTrigger.vue";
import DropdownMenuContent from "./ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuItem from "./ui/dropdown-menu/DropdownMenuItem.vue";
import LucideIcon from "./LucideIcon.vue";

const mode = useColorMode()
</script>

<template>
  <header
    class="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
    <div class="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="mx-2 data-[orientation=vertical]:h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem class="hidden md:block">
            <BreadcrumbLink href="#">
              Main
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator class="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div class="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="icon" class="relative">
              <LucideIcon icon="moon"
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <LucideIcon icon="sun"
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span class="sr-only">
                Toggle theme
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem @click="mode = 'light'">
              <LucideIcon icon="sun" class="w-4 h-4 mr-2" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'dark'">
              <LucideIcon icon="moon" class="w-4 h-4 mr-2" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'auto'">
              <LucideIcon icon="monitor" class="w-4 h-4 mr-2" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </header>
</template>
