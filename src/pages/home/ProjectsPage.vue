<script setup lang="ts">
import { projects } from "@/data/projects";

const projectLink = (id: string) => {
  if (id === "1") return "/art-drawing";
  if (id === "2") return "/graphic-design";
  if (id === "3") return "/volume";
  if (id === "5") return "/typography";
  if (id === "6") return "/photography";
  if (id === "7") return "/illustration";
  if (id === "8") return "/audiovisuales";
  return `/project/${id}`;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-10">
    <h1 class="text-4xl md:text-6xl font-black mb-10 md:mb-16 border-l-8 border-[#ff0080] pl-5">MIS TRABAJOS</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
        @click="$router.push(projectLink(project.id))"
        @mouseenter="e => (e.currentTarget as HTMLElement).style.backgroundColor = '#ff0080'"
        @mouseleave="e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'"
        class="border-2 border-pink-500 p-6 md:p-10 h-40 md:h-64 flex items-center justify-center text-center text-white cursor-pointer transition-colors duration-300 bg-transparent hover:bg-pink-500 hover:text-black"
      >
        <h2 class="text-xl md:text-2xl font-bold">{{ project.title }}</h2>
      </div>
    </div>

    <router-link to="/" class="mt-12 md:mt-16 block text-gray-400 underline hover:text-white">
      ← Volver al inicio
    </router-link>
  </div>
</template>
