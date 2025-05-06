<script setup lang="ts">
import type { Category } from '../type';
defineProps<Category & { onFilter?: boolean }>()
const emit = defineEmits()
const handleClick = (value: string) => { emit("addFilter", value) }
const handleRemove = (value: string) => { emit("removeFilter", value) }
</script>
<template>
    <div @click.stop="handleClick(value)" class=" bg-main-light rounded-md cursor-pointer w-fit overflow-hidden hover:bg-main group">
        <span class="font-bold text-base leading-6 tracking-[-0.12px]  text-main group-hover:text-white px-2.5 py-1">{{ value }}</span>
        <button @click.stop="handleRemove(value)" class="bg-main p-2.5 text-white font-bold text-sm"
            v-if="onFilter">X</button>
    </div>
</template>
<style scoped></style>