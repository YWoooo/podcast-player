import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import index from './index.vue'
import router from '@/router/index'
import { Podcast } from '@/types/podcast'

const mockPodcast: Podcast = {
  feed: {
    "url": "https://feeds.soundon.fm/podcasts/954689a5-3096-43a4-a80b-7810b219cef3.xml",
    "title": "Gooaye 股癌",
    "link": "https://player.soundon.fm/p/954689a5-3096-43a4-a80b-7810b219cef3",
    "author": "謝孟恭",
    "description": "晦澀金融投資知識直白講，重要海內外時事輕鬆談；不管老司機還是菜雞，散戶們都進來取暖，也在這裡找到樂趣。\n\nFacebook | Apple | Spotify | Youtube | Telegram\n搜尋：Gooaye 股癌\n\n--\nHosting provided by SoundOn",
    "image": "https://files.soundon.fm/1601380848736-bce0f26a-745c-4266-aee1-6d4df3479752.jpeg"
  },
  items: [
    {
      "title": "EP236 | 🐓",
      "pubDate": "2022-04-16 07:12:31",
      "link": "https://player.soundon.fm/p/954689a5-3096-43a4-a80b-7810b219cef3/episodes/17375e91-94ae-46fd-b23f-49363ac9d579",
      "guid": "17375e91-94ae-46fd-b23f-49363ac9d579",
      "author": "謝孟恭",
      "thumbnail": "https://files.soundon.fm/1601380848736-bce0f26a-745c-4266-aee1-6d4df3479752.jpeg",
      "description": "下檔沒有防守好，蛋蛋爆炸\n\n研究股市佈局，總是停滯不前?\n主委推薦👉【MIHONG®高效益生菌-純厚菌9000億】\n連結：https://lihi1.cc/TQLn6\n\n500萬次張口的口碑保證，大人小孩都愛，高效益生菌再升級特別添加後生元，厚菌版每盒含有9000億菌數，滿足人體所需要的益菌， 幫助代謝消化，粉末更好吸收！\n每天一包，補好菌 養好菌 顧好菌，在非常時期打造超強體質!\n\n【強者恆強 順者恆順 一定要純厚菌】\n調整體質、排便順暢 、幫助消化，適合忙碌工作，飲食不均衡、生活壓力大，體內不環保、長輩、孕媽咪全家人的日常保養\n\n【聰明理財聽股癌，聰明保健選MIHONG® TOP5商品】\nNo.1 多口味益生菌\nNo.2 蝦紅素葉黃素\nNo.3 司令黑紅瑪卡\nNo.4 彈力膠原系列\nNo.5 多口味乳清\n\n4/16-4/29輸入股癌聽眾【優惠代碼】：GOOAYE\n全館商品任選 好康3波！報你知\n好康1 下單就送MIHONG® 益生菌體驗包*1\n好康2 官網“下單”可抽純厚菌1盒，活動期間內抽出15名\n好康3 滿額現折 最高$1500\nMIHONG®活動內容：https://lihi1.cc/TQLn6\nMIHONG®官網：https://lihi1.cc/YjtKD\nMIHONG®MOMO旗艦店： https://reurl.cc/veyNvL\n\n#額外福利~\n1.追蹤MIHONG健康可以改變世界\n2.並在股癌FB貼文留言「看股配純厚菌，獲利9000億」， 即享額外抽獎資格\n抽【MIHONG®高效益生菌-純厚菌】一盒\n4/21抽出5名幸運粉絲於MIHONG粉絲團公布得獎者!\n\n股癌傳送門：https://linktr.ee/gooaye",
      "content": "\n<p>下檔沒有防守好，蛋蛋爆炸</p>\n<p><br></p>\n<p>研究股市佈局，總是停滯不前?</p>\n<p>主委推薦👉【MIHONG®高效益生菌-純厚菌9000億】</p>\n<p>連結：https://lihi1.cc/TQLn6</p>\n<p><br></p>\n<p>500萬次張口的口碑保證，大人小孩都愛，高效益生菌再升級特別添加後生元，厚菌版每盒含有9000億菌數，滿足人體所需要的益菌， 幫助代謝消化，粉末更好吸收！</p>\n<p>每天一包，補好菌 養好菌 顧好菌，在非常時期打造超強體質!</p>\n<p><br></p>\n<p>【強者恆強 順者恆順 一定要純厚菌】</p>\n<p>調整體質、排便順暢 、幫助消化，適合忙碌工作，飲食不均衡、生活壓力大，體內不環保、長輩、孕媽咪全家人的日常保養</p>\n<p><br></p>\n<p>【聰明理財聽股癌，聰明保健選MIHONG® TOP5商品】</p>\n<p>No.1 多口味益生菌</p>\n<p>No.2 蝦紅素葉黃素</p>\n<p>No.3 司令黑紅瑪卡</p>\n<p>No.4 彈力膠原系列</p>\n<p>No.5 多口味乳清</p>\n<p><br></p>\n<p>4/16-4/29輸入股癌聽眾【優惠代碼】：GOOAYE</p>\n<p>全館商品任選 好康3波！報你知</p>\n<p>好康1 下單就送MIHONG® 益生菌體驗包*1</p>\n<p>好康2 官網“下單”可抽純厚菌1盒，活動期間內抽出15名</p>\n<p>好康3 滿額現折 最高$1500</p>\n<p>MIHONG®活動內容：https://lihi1.cc/TQLn6</p>\n<p>MIHONG®官網：https://lihi1.cc/YjtKD</p>\n<p>MIHONG®MOMO旗艦店： https://reurl.cc/veyNvL</p>\n<p><br></p>\n<p>#額外福利~</p>\n<p>1.追蹤MIHONG健康可以改變世界</p>\n<p>2.並在股癌FB貼文留言「看股配純厚菌，獲利9000億」， 即享額外抽獎資格</p>\n<p>抽【MIHONG®高效益生菌-純厚菌】一盒</p>\n<p>4/21抽出5名幸運粉絲於MIHONG粉絲團公布得獎者!</p>\n<p><br></p>\n<p>股癌傳送門：https://linktr.ee/gooaye</p>\n",
      "enclosure": {
        "link": "https://chtbl.com/track/4B4E1D/rss.soundon.fm/rssf/954689a5-3096-43a4-a80b-7810b219cef3/feedurl/17375e91-94ae-46fd-b23f-49363ac9d579/rssFileVip.mp3?timestamp=1650116231106",
        "type": "audio/mpeg",
        "length": 54474686,
        "duration": 3043,
        "rating": {
          "scheme": "urn:itunes",
          "value": "no"
        }
      },
      "categories": []
    },
    {
      "title": "EP235 | 🦔",
      "pubDate": "2022-04-13 10:03:34",
      "link": "https://player.soundon.fm/p/954689a5-3096-43a4-a80b-7810b219cef3/episodes/c8311fb3-3f4b-419c-bdb6-37b6ce42fa45",
      "guid": "c8311fb3-3f4b-419c-bdb6-37b6ce42fa45",
      "author": "謝孟恭",
      "thumbnail": "https://files.soundon.fm/1601380848736-bce0f26a-745c-4266-aee1-6d4df3479752.jpeg",
      "description": "準備開始進入科技法會周啦，抓緊囉\n\n本集節目由 TOSHIBA 贊助\n股市越動盪，你更需要找到心中的平靜！\n台灣獨賣，黑膠初心者首選→ https://reurl.cc/6EAXo5\n好入手、好上手！超早鳥優惠只要5,499元，五月陸續出貨。TOSHIBA與你一起打造生活儀式感，忘掉煩惱！\n\n一次搞定設備｜內建擴大機，隨附書架型音箱\n內建藍牙功能｜支援藍牙in and out，分享或獨樂，你決定\n四顆頂規單體｜兩顆全音域+兩顆高音，細膩的分頻處理\n相容所有轉速｜相容33, 45, 78RPM唱盤，這就是你要的唱機\n萬元等級唱頭｜搭載鐵三角唱頭，模擬黑膠刻刀頭VM設計\n\n根據調查，84%的消費者想進入黑膠唱機的世界，\n然而放眼市面上，看得上眼的唱機價格總是令人望之卻步；符合預算的產品，品質卻又參差不齊…\n\n你的心聲，TOSHIBA聽見了！專為台灣消費者設計，適合想要尋求生活儀式感的你\n\n股癌傳送門：https://linktr.ee/gooaye",
      "content": "\n<p>準備開始進入科技法會周啦，抓緊囉</p>\n<p><br></p>\n<p>本集節目由 TOSHIBA 贊助</p>\n<p>股市越動盪，你更需要找到心中的平靜！</p>\n<p>台灣獨賣，黑膠初心者首選→ https://reurl.cc/6EAXo5</p>\n<p>好入手、好上手！超早鳥優惠只要5,499元，五月陸續出貨。TOSHIBA與你一起打造生活儀式感，忘掉煩惱！</p>\n<p><br></p>\n<p>一次搞定設備｜內建擴大機，隨附書架型音箱</p>\n<p>內建藍牙功能｜支援藍牙in and out，分享或獨樂，你決定</p>\n<p>四顆頂規單體｜兩顆全音域+兩顆高音，細膩的分頻處理</p>\n<p>相容所有轉速｜相容33, 45, 78RPM唱盤，這就是你要的唱機</p>\n<p>萬元等級唱頭｜搭載鐵三角唱頭，模擬黑膠刻刀頭VM設計</p>\n<p><br></p>\n<p>根據調查，84%的消費者想進入黑膠唱機的世界，</p>\n<p>然而放眼市面上，看得上眼的唱機價格總是令人望之卻步；符合預算的產品，品質卻又參差不齊…</p>\n<p><br></p>\n<p>你的心聲，TOSHIBA聽見了！專為台灣消費者設計，適合想要尋求生活儀式感的你</p>\n<p><br></p>\n<p>股癌傳送門：https://linktr.ee/gooaye</p>\n",
      "enclosure": {
        "link": "https://chtbl.com/track/4B4E1D/rss.soundon.fm/rssf/954689a5-3096-43a4-a80b-7810b219cef3/feedurl/c8311fb3-3f4b-419c-bdb6-37b6ce42fa45/rssFileVip.mp3?timestamp=1649844727658",
        "type": "audio/mpeg",
        "length": 1,
        "duration": 2986,
        "rating": {
          "scheme": "urn:itunes",
          "value": "no"
        }
      },
      "categories": []
    },
    {
      "title": "EP234 | 🕴️",
      "pubDate": "2022-04-09 07:58:34",
      "link": "https://player.soundon.fm/p/954689a5-3096-43a4-a80b-7810b219cef3/episodes/96829671-3bf6-4c48-8695-af0f43ea5609",
      "guid": "96829671-3bf6-4c48-8695-af0f43ea5609",
      "author": "謝孟恭",
      "thumbnail": "https://files.soundon.fm/1601380848736-bce0f26a-745c-4266-aee1-6d4df3479752.jpeg",
      "description": "Vito Corleone “Cause a man who doesn't spend time with his family can never be a real man.”\n\n本集節目由 Ken Can #肯米香 贊助​\n​\n生為流行品牌績優股，沒有像其他流行品牌先從服飾出發，而是先從復古零食「米香」搭上反差極大的鮮豔包裝，也注定了這個牌子就是想走一條跟別人不一樣的路。​\n​\n誰說小蝦米🦐不能對抗大鯨魚🐋​\n韭菜們團結起來和Ken Can吃自己的米，養自己的Army一起把餅做大！做大👊​\n​\n#讓我們繼續把餅做大​\n復古零食 #米香 全新改造3款口味，讓你一開封就開噴，自帶ASMR超擴音🔊​\n​\n① #酥脆太麻花​\n唇色不夠辣，吃吃太麻花 ​ 不辣菊花辣舌頭​\n② #濃郁起司機​\n請不起司機，來口起司機 ​ 爽的感覺You Can Feel​\n③ #黃金玉米湯​\n小時候最愛玉米濃湯～童年回憶一吃就想大叫​\n​\n【主委優惠碼｜即日起~4/30止】​\n至Ken Can官網結帳輸入優惠碼《GOOAYE》現折$250​\n跟著主委把餅做大🛒https://kencan.tw/gooaye​\n​\n【加碼福利時間｜即日起~4/20止】​\n於FB本則貼文下方留言「我想要吃？口味肯米香，和Ken Can一起把餅做大！」(不能是太麻花、起司、玉米濃湯口味)，就有機會抽中Ken Can 肯米香年度代言人 #百萬點閱硬派嘻哈歌手 #RPG 聯合單曲&lt;&gt; 限定復古音響禮盒一名(市價$2000)​\n※中獎名單4/30公布於此篇貼文處​\n\n股癌傳送門：https://linktr.ee/gooaye",
      "content": "\n<p>Vito Corleone “Cause a man who doesn't spend time with his family can never be a real man.”</p>\n<p><br></p>\n<p>本集節目由 Ken Can #肯米香 贊助​</p>\n<p>​</p>\n<p>生為流行品牌績優股，沒有像其他流行品牌先從服飾出發，而是先從復古零食「米香」搭上反差極大的鮮豔包裝，也注定了這個牌子就是想走一條跟別人不一樣的路。​</p>\n<p>​</p>\n<p>誰說小蝦米🦐不能對抗大鯨魚🐋​</p>\n<p>韭菜們團結起來和Ken Can吃自己的米，養自己的Army一起把餅做大！做大👊​</p>\n<p>​</p>\n<p>#讓我們繼續把餅做大​</p>\n<p>復古零食 #米香 全新改造3款口味，讓你一開封就開噴，自帶ASMR超擴音🔊​</p>\n<p>​</p>\n<p>① #酥脆太麻花​</p>\n<p>唇色不夠辣，吃吃太麻花 ​ 不辣菊花辣舌頭​</p>\n<p>② #濃郁起司機​</p>\n<p>請不起司機，來口起司機 ​ 爽的感覺You Can Feel​</p>\n<p>③ #黃金玉米湯​</p>\n<p>小時候最愛玉米濃湯～童年回憶一吃就想大叫​</p>\n<p>​</p>\n<p>【主委優惠碼｜即日起~4/30止】​</p>\n<p>至Ken Can官網結帳輸入優惠碼《GOOAYE》現折$250​</p>\n<p>跟著主委把餅做大🛒https://kencan.tw/gooaye​</p>\n<p>​</p>\n<p>【加碼福利時間｜即日起~4/20止】​</p>\n<p>於FB本則貼文下方留言「我想要吃？口味肯米香，和Ken Can一起把餅做大！」(不能是太麻花、起司、玉米濃湯口味)，就有機會抽中Ken Can 肯米香年度代言人 #百萬點閱硬派嘻哈歌手 #RPG 聯合單曲&gt; 限定復古音響禮盒一名(市價$2000)​</p>\n<p>※中獎名單4/30公布於此篇貼文處​</p>\n<p><br></p>\n<p>股癌傳送門：https://linktr.ee/gooaye</p>\n<p><br></p>\n<p><br></p>\n",
      "enclosure": {
        "link": "https://chtbl.com/track/4B4E1D/rss.soundon.fm/rssf/954689a5-3096-43a4-a80b-7810b219cef3/feedurl/96829671-3bf6-4c48-8695-af0f43ea5609/rssFileVip.mp3?timestamp=1649491497848",
        "type": "audio/mpeg",
        "length": 56159021,
        "duration": 3158,
        "rating": {
          "scheme": "urn:itunes",
          "value": "no"
        }
      },
      "categories": []
    },
  ]
} 

describe('the home page', () => {
  const wrapper = mount(index, {
    global: {
      plugins: [
        router,
        createTestingPinia({
          initialState: {
            podcastStore: {
              podcast: mockPodcast
            }
          }
        }), 
      ],
    },
  })
  const episodes = wrapper.findAll('[data-test="episode"]')

  test('have all episodes', () => {
    expect(episodes).toHaveLength(3)
  })
})


