<template>
  <header class="h-screen bg-[#1a1a1a] text-white p-10 relative overflow-hidden flex flex-col justify-center">
    <div class="absolute top-10 left-10 grid grid-cols-5 gap-2 opacity-30">
      <div v-for="i in 25" :key="i" class="w-2 h-2 bg-mooral-pink rounded-full"></div>
    </div>

    <div class="relative z-10 max-w-4xl">
      <h1 class="text-[140px] font-black uppercase leading-[0.9] tracking-tighter">
        PORT<span class="text-mooral-pink">FOLIO</span>
      </h1>
      
      <p class="mt-8 text-3xl font-light uppercase tracking-widest text-gray-300">
        Bienvenida/o a mi espacio creativo
      </p>

      <RouterLink 
        to="/projects" 
        class="inline-block mt-10 border-2 border-mooral-pink text-mooral-pink px-8 py-3 uppercase font-bold hover:bg-mooral-pink hover:text-white transition-all"
      >
        Ver mis trabajos
      </RouterLink>
    </div>
  </header>
</template>