<script setup lang="ts">
//components
import HeroSection from '../components/HeroSection.vue'
import timeLine from '../components/timeLine.vue'
import ProyectsDev from '../components/ProyectsDev.vue'
//icons
import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- hero section -->
  <HeroSection />

  <main>
    <div>
      <!-- experience -->
      <timeLine />

      <!-- proyects -->
      <div class="max-w-screen-lg mx-auto pl-4 pr-4 pb-5">
        <h2 class="text-4xl font-bold text-start text-primary mt-10 mb-10 flex items-center">
          <Icon icon="heroicons-solid:code" width="30" height="30" class="mr-2" />
          {{ $t('title2') }}
        </h2>
        <ProyectsDev
          :title="$t('proy.1.title')"
          :description="$t('proy.1.description')"
          :technologies="['Flutter', 'Dart', 'Firebase', 'Playstore']"
          imageUrl="/imgs/proyectos/1.webp"
          altText="swapme"
          githubUrl="https://github.com/Isnotcristhianr/SwapMe---Code-0"
          previewUrl="https://play.google.com/store/apps/details?id=com.company.swapme&hl=es_EC"
        />
      </div>
    </div>
  </main>
</template>
