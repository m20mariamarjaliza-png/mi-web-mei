<script setup lang="ts">
// Por ahora dejamos esto vacío, añadiremos los imports cuando tengas las fotos
</script>

<template>
  <div class="min-h-screen bg-white text-black p-20">
    <h1 class="text-6xl font-black mb-16 border-l-8 border-[#ff0080] pl-6">SOBRE MÍ</h1>

    <div class="flex items-center gap-10 mb-20">
      <div class="w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center">
        <span>Foto</span>
      </div>
      <div class="max-w-2xl">
        <h2 class="text-2xl font-bold mb-4">PERFIL PROFESIONAL</h2>
        <p class="text-lg text-gray-700">
          Soy María, una creativa multidisciplinar enfocada en el diseño digital. 
          Desarrollo mis proyectos desde una base tradicional manual hasta la ejecución técnica final.
        </p>
      </div>
    </div>

    <h2 class="text-2xl font-bold mb-10">FORMACIÓN ACADÉMICA</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div class="border p-6 rounded-lg shadow-sm">
        <div class="w-full h-48 bg-gray-200 mb-4 rounded flex items-center justify-center">
          <span>Imagen pendiente</span>
        </div>
        <h3 class="text-xl font-bold">Bachillerato de Artes</h3>
        <p class="text-gray-600">Escuela de Artes | 2020 - 2022</p>
      </div>

      <div class="border p-6 rounded-lg shadow-sm">
        <div class="w-full h-48 bg-gray-200 mb-4 rounded flex items-center justify-center">
          <span>Imagen pendiente</span>
        </div>
        <h3 class="text-xl font-bold">Grado en Diseño y Tecnologías Creativas</h3>
        <p class="text-gray-600">Universitat Politècnica de València (UPV) | 2022 - Actualidad</p>
      </div>
      
    </div>
  </div>
</template>