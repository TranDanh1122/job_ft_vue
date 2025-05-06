<script setup lang="ts">
import { computed } from 'vue';

const isMobile = computed(() => {
    return window.innerWidth < 768
})
</script>
<template>
    <div class="bg-main">
        <img v-if="!isMobile" src="../assets/bg-header-desktop.svg" alt="header" class="w-full object-cover">
        <img v-else="isMobile" src="../assets/bg-header-mobile.svg" alt="header" class="w-full object-cover">
    </div>
</template>
