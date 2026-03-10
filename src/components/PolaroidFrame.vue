<script setup lang="ts">
defineProps<{
  alt: string;
  caption?: string;
}>();

defineEmits<{
  click: [];
}>();
</script>

<template>
  <div class="bg-white p-3 pb-10 shadow-2xl polaroid-frame">
    <div class="overflow-hidden polaroid-image-container" @click="$emit('click')">
      <slot></slot>
    </div>
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
  cursor: pointer;
}

.polaroid-image-container :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

