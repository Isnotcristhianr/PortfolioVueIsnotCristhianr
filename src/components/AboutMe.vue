<template>
  <section class="min-h-screen text-white p-8 flex flex-col justify-center">
    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
      <div class="flex-1">
        <div class="space-y-4 text-gray-300">
          <p>
            IsnotCrishitan es el reflejo de mi ilusión por crecer como profesional dentro de la
            industria del desarrollo del software. Mi nombre es Cristhian, y soy un desarrollador
            web y mobile en continua formación y me apasionan los retos.
          </p>
          <p>
            Algunos de mis éxitos incluyen
            <span class="font-mono text-white"
              >colaborar con [Empresa/Proyecto] para el desarrollo de [Logro Específico]</span
            >. Aunque hoy está desaparecido fue un gran avance en el mundo del desarrollo web.
          </p>
          <p>
            Como creador de contenido,
            <span class="font-mono text-white"
              >cuento con el canal de habla hispana más visto del mundo en la categoría de Software
              & Game Development en [Plataforma]</span
            >. Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el acceso a
            contenido de calidad.
          </p>
        </div>
      </div>
      <div class="md:w-1/3">
        <img src="" alt="Tu foto" class="rounded-lg shadow-2xl w-full" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Icon from '@iconify/vue'
</script>

<style scoped>
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
}
</style>
