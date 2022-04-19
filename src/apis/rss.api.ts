import { axiosInstance } from '@/apis/index'

export default {
  async rssToJson(rssUrl: string): Promise<unknown> {
    const res = await axiosInstance.get(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
    return res.data
  }
}
