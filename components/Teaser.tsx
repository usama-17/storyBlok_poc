import { storyblokEditable } from "@storyblok/react/rsc";

const Teaser = ({ blok }: any) => (
  <div {...storyblokEditable(blok)} className="text-center mt-24 mb-12 px-6">
    <h2 className="text-base font-semibold leading-7 text-indigo-600">Features</h2>
    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {blok.headline}
    </p>
    <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
      Everything you need to scale your modern content architecture.
    </p>
  </div>
);
export default Teaser;
