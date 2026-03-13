import { storyblokEditable } from "@storyblok/react/rsc";

const Teaser = ({ blok }: any) => (
  <div {...storyblokEditable(blok)} className="text-center mb-10">
    <h2 className="text-5xl font-bold text-gray-900">{blok.headline}</h2>
  </div>
);
export default Teaser;
