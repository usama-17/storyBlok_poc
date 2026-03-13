import type { Metadata } from 'next'
import './globals.css'
import StoryblokProvider from '@/components/storyblok-provider'

export const metadata: Metadata = {
  title: 'Storyblok Demo',
  description: 'Next.js App Router with Storyblok CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StoryblokProvider>{children}</StoryblokProvider>
      </body>
    </html>
  )
}
