<script setup lang="ts">
import { computed, ref } from "vue";
import diseno1 from "@/assets/diseño1.png";
import diseno2 from "@/assets/diseño2.png";
import diseno3 from "@/assets/diseño3.png";
import diseno4 from "@/assets/diseño4.png";
import diseno5 from "@/assets/diseño5.png";
import diseno6 from "@/assets/diseño6.png";
import diseno7 from "@/assets/diseño7.png";
import trans1 from "@/assets/trans1.png";
import trans2 from "@/assets/trans2.png";
import trans3 from "@/assets/trans3.png";

const pestanaActiva = ref<"carpeta1" | "carpeta2" | "carpeta3">("carpeta1");

const carpeta1 = [diseno1, diseno2, diseno3];
const carpeta2 = [diseno4, diseno5, diseno6, diseno7];
const carpeta3 = [trans1, trans2, trans3];

const indiceCarpeta1 = ref(0);
const indiceCarpeta2 = ref(0);
const indiceCarpeta3 = ref(0);

const imagenCarpeta1 = computed(() => carpeta1[indiceCarpeta1.value] ?? carpeta1[0]);
const imagenCarpeta2 = computed(() => carpeta2[indiceCarpeta2.value] ?? carpeta2[0]);
const imagenCarpeta3 = computed(() => carpeta3[indiceCarpeta3.value] ?? carpeta3[0]);

const cambiarCarpeta1 = (direccion: 1 | -1) => {
  const total = carpeta1.length;
  indiceCarpeta1.value = (indiceCarpeta1.value + direccion + total) % total;
};

const cambiarCarpeta2 = (direccion: 1 | -1) => {
  const total = carpeta2.length;
  indiceCarpeta2.value = (indiceCarpeta2.value + direccion + total) % total;
};

const cambiarCarpeta3 = (direccion: 1 | -1) => {
  const total = carpeta3.length;
  indiceCarpeta3.value = (indiceCarpeta3.value + direccion + total) % total;
};

type Grupo = "carpeta1" | "carpeta2" | "carpeta3";
const modalGrupo = ref<Grupo | null>(null);
const modalIndice = ref(0);

const imagenModal = computed(() => {
  if (modalGrupo.value === "carpeta1") return carpeta1[modalIndice.value] ?? null;
  if (modalGrupo.value === "carpeta2") return carpeta2[modalIndice.value] ?? null;
  if (modalGrupo.value === "carpeta3") return carpeta3[modalIndice.value] ?? null;
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

  if (modalGrupo.value === "carpeta1") {
    const total = carpeta1.length;
    const siguiente = (modalIndice.value + direccion + total) % total;
    modalIndice.value = siguiente;
    indiceCarpeta1.value = siguiente;
    return;
  }

  if (modalGrupo.value === "carpeta2") {
    const total = carpeta2.length;
    const siguiente = (modalIndice.value + direccion + total) % total;
    modalIndice.value = siguiente;
    indiceCarpeta2.value = siguiente;
    return;
  }

  const total = carpeta3.length;
  const siguiente = (modalIndice.value + direccion + total) % total;
  modalIndice.value = siguiente;
  indiceCarpeta3.value = siguiente;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">DISEÑO GRÁFICO</h1>

      <div class="mb-8 flex gap-3">
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'carpeta1' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'carpeta1'">MILOA</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'carpeta2' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'carpeta2'">SHARE IT!</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'carpeta3' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'carpeta3'">CONECTA</button>
      </div>

      <div v-if="pestanaActiva === 'carpeta1'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta1(-1)">‹</button>
        <div class="bg-white p-3 pb-10 shadow-2xl">
          <div class="overflow-hidden">
            <img :src="imagenCarpeta1" alt="Diseño gráfico" class="block w-[260px] md:w-[320px] h-auto object-contain cursor-pointer" @click="abrirModal('carpeta1', indiceCarpeta1)">
          </div>
          <p class="text-black text-center mt-3 text-sm tracking-wide">MILOA</p>
        </div>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta1(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'carpeta2'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta2(-1)">‹</button>
        <div class="bg-white p-3 pb-10 shadow-2xl">
          <div class="overflow-hidden">
            <img :src="imagenCarpeta2" alt="Diseño gráfico" class="block w-[260px] md:w-[320px] h-auto object-contain cursor-pointer" @click="abrirModal('carpeta2', indiceCarpeta2)">
          </div>
          <p class="text-black text-center mt-3 text-sm tracking-wide">SHARE IT!</p>
        </div>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta2(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'carpeta3'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta3(-1)">‹</button>
        <div class="bg-white p-3 pb-10 shadow-2xl">
          <div class="overflow-hidden">
            <img :src="imagenCarpeta3" alt="Diseño gráfico" class="block w-[260px] md:w-[320px] h-auto object-contain cursor-pointer" @click="abrirModal('carpeta3', indiceCarpeta3)">
          </div>
          <p class="text-black text-center mt-3 text-sm tracking-wide">CONECTA</p>
        </div>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta3(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">← Volver a trabajos</router-link>

      <div v-if="modalGrupo" class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-pointer" @click="cerrarModal">
        <button class="absolute left-4 md:left-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <img :src="imagenModal ?? ''" alt="Diseño ampliado" class="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl" @click.stop>
        <button class="absolute right-4 md:right-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
