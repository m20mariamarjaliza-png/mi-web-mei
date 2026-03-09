<script setup lang="ts">
import { ref } from 'vue';

// Estado para controlar la imagen abierta
const imagenAbierta = ref<string | null>(null);

const abrirImagen = (src: string) => {
  imagenAbierta.value = src;
};

const cerrarImagen = () => {
  imagenAbierta.value = null;
};
</script>

<template>
  <div class="min-h-screen bg-white text-black p-20">
    <h2 class="text-2xl font-bold mb-10">FORMACIÓN ACADÉMICA</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div class="border p-6 rounded-lg shadow-sm cursor-pointer hover:scale-105 transition-transform" 
           @click="abrirImagen('/ruta/a/tu-foto1.jpg')">
        <img src="/ruta/a/tu-foto1.jpg" class="w-full h-48 object-cover mb-4 rounded">
        <h3 class="text-xl font-bold">Bachillerato de Artes</h3>
      </div>

      <div class="border p-6 rounded-lg shadow-sm cursor-pointer hover:scale-105 transition-transform" 
           @click="abrirImagen('/ruta/a/tu-foto2.jpg')">
        <img src="/ruta/a/tu-foto2.jpg" class="w-full h-48 object-cover mb-4 rounded">
        <h3 class="text-xl font-bold">Grado en Diseño...</h3>
      </div>
    </div>

    <div v-if="imagenAbierta" 
         class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-10"
         @click="cerrarImagen">
      <img :src="imagenAbierta" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl">
    </div>
  </div>
</template>