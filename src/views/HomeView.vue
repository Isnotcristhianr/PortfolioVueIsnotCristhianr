<script setup lang="ts">
//components
import HeroSection from '../components/HeroSection.vue'
import timeLine from '../components/timeLine.vue'
import ProyectsDev from '../components/ProyectsDev.vue'
import AboutMe from '../components/AboutMe.vue'
import StatsComponent from '../components/StatsComponent.vue'
//icons
import { Icon } from '@iconify/vue'
</script>

<template>
  <main>
    <div>
      <!-- hero section -->
      <HeroSection />
      <!-- stats -->
      <StatsComponent />
      <!-- experience -->
      <timeLine />

      <!-- proyects -->
      <div class="max-w-screen-lg mx-auto pl-4 pr-4 pb-5 mt-5 mb-48 sm:mb-0">
        <!-- Horizontal -->
        <h2 class="text-4xl font-bold text-start text-primary mt-10 mb-10 flex items-center">
          <Icon icon="heroicons-solid:code" width="30" height="30" class="mr-2" />
          {{ $t('title2') }}
        </h2>
        <section>
          <div class="stack-cards">
            <div class="card">
              <div class="container">
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
            <div class="card">
              <div class="container">
                <ProyectsDev
                  :title="$t('proy.6.title')"
                  :description="$t('proy.6.description')"
                  :technologies="['Html', 'Css', 'Js', 'Jquery', 'Bootstrap']"
                  imageUrl="/imgs/proyectos/6.webp"
                  altText="spiccy"
                  githubUrl="https://github.com/Isnotcristhianr/spicy.github.io"
                  previewUrl="https://isnotcristhianr.me/spicy.github.io/"
                />
              </div>
            </div>
            <div class="card">
              <div class="container">
                <ProyectsDev
                  :title="$t('proy.16.title')"
                  :description="$t('proy.16.description')"
                  :technologies="['VueJs', 'Tailwind', 'Daisy', 'Firebase']"
                  imageUrl="/imgs/proyectos/16.webp"
                  altText="gifSearch"
                  githubUrl="https://github.com/Isnotcristhianr/01-VueJS/tree/main/07_spa"
                  previewUrl="https://giftsearch-l2r4fdbzd-isnotcristhianrs-projects.vercel.app/"
                />
              </div>
            </div>
            <div class="card">
              <div class="container">
                <ProyectsDev
                  :title="$t('proy.14.title')"
                  :description="$t('proy.14.description')"
                  :technologies="['Php', 'Bootstrap', 'HighCharts', 'Coidegniter']"
                  imageUrl="/imgs/proyectos/14.webp"
                  altText="gifSearch"
                  githubUrl="https://github.com/Isnotcristhianr/SistemaGestionDocumental"
                  previewUrl="www.pucei.edu.ec:441/DirectorioAplicaciones/"
                />
              </div>
            </div>
            <div class="card">
              <div class="container">
                <ProyectsDev
                  :title="$t('proy.25.title')"
                  :description="$t('proy.25.description')"
                  :technologies="['Next', 'Tailwind', 'ShadcnUI', 'Vercel']"
                  imageUrl="/imgs/proyectos/25.webp"
                  altText="gifSearch"
                  githubUrl=""
                  previewUrl="https://gifsearch-l2r4fdbzd-isnotcristhianrs-projects.vercel.app/"
                />
              </div>
            </div>
          </div>
        </section>
        <!-- ver mas -->
        <div class="flex justify-center">
          <router-link to="/proyectos" class="btn btn-secondary btn-wide btn-outline mt-7">
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
