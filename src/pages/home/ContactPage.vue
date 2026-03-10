<script setup lang="ts">
import { ref } from "vue";

const copied = ref<null | "email" | "phone">(null);

const copyToClipboard = async (text: string, key: "email" | "phone") => {
  try {
    await navigator.clipboard.writeText(text);
    copied.value = key;
    window.setTimeout(() => {
      if (copied.value === key) copied.value = null;
    }, 1200);
  } catch {
    // If clipboard permissions are blocked, keep it non-navigational and do nothing.
  }
};
</script>

<template>
  <div class="min-h-screen bg-[#111] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-10 flex flex-col items-center">
    <div class="w-full max-w-3xl">
      <h1 class="text-4xl md:text-5xl font-black mb-8 md:mb-10 border-l-8 border-[#ff0080] pl-6">CONTACTO</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
        <button
          type="button"
          class="group border border-white/20 bg-white/5 hover:bg-white/10 transition-colors p-5 text-left"
          @click="copyToClipboard('m20mariamarjaliza@gmail.com', 'email')"
        >
          <p class="text-xs tracking-[0.2em] uppercase text-white/60">Correo</p>
          <p class="mt-2 text-lg font-bold break-all group-hover:text-[#ff0080] transition-colors">m20mariamarjaliza@gmail.com</p>
          <p class="mt-2 text-xs text-white/55">{{ copied === 'email' ? 'Copiado' : 'Click para copiar' }}</p>
        </button>

        <button
          type="button"
          class="group border border-white/20 bg-white/5 hover:bg-white/10 transition-colors p-5 text-left"
          @click="copyToClipboard('635482951', 'phone')"
        >
          <p class="text-xs tracking-[0.2em] uppercase text-white/60">Teléfono</p>
          <p class="mt-2 text-lg font-bold group-hover:text-[#ff0080] transition-colors">635 482 951</p>
          <p class="mt-2 text-xs text-white/55">{{ copied === 'phone' ? 'Copiado' : 'Click para copiar' }}</p>
        </button>
      </div>

      <div class="border border-white/20 bg-white/5 p-5 mb-12">
        <div class="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p class="text-xs tracking-[0.2em] uppercase text-white/60">Ubicación</p>
            <h2 class="mt-2 text-2xl font-black">Valencia</h2>
          </div>
          <a
            href="https://www.google.com/maps?q=Valencia"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 border border-white/30 hover:border-white transition-colors text-sm"
          >
            Abrir en Google Maps
          </a>
        </div>

        <a
          href="https://www.google.com/maps?q=Valencia"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 block max-w-xl mx-auto rounded overflow-hidden border border-white/10 hover:border-white/30 transition-colors"
        >
          <div class="w-full h-40 md:h-48 bg-black/30">
            <iframe
              title="Mapa de Valencia"
              class="w-full h-full"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Valencia&output=embed"
            />
          </div>
        </a>

        <p class="mt-3 text-xs text-white/55">Haz clic en el mapa para abrirlo en Google Maps.</p>
      </div>

      <form class="flex flex-col gap-6">
        <div class="flex flex-col">
          <label class="mb-2 text-sm text-gray-400">Nombre</label>
          <input type="text" class="bg-[#222] border-b-2 border-gray-600 p-2 focus:border-[#ff0080] outline-none transition-all">
        </div>

        <div class="flex flex-col">
          <label class="mb-2 text-sm text-gray-400">Email</label>
          <input type="email" class="bg-[#222] border-b-2 border-gray-600 p-2 focus:border-[#ff0080] outline-none transition-all">
        </div>

        <div class="flex flex-col">
          <label class="mb-2 text-sm text-gray-400">Mensaje</label>
          <textarea rows="4" class="bg-[#222] border-b-2 border-gray-600 p-2 focus:border-[#ff0080] outline-none transition-all"></textarea>
        </div>

        <button type="submit" class="mt-4 bg-[#ff0080] hover:bg-[#d4006d] text-white font-bold py-4 px-8 transition-all duration-300">
          ENVIAR
        </button>
      </form>

      <router-link to="/" class="mt-12 md:mt-16 block text-gray-400 underline hover:text-white">
        ← Volver al inicio
      </router-link>
    </div>
  </div>
</template>

