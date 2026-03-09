<script setup lang="ts">
// Tu lógica aquí (si la tienes)
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center p-20">
    <div class="grid grid-cols-6 gap-2 w-16 mb-10">
      <div v-for="n in 36" :key="n" class="w-2 h-2 bg-gray-600 rounded-full"></div>
    </div>
    
    <h1 class="text-[150px] font-black leading-none text-white">
      PORT<span class="text-[#ff0080]">FOLIO</span>
    </h1>
    
    <p class="text-2xl mt-4 text-white">BIENVENIDA/O A MI ESPACIO CREATIVO</p>
    
    <router-link 
      to="/projects" 
      class="mt-10 border border-[#ff0080] py-4 px-8 w-64 text-center hover:bg-[#ff0080] transition-all text-white"
    >
      VER MIS TRABAJOS
    </router-link> 
  </div>
</template>