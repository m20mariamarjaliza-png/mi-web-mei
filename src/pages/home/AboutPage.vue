<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import arte1 from '@/assets/artes1.png';
import arte2 from '@/assets/artes2.png';
import arte4 from '@/assets/artes4.png';
import arte6 from '@/assets/artes6.png';
import upv7 from '@/assets/upv7.png';
import upv2 from '@/assets/upv2.png';
import upv from '@/assets/upv.png';
import upv6 from '@/assets/upv6.jpeg';

const imagenAbierta = ref<string | null>(null);
const imagenesBachillerato = [arte1, arte2, arte4, arte6];
const indiceBachillerato = ref(0);
const imagenesUpv = [upv7, upv2, upv, upv6];
const indiceUpv = ref(0);
const modalGaleria = ref<'bachillerato' | 'upv' | null>(null);
const indiceModalGaleria = ref<number | null>(null);
const imagenActualBachillerato = computed(
  () => imagenesBachillerato[indiceBachillerato.value] ?? imagenesBachillerato[0]
);
const imagenActualUpv = computed(() => imagenesUpv[indiceUpv.value] ?? imagenesUpv[0]);
const imagenesModalActuales = computed(() => {
  if (modalGaleria.value === 'bachillerato') return imagenesBachillerato;
  if (modalGaleria.value === 'upv') return imagenesUpv;
  return null;
});
const imagenModal = computed(() => {
  if (indiceModalGaleria.value === null || !imagenesModalActuales.value) return imagenAbierta.value;
  return imagenesModalActuales.value[indiceModalGaleria.value] ?? imagenAbierta.value;
});
let intervaloBachillerato: ReturnType<typeof setInterval> | null = null;
let intervaloUpv: ReturnType<typeof setInterval> | null = null;

const abrirImagen = (src: string | undefined) => {
  if (!src) return;
  modalGaleria.value = null;
  indiceModalGaleria.value = null;
  imagenAbierta.value = src;
};

const abrirImagenBachillerato = (indice: number) => {
  const src = imagenesBachillerato[indice] ?? imagenesBachillerato[0];
  if (!src) return;
  modalGaleria.value = 'bachillerato';
  indiceModalGaleria.value = indice;
  imagenAbierta.value = src;
};

const cambiarImagenBachillerato = (direccion: 1 | -1) => {
  const total = imagenesBachillerato.length;
  indiceBachillerato.value = (indiceBachillerato.value + direccion + total) % total;
};

const abrirImagenUpv = (indice: number) => {
  const src = imagenesUpv[indice] ?? imagenesUpv[0];
  if (!src) return;
  modalGaleria.value = 'upv';
  indiceModalGaleria.value = indice;
  imagenAbierta.value = src;
};

const cerrarImagen = () => {
  modalGaleria.value = null;
  indiceModalGaleria.value = null;
  imagenAbierta.value = null;
};

const cambiarImagenModal = (direccion: 1 | -1) => {
  if (indiceModalGaleria.value === null || !imagenesModalActuales.value) return;
  const total = imagenesModalActuales.value.length;
  const siguiente = (indiceModalGaleria.value + direccion + total) % total;
  indiceModalGaleria.value = siguiente;
  imagenAbierta.value = imagenesModalActuales.value[siguiente] ?? null;

  if (modalGaleria.value === 'bachillerato') indiceBachillerato.value = siguiente;
  if (modalGaleria.value === 'upv') indiceUpv.value = siguiente;
};

onMounted(() => {
  intervaloBachillerato = setInterval(() => {
    indiceBachillerato.value = (indiceBachillerato.value + 1) % imagenesBachillerato.length;
  }, 2500);

  intervaloUpv = setInterval(() => {
    indiceUpv.value = (indiceUpv.value + 1) % imagenesUpv.length;
  }, 2500);
});

onBeforeUnmount(() => {
  if (intervaloBachillerato) {
    clearInterval(intervaloBachillerato);
  }
  if (intervaloUpv) {
    clearInterval(intervaloUpv);
  }
});
</script>

<template>
  <div class="min-h-screen bg-white text-black p-20">
    <h1 class="text-6xl font-black mb-16 border-l-8 border-[#ff0080] pl-6">SOBRE MÍ</h1>

    <div class="flex items-center gap-10 mb-20">
      <div class="relative group cursor-pointer w-40 h-40 rounded-full overflow-hidden" @click="abrirImagen('/perfil.jpeg')">
        <img
          src="/perfil.jpeg"
          alt="María"
          class="w-full h-full object-cover object-center scale-125 shadow-md transition-transform duration-300 group-hover:scale-[1.35]"
        >
        <div class="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 group-hover:bg-black/20 transition-all">
          <span class="text-white opacity-0 group-hover:opacity-100 text-[10px] font-bold">AMPLIAR</span>
        </div>
      </div>

      <div class="max-w-2xl">
        <h2 class="text-2xl font-bold mb-4 uppercase tracking-tighter">Perfil Profesional</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Me llamo María Marjaliza. Con una base forjada en el trazo tradicional, mi trabajo conecta la sensibilidad del dibujo y la pintura con el potencial del entorno digital. Especializada en diseño gráfico, utilizo el paquete Adobe y Blender para dar forma a conceptos que nacen desde el papel. Mi perfil se completa con una visión integral de la fotografía y el mundo audiovisual, permitiéndome abordar proyectos multidisciplinares con una estética cuidada y una ejecución técnica precisa.
        </p>
      </div>
    </div>

    <h2 class="text-2xl font-bold mb-10 uppercase tracking-tighter">Formación Académica</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border p-6 rounded-lg shadow-sm">
        <div
          class="w-full h-48 mb-4 rounded overflow-hidden border border-gray-200 relative group cursor-pointer"
          @click="abrirImagenBachillerato(indiceBachillerato)"
        >
          <img
            :src="imagenActualBachillerato"
            alt="Trabajos de Bachillerato"
            class="w-full h-full object-cover object-bottom"
          >
          <button
            class="absolute left-2 top-1/2 -translate-y-1/2 text-white/90 text-2xl px-2 hover:text-white"
            @click.stop="cambiarImagenBachillerato(-1)"
          >
            ‹
          </button>
          <button
            class="absolute right-2 top-1/2 -translate-y-1/2 text-white/90 text-2xl px-2 hover:text-white"
            @click.stop="cambiarImagenBachillerato(1)"
          >
            ›
          </button>
          <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            <span
              v-for="(_, i) in imagenesBachillerato"
              :key="i"
              :class="[
                'w-1.5 h-1.5 rounded-full',
                i === indiceBachillerato ? 'bg-white' : 'bg-white/50'
              ]"
            />
          </div>
          <div class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all">
            <span class="text-white opacity-0 group-hover:opacity-100 text-[10px] font-bold">AMPLIAR</span>
          </div>
        </div>
        <h3 class="text-xl font-bold">Escuela de Arte de Toledo</h3>
        <p class="text-gray-600">Bachillerato de Artes | 2022 - 2024</p>
      </div>

      <div class="border p-6 rounded-lg shadow-sm">
        <div
          class="w-full h-48 mb-4 rounded overflow-hidden border border-gray-200 relative group cursor-pointer"
          @click="abrirImagenUpv(indiceUpv)"
        >
          <img
            :src="imagenActualUpv"
            alt="Trabajos de UPV"
            class="w-full h-full object-cover object-bottom"
          >
          <div class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all">
            <span class="text-white opacity-0 group-hover:opacity-100 text-[10px] font-bold">AMPLIAR</span>
          </div>
        </div>
        <h3 class="text-xl font-bold">Universitat Politècnica de València (UPV)</h3>
        <p class="text-gray-600">Grado en Diseño y Tecnologías Creativas | 2024 - Actualidad</p>
      </div>
    </div>

    <div
      v-if="imagenAbierta"
      class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-pointer"
      @click="cerrarImagen"
    >
      <button
        v-if="modalGaleria !== null"
        class="absolute left-4 md:left-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white"
        @click.stop="cambiarImagenModal(-1)"
      >
        ‹
      </button>
      <div
        v-if="modalGaleria !== null"
        class="w-[min(92vw,900px)] h-[min(78vh,620px)] rounded-lg overflow-hidden shadow-2xl"
        @click.stop
      >
        <img :src="imagenModal ?? ''" class="w-full h-full object-cover object-bottom">
      </div>
      <img
        v-else
        :src="imagenModal ?? ''"
        class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        @click.stop
      >
      <button
        v-if="modalGaleria !== null"
        class="absolute right-4 md:right-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white"
        @click.stop="cambiarImagenModal(1)"
      >
        ›
      </button>
      <p class="absolute bottom-8 text-white/50 text-xs tracking-[0.2em] uppercase">Haz clic para cerrar</p>
    </div>
  </div>
</template>
