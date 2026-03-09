<script setup lang="ts">
import tipoq from "@/assets/tipo1.png";
import tipo2 from "@/assets/tipo2.png";
import tipo3 from "@/assets/tipo3.png";

const imagenes = [tipoq, tipo2, tipo3];
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">
        TIPOGRAFÍA
      </h1>

      <div class="space-y-0">
        <div
          v-for="(imagen, index) in imagenes"
          :key="index"
          class="flex justify-center"
        >
          <div class="w-[280px] h-[420px] md:w-[320px] md:h-[480px] overflow-hidden flex items-center justify-center">
            <img
              :src="imagen"
              :alt="`Tipografía ${index + 1}`"
              class="block w-full h-full object-contain"
            >
          </div>
        </div>
      </div>

      <router-link
        to="/projects"
        class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors"
      >
        ← Volver a trabajos
      </router-link>
    </div>
  </div>
</template>


