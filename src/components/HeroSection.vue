<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
  <div class="hero bg-base-200 min-h-screen p-10 pl-10 pr-10">
    <div class="hero-content flex-col lg:flex-row">
      <!-- img -->
      <img
        src="/imgs/me.png"
        alt="me"
        class="hero-image max-w-full lg:max-w-lg md:max-w-60 sm:max-w-56 w-full h-auto mb-6 lg:mb-0 xs:max-w-20"
        style="mask-image: linear-gradient(black 80%, transparent)"
      />
      <div>
        <div class="md:text-center lg:text-start">
          <div class="indicator">
            <span class="indicator-item badge badge-success"></span>
            <a class="btn btn-xs btn-block btn-success btn-outline mb-3"
              href="https://www.linkedin.com/in/isnotcristhianr/"
              target="_blank"
            >
              {{ $t('position') }}
            </a>
          </div>
          <h1 class="text-5xl font-bold">
            {{ $t('greeting') }}
            <span class="text-primary">Cristhian</span>
          </h1>
        </div>
        <!-- presentation -->
        <p class="py-6 text-xl">
          {{ $t('presentation.intro') }}
          <label class="text-primary font-semibold">
            {{ $t('presentation.resalt') }}
          </label>
          {{ $t('presentation.outro') }}
        </p>
        <!-- btns -->
        <a class="btn btn-neutral btn-outline"
        href="mailto:isnotcristhian@gmail.com"
        >
          <Icon icon="material-symbols:mail-outline" width="24" height="24" />
          {{ $t('actionsHero.hire') }}
        </a>
        <!-- pdf cv acorde al idioma -->
        <a class="btn btn-neutral btn-outline ml-2"
          v-if="$i18n.locale === 'es'"
          href="/resume/Cristhian Recalde Resume ES.pdf"
          download
        >
          <Icon icon="pepicons-pop:cv" width="24" height="24" />
          {{ $t('actionsHero.cv') }}
        </a>
        <a class="btn btn-neutral btn-outline ml-2"
          v-else
          href="/resume/Cristhian Recalde Resume.pdf"
          download
        >
          <Icon icon="pepicons-pop:cv" width="24" height="24" />
          {{ $t('actionsHero.cv') }}
        </a>
        <a class="btn btn-neutral btn-outline ml-2"
          href="https://github.com/Isnotcristhianr"
          target="_blank"
        >
          <Icon icon="mdi:github" width="24" height="24" />    
            </a>
      </div>
    </div>
  </div>
</template>
