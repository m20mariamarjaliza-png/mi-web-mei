<template>
  <div class="min-h-screen bg-[#111] text-white p-20 flex flex-col justify-center items-center">
    
    <div class="w-full max-w-lg">
      <h1 class="text-5xl font-black mb-10 border-l-8 border-[#ff0080] pl-6">CONTACTO</h1>
      
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

        <button type="submit" 
          class="mt-4 bg-[#ff0080] hover:bg-[#d4006d] text-white font-bold py-4 px-8 transition-all duration-300">
          ENVIAR
        </button>
      </form>
    </div>

  </div>
</template>