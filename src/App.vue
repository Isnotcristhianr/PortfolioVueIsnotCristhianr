<script setup lang="ts">
//components
import NavBar from './components/navbar/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import timeLine from './components/timeLine.vue'

//icons
import { Icon } from '@iconify/vue'
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
      <div class="ml-32 mr-32">
        <h2 class="text-4xl font-bold text-start text-primary mt-10 mb-10 flex items-center">
          <Icon icon="pajamas:work" width="32" height="32" class="mr-2" />
          Experience
        </h2>
        <!-- experience -->
        <timeLine />
      </div>
    </main>
  </div>
</template>
