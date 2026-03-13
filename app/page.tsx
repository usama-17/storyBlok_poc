import { getStoryblokApi, StoryblokStory, storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import Page from '@/components/Page'
import Teaser from '@/components/Teaser'
import Grid from '@/components/Grid'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'

// NUCLEAR CACHE BUSTING FOR NEXT.JS
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    hero: Hero
  }
})

export default async function Home() {
  const storyblokApi = getStoryblokApi()
  
  const { data } = await storyblokApi.get('cdn/stories/home', {
    version: 'draft',
    cv: Date.now(), // Force Storyblok CDN to send fresh JSON
  }, {
    cache: 'no-store' // Force Next.js to skip fetch cache
  })

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  )
}