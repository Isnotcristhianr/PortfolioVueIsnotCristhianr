<script setup lang="ts">
//components
import HeroSection from '../components/HeroSection.vue'
import timeLine from '../components/timeLine.vue'
import ProyectsDev from '../components/ProyectsDev.vue'
import AboutMe from '../components/AboutMe.vue'
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
        <ProyectsDev
          :title="$t('proy.6.title')"
          :description="$t('proy.6.description')"
          :technologies="['Html', 'Css', 'Js', 'Jquery', 'Bootstrap']"
          imageUrl="/imgs/proyectos/6.webp"
          altText="spiccy"
          githubUrl="https://github.com/Isnotcristhianr/spicy.github.io"
          previewUrl="https://isnotcristhianr.me/spicy.github.io/"
        />
        <ProyectsDev
          :title="$t('proy.16.title')"
          :description="$t('proy.16.description')"
          :technologies="['VueJs', 'Tailwind', 'Daisy', 'Firebase', 'Hosting']"
          imageUrl="/imgs/proyectos/16.webp"
          altText="gifSearch"
          githubUrl="https://github.com/Isnotcristhianr/01-VueJS/tree/main/07_spa"
          previewUrl="https://giftsearch-l2r4fdbzd-isnotcristhianrs-projects.vercel.app/"
        />
        <ProyectsDev
          :title="$t('proy.14.title')"
          :description="$t('proy.14.description')"
          :technologies="['Php', 'Bootstrap', 'HighCharts', 'Coidegniter']"
          imageUrl="/imgs/proyectos/14.webp"
          altText="gifSearch"
          githubUrl="https://github.com/Isnotcristhianr/SistemaGestionDocumental"
          previewUrl="www.pucei.edu.ec:441/DirectorioAplicaciones/"
        />
        <ProyectsDev
          :title="$t('proy.25.title')"
          :description="$t('proy.25.description')"
          :technologies="['Next', 'Tailwind', 'ShadcnUI', 'Vercel']"
          imageUrl="/imgs/proyectos/25.webp"
          altText="gifSearch"
          githubUrl=""
          previewUrl="https://gifsearch-l2r4fdbzd-isnotcristhianrs-projects.vercel.app/"
        />
        <!-- ver mas -->
        <div class="flex justify-center mt-5">
          <router-link to="/proyectos" class="btn btn-info btn-wide btn-outline">
            {{ $t('seemore') }}
          </router-link>
        </div>
      </div>
      <!-- About Me -->
      <div class="max-w-screen-lg mx-auto pl-4 pr-4 pb-5">
        <AboutMe />
      </div>
    </div>
  </main>
</template>
