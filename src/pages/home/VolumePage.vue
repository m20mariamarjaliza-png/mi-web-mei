<script setup lang="ts">
import { computed, ref } from "vue";
import PolaroidFrame from "@/components/PolaroidFrame.vue";
import vol2 from "@/assets/vol2.png";
import vol3 from "@/assets/vol3.png";
import vol4 from "@/assets/vol4.png";
import vol5 from "@/assets/vol5.png";
import lata from "@/assets/lata.jpeg";
import lata2 from "@/assets/lata2.png";

const pestanaActiva = ref<"bosque" | "barro" | "3d">("bosque");

const descripcionBosque =
  "Bajo el nombre de 'Bosque', este conjunto escultórico nace del desafío de convertir elementos de distinta naturaleza en una unidad armónica. La obra contrapone la ligereza técnica del poliestireno (con un acabado mineralizado que evoca cemento) frente a la nobleza tradicional de la arcilla. El proyecto explora cómo diferentes procesos de construcción pueden converger en una estética coherente, creando una pieza de diseño decorativo que habita el espacio con serenidad y equilibrio.";

const descripcionBarro =
  "Ejercicio de diseño de producto centrado en la reinterpretación de objetos cotidianos mediante técnicas cerámicas tradicionales. El proyecto consistió en el modelado manual de una lata, enfrentando el desafío técnico de ahuecar la pieza para garantizar su correcta cocción en horno. Este trabajo es una exploración sobre la metamorfosis de los materiales: cómo un objeto industrial y efímero se transforma en una pieza de arte permanente a través del fuego y el trabajo artesanal";

const descripcionTresD =
  "Ejercicio de modelado 3D enfocado en la síntesis de personajes y formas orgánicas. El objetivo fue transformar conceptos simples en piezas tridimensionales mediante un control preciso de la malla, optimizando la topología para lograr una estética limpia y minimalista. Este proyecto explora la aplicación de materiales digitales y técnicas de iluminación en Blender, creando un conjunto coherente que destaca por su simplicidad y claridad visual.";

const bosque = [vol2, vol3, vol4, vol5];
const barro = [lata, lata2];
const tresD = (() => {
  // Auto-include `figuritas` + `figuritas 2` (or similar) when present in `src/assets`.
  const modulesFiguritas = import.meta.glob("../../assets/figuritas*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  }) as Record<string, string>;

  // Some assets are named with a typo: `fihuritas 2.png`.
  const modulesFihuritas = import.meta.glob("../../assets/fihuritas*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  }) as Record<string, string>;

  const modules = { ...modulesFiguritas, ...modulesFihuritas };

  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src)
    .filter((src, idx, arr) => arr.indexOf(src) === idx);
})();

const indiceBosque = ref(0);
const indiceBarro = ref(0);
const indiceTresD = ref(0);

const imagenBosque = computed(() => bosque[indiceBosque.value] ?? bosque[0]);
const imagenBarro = computed(() => barro[indiceBarro.value] ?? barro[0]);
const imagenTresD = computed(() => tresD[indiceTresD.value] ?? tresD[0]);

const cambiarBosque = (direccion: 1 | -1) => {
  const total = bosque.length;
  indiceBosque.value = (indiceBosque.value + direccion + total) % total;
};

const cambiarBarro = (direccion: 1 | -1) => {
  const total = barro.length;
  indiceBarro.value = (indiceBarro.value + direccion + total) % total;
};

const cambiarTresD = (direccion: 1 | -1) => {
  const total = tresD.length;
  indiceTresD.value = (indiceTresD.value + direccion + total) % total;
};

type Grupo = "bosque" | "barro" | "3d";
const modalGrupo = ref<Grupo | null>(null);
const modalIndice = ref(0);

const imagenModal = computed(() => {
  if (modalGrupo.value === "bosque") return bosque[modalIndice.value] ?? null;
  if (modalGrupo.value === "barro") return barro[modalIndice.value] ?? null;
  if (modalGrupo.value === "3d") return tresD[modalIndice.value] ?? null;
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

  const total =
    modalGrupo.value === "bosque" ? bosque.length :
    modalGrupo.value === "barro" ? barro.length :
    tresD.length;
  const siguiente = (modalIndice.value + direccion + total) % total;
  modalIndice.value = siguiente;

  if (modalGrupo.value === "bosque") indiceBosque.value = siguiente;
  if (modalGrupo.value === "barro") indiceBarro.value = siguiente;
  if (modalGrupo.value === "3d") indiceTresD.value = siguiente;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">VOLUMEN</h1>

      <div class="mb-8 flex gap-3">
        <button
          class="px-4 py-2 border transition-colors"
          :class="pestanaActiva === 'bosque' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'"
          @click="pestanaActiva = 'bosque'"
        >
          Bosque
        </button>
        <button
          class="px-4 py-2 border transition-colors"
          :class="pestanaActiva === 'barro' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'"
          @click="pestanaActiva = 'barro'"
        >
          Barro
        </button>
        <button
          class="px-4 py-2 border transition-colors"
          :class="pestanaActiva === '3d' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'"
          @click="pestanaActiva = '3d'"
        >
          3D
        </button>
      </div>

      <div v-if="pestanaActiva === 'bosque'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarBosque(-1)">‹</button>
        <PolaroidFrame alt="Volumen" label="Bosque" :description="descripcionBosque" @click="abrirModal('bosque', indiceBosque)">
          <img :src="imagenBosque" alt="Volumen" class="w-full h-full">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarBosque(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'barro'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarBarro(-1)">‹</button>
        <PolaroidFrame alt="Barro" label="Barro" :description="descripcionBarro" @click="abrirModal('barro', indiceBarro)">
          <img :src="imagenBarro" alt="Barro" class="w-full h-full">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarBarro(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === '3d'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarTresD(-1)">‹</button>
        <PolaroidFrame alt="3D" label="3D" :description="descripcionTresD" @click="abrirModal('3d', indiceTresD)">
          <img :src="imagenTresD" alt="3D" class="w-full h-full">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarTresD(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">
        ← Volver a trabajos
      </router-link>

      <div v-if="modalGrupo" class="fixed inset-0 bg-black/90 z-50 p-4 overflow-y-auto cursor-pointer" @click="cerrarModal">
        <button class="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <div class="min-h-full flex items-center justify-center">
          <img :src="imagenModal ?? ''" alt="Volumen ampliado" class="w-[min(92vw,900px)] max-h-[74vh] h-auto object-contain rounded-lg shadow-2xl" @click.stop>
        </div>
        <button class="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
