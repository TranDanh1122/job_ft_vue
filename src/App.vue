<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Job } from './type';
import { JobItem, Header } from './components';
const jobs = ref<Job[]>([]);
onMounted(async () => {
  const response = await fetch("/data.json")
  jobs.value = await response.json()
})
</script>
<template>
  <div class="w-full h-full min-w-screen min-h-screen bg-main-light">
    <Header />
    <div v-if="jobs.length > 0" class="container mx-auto flex flex-col gap-10 md:gap-6 ">
      <JobItem v-for="(job, key) in jobs" :key :job />
    </div>
    <div v-if="jobs.length < 0">
      No jobs founded
    </div>
  </div>
</template>
<style scoped></style>
