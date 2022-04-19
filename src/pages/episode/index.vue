<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import usePodcastStore from "@/stores/podcast.store";

const route = useRoute();
const router = useRouter();
const podcastStore = usePodcastStore();
const audioPlayer = ref<HTMLAudioElement | null>(null)
const seekValue = ref(0)
const isPlaying = ref(false)

const episodeIndex = computed(() => podcastStore.podcast.items.findIndex((e) => e.guid === route.params.guid))
const episode = computed(() => podcastStore.podcast.items?.[episodeIndex.value])

function play() {
  audioPlayer.value?.play()
  isPlaying.value = true
}
function pause() {
  audioPlayer.value?.pause()
  isPlaying.value = false
}
function onSeek() {
  if (audioPlayer.value) {
    const seekto = audioPlayer.value.duration * (seekValue.value / 100);
    audioPlayer.value.currentTime = seekto;    
  }
}
function onEnded() {
  const nextEpisode = podcastStore.podcast.items?.[episodeIndex.value + 1]

  if (nextEpisode) {
    router.replace(`/episode/${nextEpisode.guid}`)
    seekValue.value = 0
    setTimeout(() => play(), 600)
  }
}

defineExpose({
  audioPlayer
})

</script>

<template>
  <div class="flex flex-wrap justify-center mb-8">
    <img 
      class="h-40"
      :src="episode.thumbnail" 
      :alt="episode.title">
    <div class="flex justify-center w-full text-3xl">
      {{ episode.title }}
    </div>
    <div class="flex items-center h-12 mt-8">
      <div 
        v-if="!isPlaying"
        class="border px-8 py-2 cursor-pointer"
        @click="play">
        PLAY
      </div>
      <img 
        v-else
        class="cursor-pointer"
        src="@/assets/motion-pause-outline.svg" 
        alt="pause"
        @click="pause"> 
    </div>
  </div>
  <div class="px-4">
    <div class="text-xl">
      Episode Description
    </div>
    <!-- TODO: maybe api can return strings instead of html -->
    <div
      class="mt-2" 
      v-html="episode?.description" />
  </div>
  <div class="sticky bottom-0 w-full mt-4 pt-4 px-2 bg-sky-50">
    <input
      class="w-full"
      type="range"
      min="0"
      max="100"
      v-model="seekValue"
      @change="onSeek"
    />
    <audio
      ref="audioPlayer"
      :src="episode.enclosure.link"
      @ended="onEnded"
    />
    <div class="flex items-center py-4">
      <img 
        v-if="!isPlaying"
        class="cursor-pointer"
        src="@/assets/play-circle-outline.svg" 
        alt="play"
        @click="play"> 
      <img 
        v-else
        class="cursor-pointer"
        src="@/assets/motion-pause-outline.svg" 
        alt="pause"
        @click="pause">   
      <div class="ml-2">
        Now Playing {{ episode.title }}
      </div>   
    </div>
  </div>
</template>