<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const showModal = ref(false);
const errorMessage = ref('');

const handleSubmit = async (event: Event) => {
  event.preventDefault();

  // Enviar formulario con FormSubmit
  try {
    const response = await fetch('https://formsubmit.co/ajax/isnotcristhian@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    const data = await response.json();

    if (data.success) {
      showModal.value = true;
      formData.value = { name: '', email: '', message: '' }; // Limpia el formulario
      setTimeout(() => {
        showModal.value = false;
      }, 3000);
    } else {
      throw new Error('Error en el servidor');
    }
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    errorMessage.value = 'No se pudo enviar el mensaje. Inténtalo más tarde.';
  }
};
</script>

<template>
  <form @submit="handleSubmit" class="flex flex-col gap-4 w-full max-w-md mx-auto p-6">
    <!-- Formulario -->
    <input 
      v-model="formData.name" 
      placeholder="Nombre" 
      required
      class="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
    />
    <input 
      v-model="formData.email" 
      placeholder="Correo" 
      type="email" 
      required
      class="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea 
      v-model="formData.message" 
      placeholder="Mensaje" 
      required
      class="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
    ></textarea>
    <button 
      type="submit"
      class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
    >
      Enviar
    </button>

    <p v-if="showModal" class="text-green-500 text-center">¡Mensaje enviado exitosamente!</p>
    <p v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</p>
  </form>
</template>