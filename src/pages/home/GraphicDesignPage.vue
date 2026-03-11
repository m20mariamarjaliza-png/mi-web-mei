<script setup lang="ts">
import { computed, ref } from "vue";
import PolaroidFrame from "@/components/PolaroidFrame.vue";
import diseno1 from "@/assets/diseño1.png";
import diseno2 from "@/assets/diseño2.png";
import diseno3 from "@/assets/diseño3.png";
import trans1 from "@/assets/trans1.png";
import trans2 from "@/assets/trans2.png";
import trans3 from "@/assets/trans3.png";
import cartelcrefad from "@/assets/cartel crefad.png";
import cartelDescartado1 from "@/assets/cartel descartado 1.jpg";
import cartelDescartado2 from "@/assets/cartel descartado 2.jpg";
import cartelSeleccionado from "@/assets/cartel seleccionado.jpg";
import shr1 from "@/assets/shr1.png";
import ft2 from "@/assets/ft2.jpeg";
import ft3 from "@/assets/ft3.jpeg";
import miloa1 from "@/assets/miloa1.png";
import miloa2 from "@/assets/miloa2.png";

const pestanaActiva = ref<"carpeta1" | "carpeta2" | "carpeta3" | "carteles">("carpeta1");

const descripcionMiloa =
  "Desarrollo integral de identidad visual y packaging para una línea de tabletas de chocolate artesanal. El proyecto nace de la necesidad de trasladar la experiencia sensorial del producto al empaquetado, utilizando una combinación de tipografías orgánicas y materiales sostenibles que refuerzan el carácter premium y ético de la marca. Además la base fueron los cuentos tradicionales.";

const descripcionShareIt =
  "Diseño y prototipado completo de un juego de mesa desde cero. Este proyecto técnico requirió la creación de un sistema de identidad visual aplicado a múltiples soportes: tableros modulares, barajas de cartas personalizadas y elementos tridimensionales de packaging. Un ejercicio de diseño funcional que pone a prueba la capacidad de equilibrar estética, legibilidad y materiales de producción.";

const descripcionConecta =
  "Desarrollo de la identidad integral para una campaña intergeneracional diseñada para cerrar la brecha entre jóvenes y mayores. El proyecto abarcó desde el concepto creativo y el naming hasta la creación de un sistema visual coherente aplicado a soportes digitales y físicos. La propuesta gráfica busca romper estereotipos a través de un lenguaje visual cercano y de los sentimientos, logrando un impacto positivo en la comunidad y fomentando la conexión real entre ambos grupos";

const descripcionCarteles =
  "Serie de piezas gráficas diseñadas para diversos soportes y objetivos de comunicación. Este proyecto se centró en la exploración de la jerarquía visual, el uso estratégico de la tipografía y la síntesis de conceptos complejos. Cada cartel fue desarrollado con Adobe Creative Cloud, adaptando el lenguaje visual a las necesidades específicas de cada cliente o campaña, buscando un equilibrio entre impacto estético y legibilidad";

const carpeta1 = [diseno1, diseno2, diseno3, miloa1, miloa2];
const carpeta2 = [shr1, ft2, ft3];
const carpeta3 = [trans1, trans2, trans3];
const carteles = [cartelcrefad, cartelDescartado1, cartelDescartado2, cartelSeleccionado];

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
<button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'carpeta1' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'carpeta1'">Miloa</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'carpeta2' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'carpeta2'">SHARE IT!</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'carpeta3' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'carpeta3'">CONECTA</button>
        <button class="px-4 py-2 border transition-colors" :class="pestanaActiva === 'carteles' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" @click="pestanaActiva = 'carteles'">Carteles</button>
      </div>

      <div v-if="pestanaActiva === 'carpeta1'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta1(-1)">‹</button>
<PolaroidFrame alt="Diseño gráfico" label="Miloa" :description="descripcionMiloa" @click="abrirModal('carpeta1', indiceCarpeta1)">
          <img :src="imagenCarpeta1" alt="Diseño gráfico" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta1(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'carpeta2'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta2(-1)">‹</button>
<PolaroidFrame alt="Diseño gráfico" label="SHARE IT!" :description="descripcionShareIt" @click="abrirModal('carpeta2', indiceCarpeta2)">
          <img :src="imagenCarpeta2" alt="Diseño gráfico" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta2(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'carpeta3'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta3(-1)">‹</button>
<PolaroidFrame alt="Diseño gráfico" label="CONECTA" :description="descripcionConecta" @click="abrirModal('carpeta3', indiceCarpeta3)">
          <img :src="imagenCarpeta3" alt="Diseño gráfico" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarpeta3(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'carteles'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarteles(-1)">‹</button>
<PolaroidFrame alt="Carteles" label="Carteles" :description="descripcionCarteles" @click="abrirModal('carteles', indiceCarteles)">
          <img :src="imagenCarteles" alt="Carteles" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarCarteles(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">← Volver a trabajos</router-link>

<div v-if="modalGrupo" class="fixed inset-0 bg-black/90 z-50 p-4 overflow-y-auto cursor-pointer" @click="cerrarModal">
        <button class="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <div class="min-h-full flex items-center justify-center">
          <img :src="imagenModal ?? ''" alt="Diseño ampliado" class="w-[min(92vw,900px)] max-h-[74vh] h-auto object-contain rounded-lg shadow-2xl" @click.stop>
        </div>
        <button class="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
