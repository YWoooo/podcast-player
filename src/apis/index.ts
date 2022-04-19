import axios from 'axios'
import rssApi from './rss.api'
import { App } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: typeof $api
  }
}

export const axiosInstance = axios.create()
export const $api = {
  ...rssApi
}

export default {
  install: (app: App) => {
    app.config.globalProperties.$api = $api
  }
}
