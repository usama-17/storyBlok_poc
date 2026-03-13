'use client'

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import Page from './Page'
import Teaser from './Teaser'
import Grid from './Grid'
import Feature from './Feature'

const components = {
  page: Page,
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
})

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
