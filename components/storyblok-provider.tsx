'use client'

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import Page from './Page'
import Teaser from './Teaser'
import Grid from './Grid'
import Feature from './Feature'
import Hero from './Hero'

const components = {
  page: Page,
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  hero: Hero,
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
