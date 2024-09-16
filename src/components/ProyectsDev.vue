<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface ProjectProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  altText: string
  githubUrl: string
  previewUrl: string
}

defineProps<ProjectProps>()

// Mapa de tecnologías a íconos (puedes modificar los íconos según tu preferencia)
const techIcons: Record<string, string> = {
  Flutter: 'logos:flutter',
  Dart: 'logos:dart',
  Firebase: 'logos:firebase',
  Playstore: 'mage:playstore',
  Html: 'logos:html-5',
  Css: 'logos:css-3',
  Js: 'logos:javascript',
  Jquery: 'devicon:jquery',
  Bootstrap: 'logos:bootstrap',
  VueJs: 'logos:vue',
  Tailwind: 'vscode-icons:file-type-tailwind',
  Headless: 'logos:headlessui-icon',
  Vercel: 'vscode-icons:file-type-vercel',
  Php: 'vscode-icons:file-type-php',
  HighCharts: 'logos:highcharts',
  Coidegniter: 'logos:codeigniter-icon',
  Daisy: 'logos:daisyui',
  Hosting: 'vscode-icons:file-type-light-firebasehosting',
  React: 'logos:react',
  Next: 'ri:nextjs-fill',
  ShadcnUI: 'simple-icons:shadcnui'
}
</script>

<template>
  <div class="backdrop-blur-md rounded-xl px-4">
    <!-- check responsive -->
    <div class="bg-dark-800 rounded-lg p-6 mx-auto md:flex md:max-w-4xl">
      <!-- img -->
      <div class="md:w-2/3 m-5 shadow-2xl">
        <img
          :src="imageUrl"
          :alt="altText"
          class="rounded-lg w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <!-- Title -->
      <div class="md:w-1/2 md:pl-6 mt-3">
        <h3 class="text-2xl font-bold text-dark-100 mb-2">
          {{ title }}
        </h3>
        <!-- Tecnologías con íconos -->
        <div class="flex items-center space-x-2 mb-4">
          <span
            v-for="(tech, index) in technologies"
            :key="index"
            class="bg-neutral-content text-base-100 text-sm px-3 py-2 rounded-lg flex items-center space-x-3"
          >
            <!-- Mostrar ícono correspondiente si existe en el mapa de iconos -->
            <Icon v-if="techIcons[tech]" :icon="techIcons[tech]" class="w-5 h-5" />
            {{ tech }}
          </span>
        </div>
        <!-- des -->
         <div class="backdrop-blur-3xl p-2 rounded">
           <p class="text-sm mb-4 font-medium">
             {{ description }}
           </p>
         </div>
        <!-- Enlaces -->
        <div class="flex space-x-4">
          <a
            :href="githubUrl"
            target="_blank"
            class="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="w-5 h-5 mr-2"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.67 7.67 0 012.01-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.47 0 1.06-.01 1.92-.01 2.18 0 .21.15.45.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            Code
          </a>
          <a
            :href="previewUrl"
            target="_blank"
            class="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            <Icon icon="icon-park-solid:preview-open" width="24" height="24" class="mr-2" />
            Preview
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
