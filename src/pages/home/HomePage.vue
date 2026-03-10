<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-10">
    <div class="grid grid-cols-6 gap-2 w-16 mb-8 md:mb-10">
      <div v-for="n in 36" :key="n" class="w-2 h-2 bg-gray-600 rounded-full"></div>
    </div>

    <h1 class="text-[56px] sm:text-[84px] md:text-[120px] lg:text-[150px] font-black leading-none text-white break-words">
      PORT<span class="text-[#ff0080]">FOLIO</span>
    </h1>

    <p class="text-base sm:text-xl md:text-2xl mt-4 text-white">BIENVENIDA/O A MI ESPACIO CREATIVO</p>

    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10 w-full sm:w-auto">
      <router-link to="/projects" class="border border-[#ff0080] py-3 md:py-4 px-6 md:px-8 w-full sm:w-64 text-center hover:bg-[#ff0080] transition-all text-white">
        VER MIS TRABAJOS
      </router-link>

      <router-link to="/about" class="border border-white py-3 md:py-4 px-6 md:px-8 w-full sm:w-64 text-center hover:bg-white hover:text-black transition-all text-white">
        SOBRE MÍ
      </router-link>

      <router-link to="/contact" class="border border-white py-3 md:py-4 px-6 md:px-8 w-full sm:w-64 text-center hover:bg-white hover:text-black transition-all text-white">
        CONTACTO
      </router-link>
    </div>
  </div>
</template>
