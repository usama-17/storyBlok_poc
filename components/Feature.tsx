import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = ({ blok }: any) => (
  <div {...storyblokEditable(blok)} className="bg-gray-100 p-8 rounded-lg text-center shadow-sm">
    <h3 className="text-2xl font-semibold text-gray-800">{blok.name}</h3>
  </div>
);
export default Feature;
