<script setup lang="ts">
//components
import NavBar from './components/navbar/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import timeLine from './components/timeLine.vue'
import ProyectsDev from './components/ProyectsDev.vue';


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

        <!-- proyects -->
        <ProyectsDev />
      </div>
    </main>
  </div>
</template>
