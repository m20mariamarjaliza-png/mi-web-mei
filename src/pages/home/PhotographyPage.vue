<script setup lang="ts">
import { computed, ref } from "vue";
import foto1 from "@/assets/foto1.png";
import foto2 from "@/assets/foto2.png";
import foto3 from "@/assets/foto3.png";
import foto4 from "@/assets/foto4.png";
import foto5 from "@/assets/foto5.png";
import foto6 from "@/assets/foto6.png";

const pestanaActiva = ref<"retratos" | "bodegones">("retratos");

const retratos = [foto1, foto2, foto3];
const bodegones = [foto4, foto5, foto6];

const indiceRetratos = ref(0);
const indiceBodegones = ref(0);

const imagenRetrato = computed(() => retratos[indiceRetratos.value] ?? retratos[0]);
const imagenBodegon = computed(() => bodegones[indiceBodegones.value] ?? bodegones[0]);

const cambiarRetratos = (direccion: 1 | -1) => {
  const total = retratos.length;
  indiceRetratos.value = (indiceRetratos.value + direccion + total) % total;
};

const cambiarBodegones = (direccion: 1 | -1) => {
  const total = bodegones.length;
  indiceBodegones.value = (indiceBodegones.value + direccion + total) % total;
};

type Grupo = "retratos" | "bodegones";
const modalGrupo = ref<Grupo | null>(null);
const modalIndice = ref(0);

const imagenModal = computed(() => {
  if (modalGrupo.value === "retratos") return retratos[modalIndice.value] ?? null;
  if (modalGrupo.value === "bodegones") return bodegones[modalIndice.value] ?? null;
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
    indiceRetratos.value = siguiente;
    return;
  }

  const total = bodegones.length;
  const siguiente = (modalIndice.value + direccion + total) % total;
  modalIndice.value = siguiente;
  indiceBodegones.value = siguiente;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">FOTOGRAFÍA</h1>

      <div class="mb-8 flex gap-3">
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'retratos' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'retratos'">Retratos</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'bodegones' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'bodegones'">Bodegones</button>
      </div>

      <div v-if="pestanaActiva === 'retratos'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarRetratos(-1)">‹</button>
        <div class="bg-white p-3 pb-10 shadow-2xl">
          <div class="overflow-hidden">
            <img :src="imagenRetrato" alt="Retrato" class="block w-[260px] md:w-[320px] h-auto object-contain cursor-pointer" @click="abrirModal('retratos', indiceRetratos)">
          </div>
          <p class="text-black text-center mt-3 text-sm tracking-wide">Retratos</p>
        </div>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarRetratos(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'bodegones'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarBodegones(-1)">‹</button>
        <div class="bg-white p-3 pb-10 shadow-2xl">
          <div class="overflow-hidden">
            <img :src="imagenBodegon" alt="Bodegón" class="block w-[260px] md:w-[320px] h-auto object-contain cursor-pointer" @click="abrirModal('bodegones', indiceBodegones)">
          </div>
          <p class="text-black text-center mt-3 text-sm tracking-wide">Bodegones</p>
        </div>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarBodegones(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">← Volver a trabajos</router-link>

      <div v-if="modalGrupo" class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-pointer" @click="cerrarModal">
        <button class="absolute left-4 md:left-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <img :src="imagenModal ?? ''" alt="Foto ampliada" class="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl" @click.stop>
        <button class="absolute right-4 md:right-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
