<script setup lang="ts">
import type { Job } from "../type";
import { Ultility, Tag, Category } from ".";
import { computed } from "vue";
const props = defineProps<{ job: Job }>();
const image = new URL(props.job.logo, import.meta.url).href;
const emit = defineEmits()
const addFilter = (filter : string) => {
  emit( "addFilter" , filter)
}
const isMobile = computed(() => {
    return window.innerWidth < 768
})  
</script>

<template>
    <div class="border-0 border-l-4 border-main rounded-md shadow-lg shadow-main/50 relative bg-white p-6 flex flex-col md:flex-row gap-4">
        <img :src="image" :alt="job.company" class="size-12 md:size-22 object-cover absolute md:static left-6 top-0 -translate-y-1/2 md:-translate-y-0" />
        <div class="mt-2 flex flex-col gap-2">
            <div class="flex items-center justify-start gap-2">
                <h2 class="font-bold text-sm text-main md:text-lg cursor-pointer mr-8">
                    {{ job.company }}
                </h2>
                <Tag v-if="job.new" value="new" color="new" />
                <Tag v-if="job.featured" value="featured" color="featured" />
            </div>
            <h1 class="font-bold text-base leading-6 text-dark md:text-[22px] cursor-pointer">
                {{ job.position }}
            </h1>
            <div class="flex gap-2.5 items-center">
                <Ultility :value="job.postedAt" />
                <span class="size-1 rounded-full bg-dark-light"></span>
                <Ultility :value="job.contract" />
                <span class="size-1 rounded-full bg-dark-light"></span>
                <Ultility :value="job.location" />
            </div>
        </div>

        <div v-if="isMobile" class="w-full h-[1px] bg-dark-light"></div>
        <div class="flex flex-wrap items-center gap-4 md:ml-auto">
            <Category @addFilter="addFilter" v-for="(item, index) in job.tools" :key="index" :value="item" />
        </div>
    </div>
</template>
<style scoped></style>
