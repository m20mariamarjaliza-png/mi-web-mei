<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  alt: string;
  // `caption` is kept for backwards compatibility with existing pages.
  caption?: string;
  // Preferred prop name going forward.
  label?: string;
  description?: string;
}>();

const hoverText = computed(() => props.label ?? props.caption ?? "");
const expanded = ref(false);

defineEmits<{
  click: [];
}>();
</script>

<template>
  <div class="bg-white p-3 shadow-2xl polaroid-frame transition-shadow duration-300 hover:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.75)]">
    <div class="overflow-hidden polaroid-image-container group relative" @click="$emit('click')">
      <slot></slot>
      <div v-if="hoverText" class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 group-hover:bg-black/40 group-hover:opacity-100 transition-all duration-300">
        <span class="text-white text-xs font-bold tracking-[0.2em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{{ hoverText }}</span>
      </div>
    </div>

    <div class="polaroid-bottom">
      <button
        v-if="description"
        type="button"
        class="polaroid-toggle"
        :aria-expanded="expanded ? 'true' : 'false'"
        @click.stop="expanded = !expanded"
      >
        <span class="polaroid-toggle-icon">{{ expanded ? "-" : "+" }}</span>
      </button>

      <div v-if="description" class="polaroid-desc" :class="expanded ? 'polaroid-desc--open' : ''" @click.stop>
        <p class="polaroid-desc-text">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.polaroid-frame {
  width: 320px;
  min-height: 400px;
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

.polaroid-bottom {
  margin-top: 12px;
  min-height: 56px;
  padding: 0 4px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
}

.polaroid-toggle {
  align-self: center;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 30px -18px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.polaroid-toggle:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 38px -22px rgba(0, 0, 0, 0.8);
}

.polaroid-toggle-icon {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1;
}

.polaroid-desc {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 260ms ease, opacity 180ms ease;
}

.polaroid-desc--open {
  max-height: 220px;
  opacity: 1;
}

.polaroid-desc-text {
  color: rgba(0, 0, 0, 0.78);
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
}
</style>

