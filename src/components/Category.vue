<script setup lang="ts">
import type { Category } from '../type';
defineProps<Category & { onFilter?: boolean }>()
const emit = defineEmits()
const handleClick = (value:string) => { emit("addFilter" , value) }
</script>
<template>
    <div @click="handleClick(value)" class="px-2.5 py-1 bg-main-light rounded-md cursor-pointer">
        <span class="font-bold text-base leading-6 tracking-[-0.12px]  text-main ">{{ value }}</span>
        <button class="bg-main p-2.5 text-white font-bold text-sm" v-if="onFilter">X</button>
    </div>
</template>
<style scoped></style>