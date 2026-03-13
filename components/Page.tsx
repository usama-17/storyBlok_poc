import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

const Page = ({ blok }: any) => (
  <main {...storyblokEditable(blok)} className="px-6 py-10 max-w-5xl mx-auto">
    {blok.body?.map((nestedBlok: any) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
export default Page;
