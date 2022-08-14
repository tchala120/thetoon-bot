import Axios, { AxiosRequestConfig } from 'axios'

import type { News } from 'model/news'

interface SendMessageInput {
  chat_id: string
  text: string
  parse_mode: 'markdown'
}

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID

const axios = Axios.create({
  baseURL: `https://api.telegram.org/bot${BOT_TOKEN}`,
})

export const sendMessage = async (feed: News) => {
  const config: AxiosRequestConfig<SendMessageInput> = {
    method: 'POST',
    url: '/sendMessage',
    data: {
      chat_id: CHANNEL_ID,
      text:
        `*From: ${feed.feedTitle}*\n\n` +
        `*${feed.title}*\n\n` +
        `[Read more](${feed.url})\n`,
      parse_mode: 'markdown',
    },
  }

  return axios(config)
}
