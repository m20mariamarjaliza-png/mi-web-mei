<script setup lang="ts">
import { computed, ref } from "vue";
import tipo1 from "@/assets/tipo1.png";
import tipo2 from "@/assets/tipo2.png";
import tipo3 from "@/assets/tipo3.png";
import rev1 from "@/assets/rev1.png";
import rev2 from "@/assets/rev2.png";
import rev3 from "@/assets/rev3.png";

const pestanaActiva = ref<"tipo" | "revista">("tipo");

const tipo = [tipo1, tipo2, tipo3];
const revista = [rev1, rev2, rev3];

const indiceTipo = ref(0);
const indiceRevista = ref(0);

const imagenTipo = computed(() => tipo[indiceTipo.value] ?? tipo[0]);
const imagenRevista = computed(() => revista[indiceRevista.value] ?? revista[0]);

const cambiarTipo = (direccion: 1 | -1) => {
  const total = tipo.length;
  indiceTipo.value = (indiceTipo.value + direccion + total) % total;
};

const cambiarRevista = (direccion: 1 | -1) => {
  const total = revista.length;
  indiceRevista.value = (indiceRevista.value + direccion + total) % total;
};

type Grupo = "tipo" | "revista";
const modalGrupo = ref<Grupo | null>(null);
const modalIndice = ref(0);

const imagenModal = computed(() => {
  if (modalGrupo.value === "tipo") return tipo[modalIndice.value] ?? null;
  if (modalGrupo.value === "revista") return revista[modalIndice.value] ?? null;
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

  if (modalGrupo.value === "tipo") {
    const total = tipo.length;
    const siguiente = (modalIndice.value + direccion + total) % total;
    modalIndice.value = siguiente;
    indiceTipo.value = siguiente;
    return;
  }

  const total = revista.length;
  const siguiente = (modalIndice.value + direccion + total) % total;
  modalIndice.value = siguiente;
  indiceRevista.value = siguiente;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">TIPOGRAFÍA</h1>

      <div class="mb-8 flex gap-3">
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'tipo' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'tipo'">Letras</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'revista' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'revista'">Revista</button>
      </div>

      <div v-if="pestanaActiva === 'tipo'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarTipo(-1)">‹</button>

        <div class="bg-white p-3 pb-10 shadow-2xl">
          <div class="overflow-hidden">
            <img
              :src="imagenTipo"
              alt="Tipografía"
              class="block w-[260px] md:w-[320px] h-auto object-contain cursor-pointer"
              @click="abrirModal('tipo', indiceTipo)"
            >
          </div>
          <p class="text-black text-center mt-3 text-sm tracking-wide">Letras</p>
        </div>

        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarTipo(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'revista'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarRevista(-1)">‹</button>

        <div class="bg-white p-3 pb-10 shadow-2xl">
          <div class="overflow-hidden">
            <img
              :src="imagenRevista"
              alt="Revista"
              class="block w-[260px] md:w-[320px] h-auto object-contain cursor-pointer"
              @click="abrirModal('revista', indiceRevista)"
            >
          </div>
          <p class="text-black text-center mt-3 text-sm tracking-wide">Revista</p>
        </div>

        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarRevista(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">
        ← Volver a trabajos
      </router-link>

      <div
        v-if="modalGrupo"
        class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-pointer"
        @click="cerrarModal"
      >
        <button class="absolute left-4 md:left-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <img :src="imagenModal ?? ''" alt="Tipografía ampliada" class="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl" @click.stop>
        <button class="absolute right-4 md:right-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
