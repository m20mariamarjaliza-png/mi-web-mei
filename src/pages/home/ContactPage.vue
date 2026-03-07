<script setup lang="ts">

import { ref } from "vue"

const name = ref("")
const email = ref("")
const message = ref("")

function sendForm(){
alert("Mensaje enviado")
}

</script>

<template>

<section class="p-10 max-w-xl mx-auto">

<h1 class="text-3xl font-bold mb-6">
Contacto
</h1>

<form
@submit.prevent="sendForm"
class="flex flex-col gap-4"
>

<input v-model="name" placeholder="Nombre" class="border p-3">

<input v-model="email" placeholder="Email" class="border p-3">

<textarea v-model="message" placeholder="Mensaje" class="border p-3"></textarea>

<button class="bg-orange-500 text-white p-3 rounded">
Enviar
</button>

</form>

</section>

</template>