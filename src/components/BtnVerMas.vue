<template>
     <div class="flex justify-center">
          <router-link
          :to="route"   
          class="btn btn-secondary btn-wide btn-outline mt-7">
            {{ $t('seemore') }}
          </router-link>
        </div>
</template>

<script setup lang="ts">

interface props{
    route: string
}

defineProps<props>()
</script>