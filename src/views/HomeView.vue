<script setup lang="ts">
//components
import HeroSection from '../components/HeroSection.vue'
import timeLine from '../components/timeLine.vue'
import ProyectsDev from '../components/ProyectsDev.vue'
import AboutMe from '../components/AboutMe.vue'
import StatsComponent from '../components/StatsComponent.vue'
import CertificatesComponent from '../components/CertificatesComponent.vue'
import BtnVerMas from '../components/BtnVerMas.vue'
import ContactComponent from '../components/ContactComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
//icons
import { Icon } from '@iconify/vue'
</script>

<template>
  <main>
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
                type="app"
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
                type="web"
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
                type="web"
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
                type="web"
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
                type="web"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- ver mas -->
      <BtnVerMas route="/projects"></BtnVerMas>

      <div class="max-w-screen-lg mx-auto pl-4 pr-4 pb-5">
        <!-- About Me -->
        <AboutMe />
        <!-- Certificates -->
        <div>
          <h2 class="text-4xl font-bold text-start text-primary mt-10 mb-10 flex items-center">
            <Icon icon="heroicons-solid:academic-cap" width="30" height="30" class="mr-2" />
            {{ $t('certificates') }}
          </h2>
          <!--  container -->
          <CertificatesComponent
            name="Microsoft Certified AZ-900: Azure AI Fundamentals"
            icon="logos:microsoft-icon"
            link="https://learn.microsoft.com/api/credentials/share/es-es/CristhianRecalde-4665/10D25DF28F252BB7?sharingId=A2098A03866B3733"
          />
          <CertificatesComponent
            name="Development Web II"
            icon="logos:google-icon"
            link="https://drive.google.com/file/d/1Pg0lJnZtYOdj2Rv4q5SZsnA9ieFsBtm2/view?usp=sharing"
          />
          <CertificatesComponent
            name="Diseño Wev con HTML5 y CSS3"
            icon="cbi:movistar-plus"
            link="https://drive.google.com/file/d/1s5PNJ8tnrnGJX66TqLs8ZWoCDnfUwMpD/view?usp=sharing"
          />
          <CertificatesComponent
            name="Administración Windows Server 2016"
            icon="logos:udemy-icon"
            link="https://drive.google.com/file/d/17DjdcP5cJCeFaJCk7IUUrXv-An8SK59B/view?usp=sharing"
          />
          <CertificatesComponent
            name="VueJs 3 - Desde 0"
            icon="logos:udemy-icon"
            link="https://drive.google.com/file/d/1SSqaYjPIGwO9LCkHOwUOZB4r7Yh6OIYE/view?usp=sharing"
          >
          </CertificatesComponent>
          <BtnVerMas route="/certificates"></BtnVerMas>
        </div>
        <!-- Contact -->
          <h2 class="text-4xl font-bold text-start text-primary mt-10 mb-10 flex items-center">
            <Icon icon="heroicons-solid:mail" width="30" height="30" class="mr-2" />
            {{ $t('contact') }}
          </h2>
          <ContactComponent />
      </div>

      
    </div>
    <!-- Footer -->
    <FooterComponent />
  </main>
</template>
