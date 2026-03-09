<script setup lang="ts">
import foto1 from "@/assets/foto1.png";
import foto2 from "@/assets/foto2.png";
import foto3 from "@/assets/foto3.png";
import foto4 from "@/assets/foto4.png";
import foto5 from "@/assets/foto5.png";
import foto6 from "@/assets/foto6.png";

const fotos = [
  { src: foto1, orientacion: "vertical" },
  { src: foto2, orientacion: "vertical" },
  { src: foto3, orientacion: "horizontal-pequena" },
  { src: foto4, orientacion: "horizontal-pequena" },
  { src: foto5, orientacion: "horizontal-pequena" },
  { src: foto6, orientacion: "horizontal-pequena" },
] as const;
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">
        FOTOGRAFÍA
      </h1>

      <div class="space-y-0">
        <div
          v-for="(foto, index) in fotos"
          :key="index"
          class="flex justify-center"
        >
          <div
            :class="
              index >= 2
                ? 'w-[420px] h-[280px] md:w-[480px] md:h-[320px]'
                : 'w-[280px] h-[420px] md:w-[320px] md:h-[480px]'
            "
            class="overflow-hidden flex items-center justify-center"
          >
            <img
              :src="foto.src"
              :alt="`Foto ${index + 1}`"
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


