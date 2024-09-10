<script setup lang="ts">
//components
import NavBar from './components/navbar/NavBar.vue'


</script>

<template>
  <div class="bg-base-200">
    <header>
      <!-- nav bar -->
      <NavBar />
    </header>

    <RouterView />
    
  </div>
</template>
