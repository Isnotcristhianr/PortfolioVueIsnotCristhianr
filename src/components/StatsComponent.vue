<template>
  <div class="stats shadow flex flex-wrap justify-around text-center items-center mx-10">
    <div class="stat flex-1 min-w-[200px] m-2">
      <div class="stat-figure text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-8 w-8 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div class="stat-title">
        {{ $t('stats.visitas') }}
      </div>
      <div class="stat-value">
        {{ visitas }}
      </div>
      <div class="stat-desc">Since 2024</div>
    </div>

    <div class="stat flex-1 min-w-[200px] m-2">
      <div class="stat-figure text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-8 w-8 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          ></path>
        </svg>
      </div>
      <div class="stat-title">
        {{ $t('stats.proyectos') }}
      </div>
      <div class="stat-value">+ 35</div>
      <div class="stat-desc">↗︎ 400 (22%)</div>
    </div>

    <div class="stat flex-1 min-w-[200px] m-2">
      <div class="stat-figure text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-8 w-8 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          ></path>
        </svg>
      </div>
      <div class="stat-title">
        {{ $t('stats.lang') }}
      </div>
      <div class="stat-value">+ 15</div>
      <div class="stat-desc">↗ 90 (14%)</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visitas = ref(90)

onMounted(async () => {
  try {
    const response = await fetch('https://portfoliodev.goatcounter.com/api/v0/count', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // tu payload aquí
      }),
    });

    if (response.ok) {
      // La API puede no devolver datos, así que simplemente aceptamos la respuesta
      visitas.value = visitas.value + 1
    } else {
      console.error(`Error ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
</script>
