<template>
  <div class="flex justify-center items-center my-3">
    <div class="w-full p-5 rounded-lg shadow-lg hover:bg-gray-400 ease-in-out transform hover:scale-105 transition-shadow duration-300">
      <div class="flex items-center justify-between gap-3">
        <!-- Icono -->
        <Icon
          :icon="icon"
          width="40"
          height="40"
        />
        <!-- Nombre y Enlace -->
        <div class="flex flex-1 justify-between items-center">
          <span class="text-lg font-bold">
            {{ name }}
          </span>
          <!-- Enlace para ver el certificado -->
          <a
            :href="link"
            target="_blank"
            class="ml-4 text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center"
          >
            {{ $t('see') }}
            <Icon icon="fluent:certificate-16-filled" class="ml-1" width="20" height="20" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//icons
import { Icon } from '@iconify/vue'

interface props {
  name: string
  icon: string
  link: string
}

//props
defineProps<props>()
</script>
