<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { Instagram } from 'lucide-vue-next';
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
const mostrarDescripcionBachillerato = ref(false);
const mostrarDescripcionUpv = ref(false);
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
  <div class="min-h-screen bg-[#111] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-10">
    <h1 class="text-4xl md:text-6xl font-black mb-10 md:mb-16 border-l-8 border-[#ff0080] pl-6">SOBRE MÍ</h1>

    <div class="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-14 md:mb-20">
      <div class="w-full max-w-2xl md:pr-6">
        <h2 class="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tighter text-[#ff0080]">Perfil Profesional</h2>
        <p class="text-base md:text-lg text-white leading-relaxed">
          Me llamo María Marjaliza. Mi trabajo conecta la sensibilidad del dibujo y la pintura tradicional con el potencial del entorno digital. Como diseñadora, mi proceso creativo nace en el papel, ya que abordo todo el terreno del arte tradicional, para luego cobrar vida a través de la maquetación y la ilustración digital. Adémas mi punto fuerte es el diseño gráfico e ilustración.
        </p>
        <p class="text-base md:text-lg text-white leading-relaxed mt-4">
          Utilizo el paquete Adobe y Blender para dar forma a mis conceptos, integrando además el desarrollo web y la programación creativa con Processing para explorar nuevas formas de expresión. Mi perfil se completa con una visión integral de la fotografía y el mundo audiovisual. Pero, más allá de las herramientas, lo que define mi trabajo es la curiosidad: aprendo y evoluciono cada día, buscando siempre mejorar mis procesos para abordar cada proyecto multidisciplinar con una estética cuidada y una ejecución técnica más precisa.
        </p>
      </div>

      <div class="relative group cursor-pointer w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden transition-all duration-300 shrink-0 md:translate-y-2" @click="abrirImagen('/perfil.jpeg')">
        <img
          src="/perfil.jpeg"
          alt="María"
          class="w-full h-full object-cover object-center scale-125 shadow-md transition-transform duration-300 group-hover:scale-[1.35]"
        >
        <div class="absolute inset-0 flex items-center justify-center rounded-full bg-transparent group-hover:bg-white/20 transition-all">
          <span class="text-white opacity-0 group-hover:opacity-100 text-[10px] font-bold">AMPLIAR</span>
        </div>
      </div>
    </div>

    <h2 class="text-xl md:text-2xl font-bold mb-8 md:mb-10 uppercase tracking-tighter">Formación Académica</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div class="p-4 md:p-6">
        <div
          class="w-full h-44 md:h-48 mb-4 rounded overflow-hidden border border-gray-200 relative group cursor-pointer transition-all duration-300"
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
          <div class="absolute inset-0 flex items-center justify-center bg-transparent transition-all">
            <span class="text-white opacity-0 group-hover:opacity-100 text-[10px] font-bold">AMPLIAR</span>
          </div>
        </div>
        <h3 class="text-xl font-bold">Escuela de Arte de Toledo</h3>
        <p class="text-white">Bachillerato de Artes | 2022 - 2024</p>
        <button
          class="mt-3 px-4 py-1.5 text-sm bg-white/10 hover:bg-[#ff0080] transition-colors rounded-t-md rounded-b-sm"
          @click="mostrarDescripcionBachillerato = !mostrarDescripcionBachillerato"
        >
          {{ mostrarDescripcionBachillerato ? '-' : '+' }}
        </button>
        <div
          v-if="mostrarDescripcionBachillerato"
          class="mt-0 bg-white border border-white rounded-b-md p-4 text-sm text-black"
        >
          En el bachillerato de artes he aprendido a dibujar principalmente practicando mucho con lápiz y observación directa. A lo largo del curso trabajé diferentes ejercicios y muchas técnicas de dibujo, como luz y sombra, volumen, proporciones, perspectivas, figura humana, objetos y composición. Gracias a esa práctica constante y al aprendizaje técnico, al terminar el bachillerato salí con una base artística muy sólida.
        </div>
      </div>

      <div class="p-4 md:p-6">
        <div
          class="w-full h-44 md:h-48 mb-4 rounded overflow-hidden border border-gray-200 relative group cursor-pointer transition-all duration-300"
          @click="abrirImagenUpv(indiceUpv)"
        >
          <img
            :src="imagenActualUpv"
            alt="Trabajos de UPV"
            class="w-full h-full object-cover object-bottom"
          >
          <div class="absolute inset-0 flex items-center justify-center bg-transparent transition-all">
            <span class="text-white opacity-0 group-hover:opacity-100 text-[10px] font-bold">AMPLIAR</span>
          </div>
          <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            <span
              v-for="(_, i) in imagenesUpv"
              :key="i"
              :class="[
                'w-1.5 h-1.5 rounded-full',
                i === indiceUpv ? 'bg-white' : 'bg-white/50'
              ]"
            />
          </div>
        </div>
        <h3 class="text-xl font-bold">Universitat Politècnica de València (UPV)</h3>
        <p class="text-white">Grado en Diseño y Tecnologías Creativas | 2024 - Actualidad</p>
        <button
          class="mt-3 px-4 py-1.5 text-sm bg-white/10 hover:bg-[#ff0080] transition-colors rounded-t-md rounded-b-sm"
          @click="mostrarDescripcionUpv = !mostrarDescripcionUpv"
        >
          {{ mostrarDescripcionUpv ? '-' : '+' }}
        </button>
        <div
          v-if="mostrarDescripcionUpv"
          class="mt-0 bg-white border border-white rounded-b-md p-4 text-sm text-black"
        >
          En la carrera de Diseño y Tecnologías Creativas he aprendido a trabajar con herramientas digitales y todo lo relacionado con la creación visual. Se estudian programas del paquete Adobe, diseño gráfico, edición de imagen, maquetación y creación de contenido visual. También se aprende sobre el ámbito audiovisual, como vídeo, fotografía, edición y producción de proyectos creativos. A lo largo de la carrera desarrollas habilidades técnicas y creativas para poder trabajar en áreas como el diseño, la comunicación visual y los medios digitales. Además lo primero que se enseña es el dibujo puro y el color para más adelante aplicarlo a todo lo mencionado.
        </div>
      </div>
    </div>

    <div class="mt-10">
      <a
        href="https://instagram.com/mmaria0620"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 border border-white/30 hover:border-[#ff0080] hover:text-[#ff0080] transition-colors"
      >
        <Instagram :size="20" />
        <span>@mmaria0620</span>
      </a>
    </div>

    <div
      v-if="imagenAbierta"
      class="fixed inset-0 bg-black/90 z-50 p-4 overflow-y-auto cursor-pointer"
      @click="cerrarImagen"
    >
      <button
        v-if="modalGaleria !== null"
        class="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white"
        @click.stop="cambiarImagenModal(-1)"
      >
        ‹
      </button>
      <div class="min-h-full flex items-center justify-center">
        <img :src="imagenModal ?? ''" class="w-[min(92vw,900px)] h-auto rounded-lg shadow-2xl" @click.stop>
      </div>
      <button
        v-if="modalGaleria !== null"
        class="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white"
        @click.stop="cambiarImagenModal(1)"
      >
        ›
      </button>
      <p class="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.2em] uppercase">Haz clic para cerrar</p>
    </div>

    <router-link to="/" class="mt-12 md:mt-16 block text-gray-400 underline hover:text-white">
      ← Volver al inicio
    </router-link>
  </div>
</template>

