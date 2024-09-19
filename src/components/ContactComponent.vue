<script setup lang="ts">
//icons
import { Icon } from '@iconify/vue'
</script>

<template>
  <div>
    <form class="max-w-md mx-auto p-6" action="https://formspree.io/f/mgebzbgk" method="POST">
      <!-- Email -->
      <div class="flex items-center gap-2">
        <Icon icon="material-symbols:mail" width="24" height="24" />
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {{ $t('contactme.email') }}
          </label>
        </div>
      </div>
      <div class="grid md:gap-6">
        <!-- Nombre -->
        <div class="flex items-center gap-2">
          <Icon icon="bx:bxs-user" width="24" height="24" />
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="nameUser"
              id="nameUser"
              class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {{ $t('contactme.name') }}
            </label>
          </div>
        </div>
      </div>
      <!-- Texto -->
      <div class="flex items-center gap-2">
        <Icon icon="bx:bxs-message" width="24" height="24" />
        <div class="relative z-0 w-full mb-5 group">
          <textarea
            name="userText"
            id="userText"
            class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          ></textarea>
          <label
            for="floating_message"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {{ $t('contactme.message') }}
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-secondary w-full mt-5">
        {{ $t('contactme.send') }}
      </button>
    </form>
  </div>
</template>
