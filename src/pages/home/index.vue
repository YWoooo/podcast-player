<script setup lang="ts">
import { storeToRefs } from 'pinia'
import usePodcastStore from "@/stores/podcast.store";

const podcastStore = usePodcastStore();
const { podcast } = storeToRefs(podcastStore)

</script>

<template>
  <div class="flex flex-wrap justify-center mb-8">
    <img 
      class="h-40"
      :src="podcast.feed.image" 
      :alt="podcast.feed.title">
    <div class="flex justify-center w-full text-3xl">
      {{ podcast.feed.title }}
    </div>
  </div>
  <router-link
    v-for="episode in podcast.items"
    :key="episode.guid"
    class="flex justify-center"
    :to="`/episode/${episode.guid}`"
    data-test="episode">
    <img 
      class="w-20 mr-4"
      :src="episode.thumbnail" 
      :alt="episode.title">
    <div class="flex flex-wrap items-center w-1/2">
      <div class="w-full text-xl">
        {{ episode.title }}
      </div>
      <div class="w-full text-sm">
        {{ episode.pubDate }}
      </div>
    </div>
  </router-link>
</template>
