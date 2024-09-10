<script setup lang="ts">
//components
import NavBar from './components/navbar/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import timeLine from './components/timeLine.vue'


</script>

<template>
  <div class="bg-base-200">
    <header>
      <!-- nav bar -->
      <NavBar />
    </header>
    <!-- hero section -->
    <HeroSection />

    <main>
      <div>
       
        <!-- experience -->
        <timeLine />
      </div>
    </main>
  </div>
</template>
