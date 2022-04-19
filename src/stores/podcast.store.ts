import { defineStore } from "pinia";
import { $api } from '@/apis/index'
import { Podcast } from '@/types/podcast'

const rssUrl = 'https://feeds.soundon.fm/podcasts/954689a5-3096-43a4-a80b-7810b219cef3.xml'

export default defineStore("podcastStore", {
  state: () => {
    return {
      podcast: new Podcast()
    };
  },
  actions: {
    async getPodcast() {
      try {
        const res = await $api.rssToJson(rssUrl) as Podcast
        this.podcast = res
      } catch (e) {
        console.error(e)
      }
    }
  }
});
