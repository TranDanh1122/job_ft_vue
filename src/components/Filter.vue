<script setup lang="ts">
import { Category } from "."
defineProps<{filters : string[]}>()
const emit = defineEmits()
const handleRemove = (value : string) => {
    emit("removeFilter" , value)
}
</script>
<template>
    <div class="bg-white w-full p-5 rounded-md shadow-lg shadow-main/50 relative -translate-y-1/2 flex items-center gap-4">
        <Category @removeFilter="handleRemove" v-for="(value , key) in filters" :key :value :onFilter="true"/>
    </div>
</template>