<template>
  <div class="max-w-screen-lg mx-auto pl-4 pr-4 pb-5">
    <h2 class="text-4xl font-bold text-start text-primary mt-10 mb-10 flex items-center">
      <Icon icon="heroicons-solid:user" width="30" height="30" class="mr-2" />
      {{ $t('about') }}
    </h2>
    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
      <div class="flex-1">
        <div class="mockup-code">
          <div class="space-y-3 p-3 m-2">
            <p>
              {{ $t('ab.1.p1') }}
              <label class="font-extrabold">
                {{ $t('ab.1.p1on') }}
              </label>
              {{ $t('ab.1.p2') }}
              <label class="font-extrabold">
                {{ $t('ab.1.p2on') }}
              </label>
              {{ $t('ab.1.p3') }}
              <label class="font-extrabold">
                {{ $t('ab.1.p3on') }}
              </label>
              {{ $t('ab.1.p4') }}
            </p>
            <p>
              {{ $t('ab.2.p1') }}
              <label class="font-extrabold">
                {{ $t('ab.2.p1on') }}
              </label>
            </p>
            <p>
              {{ $t('ab.3.p1') }}
              <label class="font-extrabold">
                {{ $t('ab.3.p1on') }}
              </label>
              {{ $t('ab.3.p2') }}
            </p>
            <p>
              {{ $t('ab.4.p1') }}
              <label class="font-extrabold">
                {{ $t('ab.4.p1on') }}
              </label>
              {{ $t('ab.4.p2') }}
              <label class="font-extrabold">
                {{ $t('ab.4.p2on') }}
              </label>
              {{ $t('ab.4.p3') }}
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <img
          src="/imgs/meGoogle.jpg"
          alt=""
          class="rounded-lg shadow-2xl w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
    </div>
    <Vue3Marquee
      :gradient="true"
      :gradient-color="['#FF0080', '#7928CA', '#FF0080']"
      gradient-length="30%"
      :pause-on-hover="true"
    >
      <!-- tecnologias icons -->
      <div class="flex items-center justify-center gap-4 mt-10">
        <!-- Frontend Frameworks -->
        <Icon icon="logos:vue" width="40" height="40" />
        <Icon icon="logos:react" width="40" height="40" />
        <Icon icon="ri:nextjs-fill" width="40" height="40" />

        <!-- Styling -->
        <Icon icon="logos:tailwindcss-icon" width="40" height="40" />
        <Icon icon="logos:bootstrap" width="40" height="40" />
        <Icon icon="logos:daisyui" width="40" height="40" />
        <Icon icon="logos:headlessui-icon" width="40" height="40" />

        <!-- Languages -->
        <Icon icon="logos:html-5" width="40" height="40" />
        <Icon icon="logos:css-3" width="40" height="40" />
        <Icon icon="logos:javascript" width="40" height="40" />
        <Icon icon="logos:dart" width="40" height="40" />

        <!-- Libraries -->
        <Icon icon="logos:jquery" width="40" height="40" />
        <Icon icon="logos:highcharts" width="40" height="40" />

        <!-- Backend Frameworks -->
        <Icon icon="logos:codeigniter-icon" width="40" height="40" />

        <!-- Hosting & Deployment -->
        <Icon icon="logos:firebase" width="40" height="40" />
        <Icon icon="vscode-icons:file-type-vercel" width="40" height="40" />
        <Icon icon="vscode-icons:file-type-light-firebasehosting" width="40" height="40" />

        <!-- Design Tools -->
        <Icon icon="logos:figma" width="40" height="40" />
        <Icon icon="logos:adobe-xd" width="40" height="40" />
        <Icon icon="logos:adobe-photoshop" width="40" height="40" />
        <Icon icon="logos:adobe-premiere-pro" width="40" height="40" />

        <!-- Version Control -->
        <Icon icon="logos:github-icon" width="40" height="40" />

        <!-- UI Libraries -->
        <Icon icon="simple-icons:shadcnui" width="40" height="40" />
        <Icon icon="logos:flutter" width="40" height="40" />
      </div>
    </Vue3Marquee>
  </div>
</template>
<script setup lang="ts">
//icons
import { Icon } from '@iconify/vue'
</script>
