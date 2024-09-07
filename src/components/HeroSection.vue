<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="../assets/imgs/me.png"
        class="hero-image max-w-full lg:max-w-lg md:max-w-60 sm:max-w-56 w-full h-auto mb-6 lg:mb-0 xs:max-w-20"
        style="mask-image: linear-gradient(black 60%, transparent)"
      />
      <div>
        <h1 class="text-5xl font-bold">
          {{ $t('greeting') }}
          <span class="text-primary">Cristhian</span>
        </h1>
        <p class="py-6 text-xl">
          {{ $t('presentation.intro') }}
          <label class="text-primary font-semibold">
            {{ $t('presentation.resalt') }}
          </label>
          {{ $t('presentation.outro') }}
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>
