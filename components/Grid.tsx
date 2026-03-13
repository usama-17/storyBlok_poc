import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

const Grid = ({ blok }: any) => (
  <div {...storyblokEditable(blok)} className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
    {blok.columns?.map((nestedBlok: any) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);
export default Grid;
