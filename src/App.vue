<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

//components
import NavBar from './components/navbar/NavBar.vue'

</script>

<template>
  <div>

    <NavBar />





<p>{{ $t('greeting') }}</p>
<header>
  
  <div >
    
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</header>

<RouterView />
</div>
</template>
