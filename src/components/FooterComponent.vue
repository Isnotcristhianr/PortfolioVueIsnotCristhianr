<template>
  <footer class="footer bg-neutral text-neutral-content items-center p-4">
    <aside class="grid-flow-col items-center">
      <img src="/imgs/branding/isnotcr_whiteblack.jpg" alt="" class="h-10" />
      <p>
        {{ $t('footer.rights') }}
        <br>
        <a href="https://porfolio.dev/">
          {{ $t('footer.rights2') }}
        </a>
      </p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <!-- linkendIn -->
      <a
        href="https://www.linkedin.com/in/cristhian-ramirez-1b1b3b1b1/"
        target="_blank"
        class="btn btn-ghost btn-circle"
      >
        <Icon icon="uil:linkedin" width="30" height="30" />
      </a>
      <!-- github -->
      <a href="" target="_blank" class="btn btn-ghost btn-circle">
        <Icon icon="mdi:github" width="30" height="30" />
      </a>
      <!-- twitter -->
      <a href="" target="_blank" class="btn btn-ghost btn-circle">
        <Icon icon="pajamas:twitter" width="30" height="30" />
      </a>
      <!-- instagram -->
      <a href="" target="_blank" class="btn btn-ghost btn-circle">
        <Icon icon="mdi:instagram" width="30" height="30" />
      </a>
      <!-- facebook -->
      <a href="" target="_blank" class="btn btn-ghost btn-circle">
        <Icon icon="ic:baseline-facebook" width="30" height="30" />
      </a>
      <!-- Youtube -->
      <a href="" target="_blank" class="btn btn-ghost btn-circle">
        <Icon icon="mdi:youtube" width="30" height="30" />
      </a>
    </nav>
  </footer>
</template>

<script setup lang="ts">
//icons
import { Icon } from '@iconify/vue'
</script>
