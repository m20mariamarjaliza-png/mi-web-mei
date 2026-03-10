<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-10">
    <div class="grid grid-cols-16 gap-2 w-[clamp(14rem,34vw,26rem)] mb-8 md:mb-10">
      <div v-for="n in 128" :key="n" class="w-2 h-2 bg-[#ff0080]/60 rounded-full"></div>
    </div>

    <h1 class="text-[56px] sm:text-[84px] md:text-[120px] lg:text-[150px] font-black leading-none text-white break-words">
      PORT<span class="text-[#ff0080]">FOLIO</span>
    </h1>

    <p class="text-base sm:text-xl md:text-2xl mt-4 text-white">BIENVENIDA/O A MI ESPACIO CREATIVO</p>

    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10 w-full sm:w-auto">
      <div
        @click="router.push('/projects')"
        class="border border-[#ff0080] py-3 md:py-4 px-6 md:px-8 w-full sm:w-64 text-center text-white cursor-pointer transition-all duration-300 hover:bg-[#ff0080] hover:text-black"
      >
        VER MIS TRABAJOS
      </div>

      <div
        @click="router.push('/about')"
        class="border border-white py-3 md:py-4 px-6 md:px-8 w-full sm:w-64 text-center text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
      >
        SOBRE MÍ
      </div>

      <div
        @click="router.push('/contact')"
        class="border border-white py-3 md:py-4 px-6 md:px-8 w-full sm:w-64 text-center text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
      >
        CONTACTO
      </div>
    </div>
  </div>
</template>
