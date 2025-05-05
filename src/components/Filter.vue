<script setup lang="ts">
import { Category } from "."
defineProps<{filters : string[]}>()

</script>
<template>
    <div class="bg-white ">
        <Category v-for="(value , key) in filters" :key :value/>
    </div>
</template>