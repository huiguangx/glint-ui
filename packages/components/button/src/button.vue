<template>
  <button>
    <slot />
    [Debug] Size: {{ p.size }}, Type: {{ p.type }}
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { buttonProps } from "./types";
defineOptions({
  name: "GlintButton",
});

const props = defineProps(buttonProps);
const p = computed(() => {
  const size = props.size || "medium";
  const type = props.type || "text";
  return { size, type };
});
</script>

<style scoped>
button {
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  font-size: 14px;
}
</style>
