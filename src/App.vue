<script setup lang="ts">
import { onMounted, reactive, computed } from 'vue';
import type { AppState } from './type';
import { JobItem, Header, Filter } from './components';
const initState: AppState = {
  jobs: [],
  filters: [],
  loading: true
}
const appState = reactive<AppState>(initState)
onMounted(async () => {
  const response = await fetch("/data.json")
  appState.jobs = await response.json()
  appState.loading = false
})
const filteredJobs = computed( () => {
  if (appState.filters.length == 0) return appState.jobs
  const filtersSet = new Set(appState.filters);
  return appState.jobs.filter(job =>
    job.tools.some(tool => filtersSet.has(tool))
  );
});
const addFilter = (filter: string) => {
  const checkDuplicate = appState.filters.some(el => el == filter)
  if (!checkDuplicate) appState.filters.push(filter)
}
const removeFilter = (value: string) => {
  appState.filters = appState.filters.filter(el => el != value)
}
</script>
<template>
  <div class="w-full h-full min-w-screen min-h-screen bg-main-light">
    <Header />
    <div class="container mx-auto px-6 md:px-0">
      <Filter @removeFilter="removeFilter" v-if="appState.filters.length > 0" :filters="appState.filters" />
      <div v-if="appState.loading" class="border-0 border-l-2 rounded-full size-10 mx-auto animate-spin mt-6"></div>
      <div class="mt-12" v-else>
        <div v-if="filteredJobs.length > 0" class="flex flex-col gap-10 md:gap-6  ">
            <JobItem @addFilter="addFilter" v-for="(job, key) in filteredJobs" :key :job />
        </div>
        <div class="text-center font-medium text-2xl mt-6" v-if="filteredJobs.length == 0">
          No jobs founded
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
