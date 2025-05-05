<script setup lang="ts">
import type { Tag } from "../type"
defineProps<Tag>()
</script>
<template>
    <button :class="`px-2 py-1 cursor-pointer rounded-full font-bold text-sm tracking-[-0.11px] ${color == 'new' ? 'bg-main' : 'bg-dark'} text-white`">{{ value }}</button>
</template>
<style scoped>

</style>