<script setup lang="ts">
defineProps<{
  src?: string;
  alt: string;
  caption?: string;
}>();

defineEmits<{
  click: [];
}>();
</script>

<template>
  <div class="bg-white p-3 pb-10 shadow-2xl polaroid-frame">
    <div class="overflow-hidden polaroid-image-container">
      <img
        v-if="src"
        :src="src"
        :alt="alt"
        class="block w-full h-full object-cover cursor-pointer"
        @click="$emit('click')"
      >
    </div>
    <p v-if="caption" class="text-black text-center mt-3 text-sm tracking-wide">{{ caption }}</p>
  </div>
</template>

<style scoped>
.polaroid-frame {
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.polaroid-image-container {
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

