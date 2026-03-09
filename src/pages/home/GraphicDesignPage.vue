<script setup lang="ts">
import diseno1 from "@/assets/diseño1.png";
import diseno2 from "@/assets/diseño2.png";
import diseno3 from "@/assets/diseño3.png";
import diseno4 from "@/assets/diseño4.png";
import diseno5 from "@/assets/diseño5.png";
import diseno6 from "@/assets/diseño6.png";
import diseno7 from "@/assets/diseño7.png";

const imagenes = [diseno1, diseno2, diseno3, diseno4, diseno5, diseno6, diseno7];
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">
        DISEÑO GRÁFICO
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
              :alt="`Diseño ${index + 1}`"
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
