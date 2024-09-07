<script setup lang="ts">
//components
import NavBar from './components/navbar/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
</script>

<template>
  <div>
    <NavBar />
    <HeroSection />

    <p>{{ $t('greeting') }}</p>
    <header>
      <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
