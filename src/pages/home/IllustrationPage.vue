<script setup lang="ts">
import { computed, ref } from "vue";
import al1 from "@/assets/al1.png";
import al2 from "@/assets/al2.png";
import al3 from "@/assets/al3.png";
import al4 from "@/assets/al4.png";
import comic from "@/assets/comic.png";

const pestanaActiva = ref<"narrativas" | "comic">("narrativas");

const narrativas = [al1, al2, al3, al4];
const comicCarpeta = [comic];

const indiceNarrativas = ref(0);
const indiceComic = ref(0);

const imagenNarrativa = computed(() => narrativas[indiceNarrativas.value] ?? narrativas[0]);
const imagenComic = computed(() => comicCarpeta[indiceComic.value] ?? comicCarpeta[0]);

const cambiarNarrativas = (direccion: 1 | -1) => {
  const total = narrativas.length;
  indiceNarrativas.value = (indiceNarrativas.value + direccion + total) % total;
};

const cambiarComic = (direccion: 1 | -1) => {
  const total = comicCarpeta.length;
  indiceComic.value = (indiceComic.value + direccion + total) % total;
};

type Grupo = "narrativas" | "comic";
const modalGrupo = ref<Grupo | null>(null);
const modalIndice = ref(0);

const imagenModal = computed(() => {
  if (modalGrupo.value === "narrativas") return narrativas[modalIndice.value] ?? null;
  if (modalGrupo.value === "comic") return comicCarpeta[modalIndice.value] ?? null;
  return null;
});

const abrirModal = (grupo: Grupo, indice: number) => {
  modalGrupo.value = grupo;
  modalIndice.value = indice;
};

const cerrarModal = () => {
  modalGrupo.value = null;
  modalIndice.value = 0;
};

const cambiarModal = (direccion: 1 | -1) => {
  if (!modalGrupo.value) return;

  if (modalGrupo.value === "narrativas") {
    const total = narrativas.length;
    const siguiente = (modalIndice.value + direccion + total) % total;
    modalIndice.value = siguiente;
    indiceNarrativas.value = siguiente;
    return;
  }

  const total = comicCarpeta.length;
  const siguiente = (modalIndice.value + direccion + total) % total;
  modalIndice.value = siguiente;
  indiceComic.value = siguiente;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">ILUSTRACIÓN</h1>

      <div class="mb-8 flex gap-3">
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'narrativas' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'narrativas'">Ilustración narrativas</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'comic' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'comic'">Comic</button>
      </div>

      <div v-if="pestanaActiva === 'narrativas'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarNarrativas(-1)">‹</button>
        <div class="bg-white p-3 pb-10 shadow-2xl">
          <div class="overflow-hidden">
            <img :src="imagenNarrativa" alt="Ilustración narrativa" class="block w-[260px] md:w-[320px] h-auto object-contain cursor-pointer" @click="abrirModal('narrativas', indiceNarrativas)">
          </div>
          <p class="text-black text-center mt-3 text-sm tracking-wide">Ilustración narrativas</p>
        </div>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarNarrativas(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'comic'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarComic(-1)">‹</button>
        <div class="bg-white p-3 pb-10 shadow-2xl">
          <div class="overflow-hidden">
            <img :src="imagenComic" alt="Comic" class="block w-[260px] md:w-[320px] h-auto object-contain cursor-pointer" @click="abrirModal('comic', indiceComic)">
          </div>
          <p class="text-black text-center mt-3 text-sm tracking-wide">Comic</p>
        </div>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarComic(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">← Volver a trabajos</router-link>

      <div v-if="modalGrupo" class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-pointer" @click="cerrarModal">
        <button class="absolute left-4 md:left-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <img :src="imagenModal ?? ''" alt="Ilustración ampliada" class="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl" @click.stop>
        <button class="absolute right-4 md:right-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
