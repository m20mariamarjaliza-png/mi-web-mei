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
  <div class="min-h-screen bg-[#111] p-20 text-white">
    <h1 class="text-6xl font-bold mb-16">MIS TRABAJOS</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="projectLink(project.id)"
        class="border border-[#ff0080] p-10 h-64 flex items-center justify-center hover:bg-[#ff0080] transition-all cursor-pointer text-center"
      >
        <h2 class="text-2xl font-bold">{{ project.title }}</h2>
      </router-link>
    </div>

    <router-link to="/" class="mt-16 block text-gray-400 underline hover:text-white">
      ← Volver al inicio
    </router-link>
  </div>
</template>
