<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/data/projects";

const route = useRoute();

// Buscamos el proyecto usando el ID que viene de la URL
const project = computed(() => {
  return projects.find((p) => p.id === route.params.id);
});
</script>

<template>
  <div v-if="project" class="min-h-screen bg-[#111] p-10 text-white">
    <h1 class="text-5xl font-bold text-[#ff0080]">
      {{ (project as any).title }}
    </h1>
    
    <div class="mt-8">
      <img 
        :src="(project as any).image" 
        :alt="(project as any).title" 
        class="rounded-xl border border-gray-700 shadow-2xl max-w-lg"
      />
    </div>

    <p class="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl">
      {{ (project as any).description }}
    </p>

    <router-link to="/proyectos" class="mt-12 inline-block text-[#ff0080] underline hover:text-white transition-colors">
      ← Volver al listado
    </router-link>
  </div>

  <div v-else class="min-h-screen bg-[#111] p-10 text-white">
    <h1 class="text-3xl">Proyecto no encontrado</h1>
    <router-link to="/proyectos" class="text-blue-400 underline">Volver al listado</router-link>
  </div>
</template>