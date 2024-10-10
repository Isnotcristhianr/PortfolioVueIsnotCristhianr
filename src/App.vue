<script setup lang="ts">
//components
import NavBar from './components/navbar/NavBar.vue'

//analitics
import { Analytics } from "@vercel/analytics/react"



</script>

<template>
  <div class="bg-base-200">
    <!-- Analytics -->
    <Analytics />
    <header>
      <!-- nav bar -->
      <NavBar />
    </header>

    <RouterView />
    
  </div>
</template>
