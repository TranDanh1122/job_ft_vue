<script setup lang="ts">
import type { Category } from '../type';
defineProps<Category>()
</script>
<template>
    <button class="px-2.5 py-1 font-bold text-base leading-6 tracking-[-0.12px] rounded-md cursor-pointer">{{ value }}</button>
</template>
<style scoped></style>