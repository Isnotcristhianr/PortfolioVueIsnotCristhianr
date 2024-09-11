<script setup lang="ts">
//icons
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="max-w-screen-lg mx-auto pl-4 pr-4 pb-5">


        <h2 class="text-4xl font-bold text-start text-primary mt-10 mb-10 flex items-center">
            <Icon icon="heroicons-solid:code" width="30" height="30" class="mr-2"/>
                    {{ $t('title1') }}
    </h2>
    <div class="bg-dark-800 rounded-lg p-6 mx-auto shadow-lg md:flex md:max-w-4xl">
        <div class="md:w-1/3">
            <img
                src="/imgs/proyectos/1.jpg"
                alt="Proyecto SVGL"
                class="rounded-lg w-full"
            />
        </div>
        <div class="md:w-2/3 md:pl-6">
            <h3 class="text-2xl font-bold text-white mb-2">SVGL - A beautiful library with SVG logos</h3>
            <div class="flex items-center space-x-2 mb-4">
                <span class="bg-black text-white text-sm px-2 py-1 rounded-lg">Next.js</span>
                <span class="bg-blue-500 text-white text-sm px-2 py-1 rounded-lg">Tailwind CSS</span>
            </div>
            <p class="text-gray-400 text-sm mb-4">
                Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2k svgs descargados.
                Creado desde cero con Next.js, React y Tailwind CSS.
            </p>
            <div class="flex space-x-4">
                <a
                    href="https://github.com"
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
                    href="https://preview.com"
                    class="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        class="w-5 h-5 mr-2"
                    >
                        <path
                            d="M11.93 0H4.07C1.82 0 0 1.82 0 4.07v7.86C0 14.18 1.82 16 4.07 16h7.86C14.18 16 16 14.18 16 11.93V4.07C16 1.82 14.18 0 11.93 0zM8 12.8A4.8 4.8 0 118 3.2a4.8 4.8 0 010 9.6z"
                        />
                    </svg>
                    Preview
                </a>
            </div>
        </div>
    </div>
</div>
</template>
