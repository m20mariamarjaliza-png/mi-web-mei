<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/data/projects";
import dib21 from "@/assets/dib21.jpeg";
import dib40 from "@/assets/dib40.jpeg";
import dib41 from "@/assets/dib41.jpeg";
import dib39 from "@/assets/dib39.jpeg";
import dib51 from "@/assets/dib51.jpeg";
import dib55 from "@/assets/dib55.jpeg";
import dib56 from "@/assets/dib56.jpeg";
import dib33 from "@/assets/dib33.jpeg";
import dib34 from "@/assets/dib34.jpeg";
import dib35 from "@/assets/dib35.jpeg";
import dib49 from "@/assets/dib49.jpeg";
import dib45 from "@/assets/dib45.jpeg";
import dib50 from "@/assets/dib50.jpeg";
import dib25 from "@/assets/dib25.jpeg";
import dib43 from "@/assets/dib43.jpeg";
import dib38 from "@/assets/dib38.jpeg";
import dib31 from "@/assets/dib31.jpeg";
import dib37 from "@/assets/dib37.jpeg";
import tinta1 from "@/assets/tinta1.jpeg";
import tinta3 from "@/assets/tinta3.jpeg";
import PolaroidFrame from "@/components/PolaroidFrame.vue";

const route = useRoute();

const project = computed(() => {
  return projects.find((p) => p.id === route.params.id);
});

const isTecnicasPintura = computed(() => route.params.id === "4");

const pestanaActiva = ref<"acuarelas" | "oleo" | "lapices" | "tintas">("acuarelas");

const descripcionAcuarelas =
  "Exploración técnica y expresiva a través de la acuarela. Este proyecto se centra en la versatilidad del medio para capturar luces, sombras y texturas orgánicas. A través de una paleta cuidadosamente seleccionada, busco explorar la capacidad de la mancha y la transparencia para dotar a cada obra de una profundidad emocional propia, alejándome de la rigidez para abrazar el movimiento natural del pigmento sobre el papel.";

const descripcionOleo =
  "Serie de obras desarrolladas al óleo donde la técnica se pone al servicio de la textura. El proyecto explora la fisicidad de la pintura, trabajando las capas y las pinceladas con un relieve que busca dotar a la imagen de una presencia tridimensional.";

const descripcionLapices =
  "Serie de ilustraciones realizadas mediante técnicas tradicionales de dibujo. El enfoque se centra en la observación minuciosa de la realidad, buscando capturar el detalle, el grano y la luz de cada objeto. Ya sea a través del juego de valores del grafito o la riqueza de los pigmentos en los lápices de color.";

const descripcionTintas =
  "Exploración del lenguaje de la tinta china, donde la síntesis y la jerarquía de la línea definen la narrativa visual. Este proyecto se centra en el control del trazo y el uso estratégico del claroscuro para crear volumen y profundidad sin necesidad de color. El entintado se aborda como una disciplina de precisión, buscando el equilibrio entre la fuerza de la mancha negra y la sutileza de la trama, permitiendo que la composición hable por sí sola.";

const acuarelas = [dib21, dib40, dib41, dib39, dib51, dib55, dib56];
const oleo = [dib33, dib34, dib35];
const lapices = [dib49, dib45, dib50, dib25, dib43, dib38];
const tintas = [dib31, dib37, tinta1, tinta3];

const indiceAcuarelas = ref(0);
const indiceOleo = ref(0);
const indiceLapices = ref(0);
const indiceTintas = ref(0);

const acuarelasActual = computed(() => acuarelas[indiceAcuarelas.value] ?? acuarelas[0]);
const oleoActual = computed(() => oleo[indiceOleo.value] ?? oleo[0]);
const lapicesActual = computed(() => lapices[indiceLapices.value] ?? lapices[0]);
const tintasActual = computed(() => tintas[indiceTintas.value] ?? tintas[0]);

const cambiarAcuarelas = (direccion: 1 | -1) => {
  const total = acuarelas.length;
  indiceAcuarelas.value = (indiceAcuarelas.value + direccion + total) % total;
};

const cambiarOleo = (direccion: 1 | -1) => {
  const total = oleo.length;
  indiceOleo.value = (indiceOleo.value + direccion + total) % total;
};

const cambiarLapices = (direccion: 1 | -1) => {
  const total = lapices.length;
  indiceLapices.value = (indiceLapices.value + direccion + total) % total;
};

const cambiarTintas = (direccion: 1 | -1) => {
  const total = tintas.length;
  indiceTintas.value = (indiceTintas.value + direccion + total) % total;
};

const modalGrupo = ref<"acuarelas" | "oleo" | "lapices" | "tintas" | null>(null);
const modalIndice = ref(0);

const imagenModal = computed(() => {
  if (modalGrupo.value === "acuarelas") return acuarelas[modalIndice.value] ?? null;
  if (modalGrupo.value === "oleo") return oleo[modalIndice.value] ?? null;
  if (modalGrupo.value === "lapices") return lapices[modalIndice.value] ?? null;
  if (modalGrupo.value === "tintas") return tintas[modalIndice.value] ?? null;
  return null;
});

const abrirModal = (grupo: "acuarelas" | "oleo" | "lapices" | "tintas", indice: number) => {
  modalGrupo.value = grupo;
  modalIndice.value = indice;
};

const cerrarModal = () => {
  modalGrupo.value = null;
  modalIndice.value = 0;
};

const cambiarModal = (direccion: 1 | -1) => {
  if (!modalGrupo.value) return;
  const total = modalGrupo.value === "acuarelas" ? acuarelas.length : 
                modalGrupo.value === "oleo" ? oleo.length : 
                modalGrupo.value === "lapices" ? lapices.length : tintas.length;
  modalIndice.value = (modalIndice.value + direccion + total) % total;
  
  // Sincronizar el índice del grupo activo
  if (modalGrupo.value === "acuarelas") indiceAcuarelas.value = modalIndice.value;
  if (modalGrupo.value === "oleo") indiceOleo.value = modalIndice.value;
  if (modalGrupo.value === "lapices") indiceLapices.value = modalIndice.value;
  if (modalGrupo.value === "tintas") indiceTintas.value = modalIndice.value;
};
</script>

<template>
  <div v-if="project && !isTecnicasPintura" class="min-h-screen bg-[#111] p-10 text-white">
    <h1 class="text-5xl font-bold text-[#ff0080]">
      {{ (project as any).title }}
    </h1>
    
    <div class="mt-8">
      <img 
        :src="(project as any).image" 
        :alt="(project as any).title" 
        class="rounded-xl border border-gray-700 shadow-2xl max-w-lg"
      />
    </div>

    <p class="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl">
      {{ (project as any).description }}
    </p>

    <router-link to="/projects" class="mt-12 inline-block text-[#ff0080] underline hover:text-white transition-colors">
      ← Volver al listado
    </router-link>
  </div>

  <div v-else-if="isTecnicasPintura" class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">TÉCNICAS DE PINTURA</h1>

      <div class="mb-8 flex flex-wrap gap-3">
        <button 
          class="px-4 py-2 border transition-colors" 
          :class="pestanaActiva === 'acuarelas' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" 
          @click="pestanaActiva = 'acuarelas'"
        >
          Acuarelas
        </button>
        <button 
          class="px-4 py-2 border transition-colors" 
          :class="pestanaActiva === 'oleo' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" 
          @click="pestanaActiva = 'oleo'"
        >
          Óleo
        </button>
        <button 
          class="px-4 py-2 border transition-colors" 
          :class="pestanaActiva === 'lapices' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" 
          @click="pestanaActiva = 'lapices'"
        >
          Lápices de colores y grafito
        </button>
        <button 
          class="px-4 py-2 border transition-colors" 
          :class="pestanaActiva === 'tintas' ? 'bg-[#ff0080] border-[#ff0080]' : 'border-white/40 hover:border-white'" 
          @click="pestanaActiva = 'tintas'"
        >
          Tintas
        </button>
      </div>

      <div v-if="pestanaActiva === 'acuarelas'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarAcuarelas(-1)">‹</button>
        <PolaroidFrame alt="Acuarelas" caption="Acuarelas" :description="descripcionAcuarelas" @click="abrirModal('acuarelas', indiceAcuarelas)">
          <img :src="acuarelasActual" alt="Acuarelas" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarAcuarelas(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'oleo'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarOleo(-1)">‹</button>
        <PolaroidFrame alt="Óleo" caption="Óleo" :description="descripcionOleo" @click="abrirModal('oleo', indiceOleo)">
          <img :src="oleoActual" alt="Óleo" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarOleo(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'lapices'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarLapices(-1)">‹</button>
        <PolaroidFrame alt="Lápices de colores y grafito" caption="Lápices de colores y grafito" :description="descripcionLapices" @click="abrirModal('lapices', indiceLapices)">
          <img :src="lapicesActual" alt="Lápices de colores y grafito" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarLapices(1)">›</button>
      </div>

      <div v-else-if="pestanaActiva === 'tintas'" class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarTintas(-1)">‹</button>
        <PolaroidFrame alt="Tintas" caption="Tintas" :description="descripcionTintas" @click="abrirModal('tintas', indiceTintas)">
          <img :src="tintasActual" alt="Tintas" class="max-w-full max-h-full object-contain">
        </PolaroidFrame>
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiarTintas(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">
        ← Volver al listado
      </router-link>

      <div v-if="modalGrupo" class="fixed inset-0 bg-black/90 z-50 p-4 overflow-y-auto cursor-pointer" @click="cerrarModal">
        <button class="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <div class="min-h-full flex items-center justify-center">
          <img :src="imagenModal ?? ''" alt="Imagen ampliada" class="w-[min(92vw,900px)] max-h-[74vh] h-auto object-contain rounded-lg shadow-2xl" @click.stop>
        </div>
        <button class="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen bg-[#111] p-10 text-white">
    <h1 class="text-3xl">Proyecto no encontrado</h1>
    <router-link to="/projects" class="text-blue-400 underline">Volver al listado</router-link>
  </div>
</template>

