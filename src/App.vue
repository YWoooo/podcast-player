<script setup lang="ts">
import { onMounted } from 'vue'
import usePodcastStore from "@/stores/podcast.store";

const podcastStore = usePodcastStore();

onMounted(() => {
  podcastStore.getPodcast()
})
</script>

<template>
  <router-view />
</template>
