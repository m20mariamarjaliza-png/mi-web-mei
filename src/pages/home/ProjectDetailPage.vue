<script setup lang="ts">

import { useRoute } from "vue-router"

const route = useRoute()

</script>

<template>

<div class="p-10">

<h1 class="text-3xl font-bold">
Detalle del proyecto {{ route.params.id }}
</h1>

<p class="mt-4">
Aquí puedes explicar el proyecto con imágenes.
</p>

</div>

</template>