<script setup lang="ts">
defineProps<{ value: string }>()
</script>
<template>
    <span class="font-medium text-base leading-6 tracking-[-0.12px] text-dark-light"> {{ value }} </span>
</template>
<style scoped></style>