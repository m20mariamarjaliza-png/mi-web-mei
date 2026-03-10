<script setup lang="ts">
import { computed, ref } from "vue";
import PolaroidFrame from "@/components/PolaroidFrame.vue";
import tipo1 from "@/assets/tipo1.png";
import tipo2 from "@/assets/tipo2.png";
import tipo3 from "@/assets/tipo3.png";
import rev1 from "@/assets/rev1.png";
import rev2 from "@/assets/rev2.png";
import rev3 from "@/assets/rev3.png";

const pestanaActiva = ref<"tipo" | "revista">("tipo");

const descripcionLetras =
  "Proyecto de diseño experimental que explora la relación entre la tipografía y su representación física. Partiendo de la creación de un alfabeto original, desarrollé tres caracteres diseñados desde cero, otorgándoles una personalidad única a través de la forma, la textura y el entorno. La serie fotográfica resultante no solo presenta las letras, sino que las sitúa en un contexto que realza sus cualidades materiales, transformando el lenguaje en un objeto artístico tangible.";

const descripcionRevista =
  "Desarrollo y maquetación integral de una publicación editorial, desde la conceptualización de la retícula hasta el diseño final, sin ilustraciones. Este proyecto se enfocó en la creación de un sistema tipográfico coherente, la gestión de espacios en blanco y el uso estratégico de la jerarquía visual para guiar la lectura. Un ejercicio de diseño editorial técnico donde el rigor en la composición y el uso avanzado de Adobe InDesign garantizan una experiencia de usuario fluida y equilibrada.";

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
        <PolaroidFrame alt="Tipografía" caption="Letras" :description="descripcionLetras" @click="abrirModal('tipo', indiceTipo)">
          <img :src="imagenTipo" alt="Tipografía" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarTipo(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'revista'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarRevista(-1)">‹</button>
        <PolaroidFrame alt="Revista" caption="Revista" :description="descripcionRevista" @click="abrirModal('revista', indiceRevista)">
          <img :src="imagenRevista" alt="Revista" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarRevista(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">
        ← Volver a trabajos
      </router-link>

      <div v-if="modalGrupo" class="fixed inset-0 bg-black/90 z-50 p-4 overflow-y-auto cursor-pointer" @click="cerrarModal">
        <button class="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <div class="min-h-full flex items-center justify-center">
          <img :src="imagenModal ?? ''" alt="Tipografía ampliada" class="w-[min(92vw,900px)] max-h-[74vh] h-auto object-contain rounded-lg shadow-2xl" @click.stop>
        </div>
        <button class="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
