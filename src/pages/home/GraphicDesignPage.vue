<script setup lang="ts">
import { computed, ref } from "vue";
import PolaroidFrame from "@/components/PolaroidFrame.vue";
import diseno1 from "@/assets/diseño1.png";
import diseno2 from "@/assets/diseño2.png";
import diseno3 from "@/assets/diseño3.png";
import trans1 from "@/assets/trans1.png";
import trans2 from "@/assets/trans2.png";
import trans3 from "@/assets/trans3.png";
import cartelCrefad from "@/assets/cartel crefad.png";
import cartelDescartado1 from "@/assets/cartel descartado 1.jpg";
import cartelDescartado2 from "@/assets/cartel descartado 2.jpg";
import cartelSeleccionado from "@/assets/cartel seleccionado.jpg";
import shr1 from "@/assets/shr1.png";
import sh2 from "@/assets/sh2.png";
import sh3 from "@/assets/sh3.png";
import sh4 from "@/assets/sh4.png";
import sh5 from "@/assets/sh5.png";
import sh6 from "@/assets/sh6.png";
import ft2 from "@/assets/ft2.jpeg";
import ft3 from "@/assets/ft3.jpeg";

const pestanaActiva = ref<"carpeta1" | "carpeta2" | "carpeta3" | "carteles">("carpeta1");

const carpeta1 = [diseno1, diseno2, diseno3];
const carpeta2 = [shr1, sh2, sh3, sh4, sh5, sh6, ft2, ft3];
const carpeta3 = [trans1, trans2, trans3];
const carteles = [cartelCrefad, cartelDescartado1, cartelDescartado2, cartelSeleccionado];

const indiceCarpeta1 = ref(0);
const indiceCarpeta2 = ref(0);
const indiceCarpeta3 = ref(0);
const indiceCarteles = ref(0);

const imagenCarpeta1 = computed(() => carpeta1[indiceCarpeta1.value] ?? carpeta1[0]);
const imagenCarpeta2 = computed(() => carpeta2[indiceCarpeta2.value] ?? carpeta2[0]);
const imagenCarpeta3 = computed(() => carpeta3[indiceCarpeta3.value] ?? carpeta3[0]);
const imagenCarteles = computed(() => carteles[indiceCarteles.value] ?? carteles[0]);

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

const cambiarCarteles = (direccion: 1 | -1) => {
  const total = carteles.length;
  indiceCarteles.value = (indiceCarteles.value + direccion + total) % total;
};

type Grupo = "carpeta1" | "carpeta2" | "carpeta3" | "carteles";
const modalGrupo = ref<Grupo | null>(null);
const modalIndice = ref(0);

const imagenModal = computed(() => {
  if (modalGrupo.value === "carpeta1") return carpeta1[modalIndice.value] ?? null;
  if (modalGrupo.value === "carpeta2") return carpeta2[modalIndice.value] ?? null;
  if (modalGrupo.value === "carpeta3") return carpeta3[modalIndice.value] ?? null;
  if (modalGrupo.value === "carteles") return carteles[modalIndice.value] ?? null;
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

  if (modalGrupo.value === "carpeta3") {
    const total = carpeta3.length;
    const siguiente = (modalIndice.value + direccion + total) % total;
    modalIndice.value = siguiente;
    indiceCarpeta3.value = siguiente;
    return;
  }

  const total = carteles.length;
  const siguiente = (modalIndice.value + direccion + total) % total;
  modalIndice.value = siguiente;
  indiceCarteles.value = siguiente;
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
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'carteles' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'carteles'">Carteles</button>
      </div>

      <div v-if="pestanaActiva === 'carpeta1'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta1(-1)">‹</button>
        <PolaroidFrame :src="imagenCarpeta1" alt="Diseño gráfico" caption="MILOA" @click="abrirModal('carpeta1', indiceCarpeta1)" />
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta1(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'carpeta2'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta2(-1)">‹</button>
        <PolaroidFrame :src="imagenCarpeta2" alt="Diseño gráfico" caption="SHARE IT!" @click="abrirModal('carpeta2', indiceCarpeta2)" />
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta2(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'carpeta3'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta3(-1)">‹</button>
        <PolaroidFrame :src="imagenCarpeta3" alt="Diseño gráfico" caption="CONECTA" @click="abrirModal('carpeta3', indiceCarpeta3)" />
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta3(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'carteles'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarteles(-1)">‹</button>
        <PolaroidFrame :src="imagenCarteles" alt="Carteles" caption="Carteles" @click="abrirModal('carteles', indiceCarteles)" />
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarteles(1)">›</button>
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
