<script setup lang="ts">
import { Icon } from '@iconify/vue';</script>
<template>
  <div class="hero bg-base-200 min-h-screen p-10 pl-10 pr-10">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="../../public/imgs/me.png"
        alt="me"
        class="hero-image max-w-full lg:max-w-lg md:max-w-60 sm:max-w-56 w-full h-auto mb-6 lg:mb-0 xs:max-w-20"
        style="mask-image: linear-gradient(black 80%, transparent)"
      />
      <div>
        <div class="md:text-center lg:text-start">
          <div class="indicator">
            <span class="indicator-item badge badge-success"></span>
            <button class="btn btn-xs btn-block btn-success btn-outline mb-3">
              {{ $t('position') }}
            </button>
          </div>
          <h1 class="text-5xl font-bold">
            {{ $t('greeting') }}
            <span class="text-primary">Cristhian</span>
          </h1>
        </div>
        <p class="py-6 text-xl">
          {{ $t('presentation.intro') }}
          <label class="text-primary font-semibold">
            {{ $t('presentation.resalt') }}
          </label>
          {{ $t('presentation.outro') }}
        </p>
        <button class="btn btn-primary btn-outline">
          <Icon icon="material-symbols:mail-outline" width="24" height="24" />
          {{ $t('actionsHero.hire') }}
        </button>
        <button class="btn btn-error btn-outline ml-2">
          <Icon icon="pepicons-pop:cv" width="24" height="24" />
          {{ $t('actionsHero.cv') }}
        </button>
        <button class="btn btn-neutral btn-outline ml-2">
          <Icon icon="mdi:github" width="24" height="24" />    
            </button>
      </div>
    </div>
  </div>
</template>
