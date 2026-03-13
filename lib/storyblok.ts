import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

export const { storyblokApi } = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
})
