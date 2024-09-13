<template>
  <section class="max-w-screen-lg mx-auto pl-4 pr-4 pb-5">
    <h2 class="text-4xl font-bold text-start text-primary mt-10 mb-10 flex items-center">
      <Icon icon="heroicons-solid:user" width="30" height="30" class="mr-2" />
      {{ $t('about') }}
    </h2>
    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
      <div class="flex-1">
        <div class="space-y-4">
          <p>
            {{ $t('ab.1.p1') }}
            <label class="font-semibold">
              {{ $t('ab.1.p1on') }}
            </label>
            {{ $t('ab.1.p2') }}
            <label class="font-semibold">
              {{ $t('ab.1.p2on') }}
            </label>
            {{ $t('ab.1.p3') }}
            <label class="font-semibold">
              {{ $t('ab.1.p3on') }}
            </label>
            {{ $t('ab.1.p4') }}
          </p>
          <p>
            {{ $t('ab.2.p1') }}
            <label class="font-semibold">
              {{ $t('ab.2.p1on') }}
            </label>
          </p>
          <p>
            {{ $t('ab.3.p1') }}
            <label class="font-semibold">
              {{ $t('ab.3.p1on') }}
            </label>
            {{ $t('ab.3.p2') }}
          </p>
          <p>
            {{ $t('ab.4.p1') }}
            <label class="font-semibold">
              {{ $t('ab.4.p1on') }}
            </label>
            {{ $t('ab.4.p2') }}
            <label class="font-semibold">
              {{ $t('ab.4.p2on') }}
            </label>
            {{ $t('ab.4.p3') }}
          </p>
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
  </section>
</template>

<script setup lang="ts">
//icons
import { Icon } from '@iconify/vue'
</script>
