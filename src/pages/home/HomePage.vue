<template>
  <main class="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center p-10 font-sans">
    
    <div class="grid grid-cols-6 gap-2 mb-8">
      <div v-for="i in 36" :key="i" class="w-2 h-2 bg-pink-600 rounded-sm"></div>
    </div>
    
    <h1 class="text-[120px] font-black uppercase tracking-tighter leading-none">
      <span class="text-white">PORT</span><span class="text-pink-600">FOLIO</span>
    </h1>
    
    <p class="text-2xl mt-4 mb-10 text-gray-300">BIENVENIDA/O A MI ESPACIO CREATIVO</p>
    
    <RouterLink to="/projects" class="border-2 border-pink-600 text-pink-600 px-8 py-3 hover:bg-pink-600 hover:text-white transition-all font-bold">
      VER MIS TRABAJOS
    </RouterLink>
  </main>
</template>