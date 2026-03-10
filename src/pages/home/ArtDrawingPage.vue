<script setup lang="ts">
import { computed, ref } from "vue";
import PolaroidFrame from "@/components/PolaroidFrame.vue";
import dib1 from "@/assets/dib1.jpeg";
import dib2 from "@/assets/dib2.jpeg";
import dib3 from "@/assets/dib3.jpeg";
import dib4 from "@/assets/dib4.jpeg";
import dib5 from "@/assets/dib5.jpeg";
import dib6 from "@/assets/dib6.jpeg";
import dib7 from "@/assets/dib7.jpeg";
import dib8 from "@/assets/dib8.jpeg";
import dib9 from "@/assets/dib9.jpeg";
import dib10 from "@/assets/dib10.jpeg";
import dib11 from "@/assets/dib11.jpeg";
import dib12 from "@/assets/dib12.jpeg";
import dib13 from "@/assets/dib13.jpeg";
import dib14 from "@/assets/dib14.jpeg";
import dib15 from "@/assets/dib15.jpeg";
import dib27 from "@/assets/dib27.jpeg";
import dib28 from "@/assets/dib28.jpeg";
import dib29 from "@/assets/dib29.jpeg";
import dib30 from "@/assets/dib30.jpeg";
import dib32 from "@/assets/dib32.jpeg";
import dib36 from "@/assets/dib36.jpeg";
import dib42 from "@/assets/dib42.jpeg";
import dib44 from "@/assets/dib44.jpeg";
import dib47 from "@/assets/dib47.jpeg";

const pestanaActiva = ref<"retratos" | "anatomico">("retratos");
const retratos = [dib4, dib5, dib12, dib13, dib28, dib29, dib30, dib32, dib36, dib42];
const anatomico = [dib1, dib2, dib3, dib6, dib7, dib8, dib9, dib10, dib11, dib14, dib15, dib27, dib44, dib47];

const indiceRetrato = ref(0);
const indiceAnatomico = ref(0);

const retratoActual = computed(() => retratos[indiceRetrato.value] ?? retratos[0]);
const anatomicoActual = computed(() => anatomico[indiceAnatomico.value] ?? anatomico[0]);

const cambiarRetrato = (direccion: 1 | -1) => {
  const total = retratos.length;
  indiceRetrato.value = (indiceRetrato.value + direccion + total) % total;
};

const cambiarAnatomico = (direccion: 1 | -1) => {
  const total = anatomico.length;
  indiceAnatomico.value = (indiceAnatomico.value + direccion + total) % total;
};

type Grupo = "retratos" | "anatomico";
const modalGrupo = ref<Grupo | null>(null);
const modalIndice = ref(0);

const imagenModal = computed(() => {
  if (modalGrupo.value === "retratos") return retratos[modalIndice.value] ?? null;
  if (modalGrupo.value === "anatomico") return anatomico[modalIndice.value] ?? null;
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

  if (modalGrupo.value === "retratos") {
    const total = retratos.length;
    const siguiente = (modalIndice.value + direccion + total) % total;
    modalIndice.value = siguiente;
    indiceRetrato.value = siguiente;
    return;
  }

  const total = anatomico.length;
  const siguiente = (modalIndice.value + direccion + total) % total;
  modalIndice.value = siguiente;
  indiceAnatomico.value = siguiente;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">DIBUJO ARTÍSTICO</h1>

      <div class="mb-8 flex gap-3">
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'retratos' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'retratos'">Retratos</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'anatomico' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'anatomico'">Dibujo Anatómico</button>
      </div>

      <div v-if="pestanaActiva === 'retratos'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarRetrato(-1)">‹</button>
        <PolaroidFrame :src="retratoActual" alt="Retrato" caption="Retratos" @click="abrirModal('retratos', indiceRetrato)" />
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarRetrato(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'anatomico'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarAnatomico(-1)">‹</button>
        <PolaroidFrame :src="anatomicoActual" alt="Dibujo anatómico" caption="Dibujo Anatómico" @click="abrirModal('anatomico', indiceAnatomico)" />
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarAnatomico(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">← Volver a trabajos</router-link>

      <div v-if="modalGrupo" class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-pointer" @click="cerrarModal">
        <button class="absolute left-4 md:left-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <img :src="imagenModal ?? ''" alt="Dibujo ampliado" class="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl" @click.stop>
        <button class="absolute right-4 md:right-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
