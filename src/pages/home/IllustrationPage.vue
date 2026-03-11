<script setup lang="ts">
import { computed, ref } from "vue";
import PolaroidFrame from "@/components/PolaroidFrame.vue";
import al1 from "@/assets/al1.png";
import al2 from "@/assets/al2.png";
import al3 from "@/assets/al3.png";
import al4 from "@/assets/al4.png";
import comic from "@/assets/comic.png";
import revista from "@/assets/revista.png";

const pestanaActiva = ref<"narrativas" | "comic" | "editorial">("narrativas");

const descripcionNarrativa =
  "Reinterpretación visual del clásico literario de Lewis Carroll. El proyecto consistió en el diseño de las guardas, concebidas como un patrón simbólico que anticipa la atmósfera onírica y surrealista del relato, y la creación de dos ilustraciones de página completa.";

const descripcionComic =
  "Desarrollo integral de una historia corta en formato cómic, abarcando desde el guion y el storyboard hasta el acabado final.";

const descripcionEditorial =
  "Proyecto de dirección de arte y diseño editorial centrado en la síntesis conceptual de textos complejos.";

const narrativas = [al1, al2, al3, al4];
const comicCarpeta = [comic];
const editorial = [revista];

const indiceNarrativas = ref(0);
const indiceComic = ref(0);
const indiceEditorial = ref(0);

const imagenNarrativa = computed(() => narrativas[indiceNarrativas.value] ?? narrativas[0]);
const imagenComic = computed(() => comicCarpeta[indiceComic.value] ?? comicCarpeta[0]);
const imagenEditorial = computed(() => editorial[indiceEditorial.value] ?? editorial[0]);

const cambiarNarrativas = (direccion: 1 | -1) => {
  const total = narrativas.length;
  indiceNarrativas.value = (indiceNarrativas.value + direccion + total) % total;
};

const cambiarComic = (direccion: 1 | -1) => {
  const total = comicCarpeta.length;
  indiceComic.value = (indiceComic.value + direccion + total) % total;
};

const cambiarEditorial = (direccion: 1 | -1) => {
  const total = editorial.length;
  indiceEditorial.value = (indiceEditorial.value + direccion + total) % total;
};

type Grupo = "narrativas" | "comic" | "editorial";
const modalGrupo = ref<Grupo | null>(null);
const modalIndice = ref(0);

const imagenModal = computed(() => {
  if (modalGrupo.value === "narrativas") return narrativas[modalIndice.value] ?? null;
  if (modalGrupo.value === "comic") return comicCarpeta[modalIndice.value] ?? null;
  if (modalGrupo.value === "editorial") return editorial[modalIndice.value] ?? null;
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

  if (modalGrupo.value === "comic") {
    const total = comicCarpeta.length;
    const siguiente = (modalIndice.value + direccion + total) % total;
    modalIndice.value = siguiente;
    indiceComic.value = siguiente;
    return;
  }

  const total = editorial.length;
  const siguiente = (modalIndice.value + direccion + total) % total;
  modalIndice.value = siguiente;
  indiceEditorial.value = siguiente;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">ILUSTRACIÓN</h1>

      <div class="mb-8 flex gap-3 flex-wrap">
<button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'narrativas' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'narrativas'">Ilustración narrativa</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'comic' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'comic'">Comic</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'editorial' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'editorial'">Ilustración editorial</button>
      </div>

      <div v-if="pestanaActiva === 'narrativas'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarNarrativas(-1)">‹</button>
        <PolaroidFrame alt="Ilustración narrativa" label="Ilustración narrativa" :description="descripcionNarrativa" @click="abrirModal('narrativas', indiceNarrativas)">
          <img :src="imagenNarrativa" alt="Ilustración narrativa" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarNarrativas(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'comic'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarComic(-1)">‹</button>
        <PolaroidFrame alt="Comic" label="Comic" :description="descripcionComic" @click="abrirModal('comic', indiceComic)">
          <img :src="imagenComic" alt="Comic" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarComic(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'editorial'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarEditorial(-1)">‹</button>
        <PolaroidFrame alt="Ilustración editorial" label="Ilustración editorial" :description="descripcionEditorial" @click="abrirModal('editorial', indiceEditorial)">
          <img :src="imagenEditorial" alt="Ilustración editorial" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarEditorial(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">← Volver a trabajos</router-link>

      <div v-if="modalGrupo" class="fixed inset-0 bg-black/90 z-50 p-4 overflow-y-auto cursor-pointer" @click="cerrarModal">
        <button class="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <div class="min-h-full flex items-center justify-center">
          <img :src="imagenModal ?? ''" alt="Ilustración ampliada" class="w-[min(92vw,900px)] max-h-[74vh] h-auto object-contain rounded-lg shadow-2xl" @click.stop>
        </div>
        <button class="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
