import { getStoryblokApi, StoryblokStory, storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import Page from '@/components/Page'
import Teaser from '@/components/Teaser'
import Grid from '@/components/Grid'
import Feature from '@/components/Feature'

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature
  }
})

export default async function Home() {
  const storyblokApi = getStoryblokApi()
  
  const { data } = await storyblokApi.get('cdn/stories/home', {
    version: 'draft',
    cv: Date.now(), 
  })

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  )
}