<script setup lang="ts">
import { computed, ref } from "vue";
import PolaroidFrame from "@/components/PolaroidFrame.vue";
import foto1 from "@/assets/foto1.png";
import foto2 from "@/assets/foto2.png";
import foto3 from "@/assets/foto3.png";
import foto4 from "@/assets/foto4.png";
import foto5 from "@/assets/foto5.png";
import foto6 from "@/assets/foto6.png";
import foto7 from "@/assets/foto7.jpeg";
import foto8 from "@/assets/foto8.jpeg";
import foto9 from "@/assets/foto9.jpeg";
import foto10 from "@/assets/foto10.jpeg";
import foto11 from "@/assets/foto11.jpeg";

const pestanaActiva = ref<"retratos" | "bodegones" | "tradicional">("retratos");

const descripcionBodegones =
  "Serie fotográfica que explora la naturaleza efímera del tiempo a través de la técnica del bodegón. Mediante la composición de objetos cotidianos y orgánicos, la obra busca capturar la transición entre la vida y el olvido. La iluminación, cuidadosamente trabajada para evocar una estética pictórica, invita al espectador a una pausa reflexiva sobre la transformación constante de nuestro entorno";

const descripcionRetratos =
  "Proyecto de fotografía editorial que rinde homenaje a la cultura visual de los años 80. A través de una estética recargada, el uso de paletas de color vibrantes y un estilismo icónico de la época, esta serie busca capturar la esencia audaz y rebelde de aquel estilo.";

const descripcionTradicional =
  "Serie fotográfica inspirada en la mirada crítica y humanista de Ramón Masats. Este proyecto rinde homenaje a su estilo neorrealista, capturando escenas de la tradición española con una honestidad que trasciende la mera documentación. La composición busca la espontaneidad y la fuerza narrativa de Masats, revelando la esencia de la cultura a través de contrastes sutiles y momentos cotidianos que invitan a la reflexión";

const retratos = [foto2, foto3, foto1];
const bodegones = [foto4, foto5, foto6, foto11];
const tradicional = [foto7, foto8, foto9, foto10];

const indiceRetratos = ref(0);
const indiceBodegones = ref(0);
const indiceTradicional = ref(0);

const imagenRetrato = computed(() => retratos[indiceRetratos.value] ?? retratos[0]);
const imagenBodegon = computed(() => bodegones[indiceBodegones.value] ?? bodegones[0]);
const imagenTradicional = computed(() => tradicional[indiceTradicional.value] ?? tradicional[0]);

const cambiarRetratos = (direccion: 1 | -1) => {
  const total = retratos.length;
  indiceRetratos.value = (indiceRetratos.value + direccion + total) % total;
};

const cambiarBodegones = (direccion: 1 | -1) => {
  const total = bodegones.length;
  indiceBodegones.value = (indiceBodegones.value + direccion + total) % total;
};

const cambiarTradicional = (direccion: 1 | -1) => {
  const total = tradicional.length;
  indiceTradicional.value = (indiceTradicional.value + direccion + total) % total;
};

type Grupo = "retratos" | "bodegones" | "tradicional";
const modalGrupo = ref<Grupo | null>(null);
const modalIndice = ref(0);

const imagenModal = computed(() => {
  if (modalGrupo.value === "retratos") return retratos[modalIndice.value] ?? null;
  if (modalGrupo.value === "bodegones") return bodegones[modalIndice.value] ?? null;
  if (modalGrupo.value === "tradicional") return tradicional[modalIndice.value] ?? null;
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

  if (modalGrupo.value === "bodegones") {
    const total = bodegones.length;
    const siguiente = (modalIndice.value + direccion + total) % total;
    modalIndice.value = siguiente;
    indiceBodegones.value = siguiente;
    return;
  }

  const total = tradicional.length;
  const siguiente = (modalIndice.value + direccion + total) % total;
  modalIndice.value = siguiente;
  indiceTradicional.value = siguiente;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">FOTOGRAFÍA</h1>

      <div class="mb-8 flex gap-3">
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'retratos' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'retratos'">Retratos</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'bodegones' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'bodegones'">Bodegones</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'tradicional' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'tradicional'">Tradicional</button>
      </div>

      <div v-if="pestanaActiva === 'retratos'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarRetratos(-1)">‹</button>
<PolaroidFrame alt="Retrato" label="Retratos" :description="descripcionRetratos" @click="abrirModal('retratos', indiceRetratos)">
          <img :src="imagenRetrato" alt="Retrato" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarRetratos(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'bodegones'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarBodegones(-1)">‹</button>
<PolaroidFrame alt="Bodegón" label="Bodegones" :description="descripcionBodegones" @click="abrirModal('bodegones', indiceBodegones)">
          <img :src="imagenBodegon" alt="Bodegón" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarBodegones(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'tradicional'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarTradicional(-1)">‹</button>
<PolaroidFrame alt="Tradicional" label="Tradicional" :description="descripcionTradicional" @click="abrirModal('tradicional', indiceTradicional)">
          <img :src="imagenTradicional" alt="Tradicional" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarTradicional(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">← Volver a trabajos</router-link>

      <div v-if="modalGrupo" class="fixed inset-0 bg-black/90 z-50 p-4 overflow-y-auto cursor-pointer" @click="cerrarModal">
        <button class="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <div class="min-h-full flex items-center justify-center">
          <img :src="imagenModal ?? ''" alt="Foto ampliada" class="w-[min(92vw,900px)] max-h-[74vh] h-auto object-contain rounded-lg shadow-2xl" @click.stop>
        </div>
        <button class="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
