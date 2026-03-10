<script setup lang="ts">
import { projects } from "@/data/projects";

const projectLink = (id: string) => {
  if (id === "1") return "/art-drawing";
  if (id === "2") return "/graphic-design";
  if (id === "3") return "/volume";
  if (id === "5") return "/typography";
  if (id === "6") return "/photography";
  if (id === "7") return "/illustration";
  return `/project/${id}`;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-10">
    <h1 class="text-4xl md:text-6xl font-bold mb-10 md:mb-16">MIS TRABAJOS</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="projectLink(project.id)"
        class="border border-[#ff0080] p-6 md:p-10 h-40 md:h-64 flex items-center justify-center hover:bg-[#ff0080] transition-all cursor-pointer text-center"
      >
        <h2 class="text-xl md:text-2xl font-bold">{{ project.title }}</h2>
      </router-link>
    </div>

    <router-link to="/" class="mt-12 md:mt-16 block text-gray-400 underline hover:text-white">
      ← Volver al inicio
    </router-link>
  </div>
</template>
