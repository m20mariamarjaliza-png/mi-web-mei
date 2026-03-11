<script setup lang="ts">
import { computed, ref } from "vue";
import PolaroidFrame from "@/components/PolaroidFrame.vue";
import transReelAmar from "@/assets/Trans_Reel_Amar_VF.mp4";
import transReelReir from "@/assets/Trans_Reel_Reir_VF.mp4";
import transReelUnir from "@/assets/Trans_Reel_Unir_VF.mp4";

const pestanaActiva = ref<"amar" | "reir" | "unir">("amar");

const descripcionAmar =
  "Reel de CONECTA centrado en el sentimiento de amar";

const descripcionReir =
  "Reel de CONECTA centrado en el sentimiento de reir";

const descripcionUnir =
  "Reel de CONECTA centrado en el sentimiento de unir";

const audiovisuales = [
  { src: transReelAmar, label: "Amar" },
  { src: transReelReir, label: "Reír" },
  { src: transReelUnir, label: "Unir" }
];

const indiceActual = ref(0);

const videoActual = computed(() => audiovisuales[indiceActual.value] || audiovisuales[0]);

const descripcionActual = computed(() => {
  if (!videoActual.value) return "";
  if (indiceActual.value === 0) return descripcionAmar;
  if (indiceActual.value === 1) return descripcionReir;
  return descripcionUnir;
});

const cambiarVideo = (direccion: 1 | -1) => {
  const total = audiovisuales.length;
  indiceActual.value = (indiceActual.value + direccion + total) % total;
};

const modalAbierto = ref(false);

const abrirModal = () => {
  modalAbierto.value = true;
};

const cerrarModal = () => {
  modalAbierto.value = false;
};

const cambiarModal = (direccion: 1 | -1) => {
  const total = audiovisuales.length;
  indiceActual.value = (indiceActual.value + direccion + total) % total;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">AUDIOVISUALES</h1>

      <div class="mb-8 flex gap-3 flex-wrap items-center">
        <button 
          class="px-4 py-2 border transition-colors" 
          :class="pestanaActiva === 'amar' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" 
          @click="pestanaActiva = 'amar'; indiceActual = 0"
        >
          Amar
        </button>
        <button 
          class="px-4 py-2 border transition-colors" 
          :class="pestanaActiva === 'reir' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" 
          @click="pestanaActiva = 'reir'; indiceActual = 1"
        >
          Reír
        </button>
        <button 
          class="px-4 py-2 border transition-colors" 
          :class="pestanaActiva === 'unir' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" 
          @click="pestanaActiva = 'unir'; indiceActual = 2"
        >
          Unir
        </button>
        <a 
          href="https://instagram.com/conectar_2026" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-pink-500 hover:text-pink-400 transition-colors ml-2 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          <span class="text-white text-sm">Redes sociales de la campaña "CONECTA"</span>
        </a>
      </div>

      <div class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarVideo(-1)">‹</button>
        <PolaroidFrame 
          :alt="videoActual.label" 
          :label="videoActual.label" 
          :description="descripcionActual" 
          @click="abrirModal"
        >
          <video 
            :src="videoActual.src" 
            :alt="videoActual.label"
            class="w-full h-full object-cover"
            controls
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarVideo(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">← Volver a trabajos</router-link>

      <div v-if="modalAbierto" class="fixed inset-0 bg-black/90 z-50 p-4 overflow-y-auto cursor-pointer" @click="cerrarModal">
        <button class="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <div class="min-h-full flex items-center justify-center">
          <video 
            :src="videoActual.src" 
            :alt="videoActual.label"
            class="w-[min(92vw,900px)] max-h-[74vh] h-auto object-contain rounded-lg shadow-2xl"
            controls
            @click.stop
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <button class="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>

