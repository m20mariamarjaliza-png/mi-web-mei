<script setup lang="ts">
import { computed, ref } from "vue";
import vol2 from "@/assets/vol2.png";
import vol3 from "@/assets/vol3.png";
import vol4 from "@/assets/vol4.png";
import vol5 from "@/assets/vol5.png";

const imagenes = [vol2, vol3, vol4, vol5];
const indice = ref(0);
const imagenActual = computed(() => imagenes[indice.value] ?? imagenes[0]);

const cambiar = (direccion: 1 | -1) => {
  const total = imagenes.length;
  indice.value = (indice.value + direccion + total) % total;
};

const modalAbierto = ref(false);
const modalIndice = ref(0);
const imagenModal = computed(() => imagenes[modalIndice.value] ?? imagenes[0]);

const abrirModal = () => {
  modalIndice.value = indice.value;
  modalAbierto.value = true;
};

const cerrarModal = () => {
  modalAbierto.value = false;
};

const cambiarModal = (direccion: 1 | -1) => {
  const total = imagenes.length;
  const siguiente = (modalIndice.value + direccion + total) % total;
  modalIndice.value = siguiente;
  indice.value = siguiente;
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-6 md:px-12 py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-black mb-10 border-l-8 border-[#ff0080] pl-5">VOLUMEN</h1>

      <div class="flex justify-center items-center gap-4 md:gap-8 py-6">
        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiar(-1)">‹</button>

        <div class="bg-white p-3 pb-10 shadow-2xl">
          <div class="overflow-hidden">
            <img
              :src="imagenActual"
              alt="Volumen"
              class="block w-[260px] md:w-[320px] h-auto object-contain cursor-pointer"
              @click="abrirModal"
            >
          </div>
          <p class="text-black text-center mt-3 text-sm tracking-wide">Bosque</p>
        </div>

        <button class="text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click="cambiar(1)">›</button>
      </div>

      <router-link to="/projects" class="mt-12 inline-block text-gray-300 underline hover:text-white transition-colors">
        ← Volver a trabajos
      </router-link>

      <div
        v-if="modalAbierto"
        class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-pointer"
        @click="cerrarModal"
      >
        <button class="absolute left-4 md:left-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(-1)">‹</button>
        <img :src="imagenModal" alt="Volumen ampliado" class="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl" @click.stop>
        <button class="absolute right-4 md:right-8 text-white/90 text-4xl font-light px-3 py-1 hover:text-white" @click.stop="cambiarModal(1)">›</button>
      </div>
    </div>
  </div>
</template>
