import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = ({ blok }: any) => (
  <div {...storyblokEditable(blok)} className="relative flex flex-col bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-indigo-500/50 transition-all duration-300 group">
    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-500 transition-colors">
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold leading-7 text-gray-900">{blok.name}</h3>
    <p className="mt-2 text-base leading-7 text-gray-600">
      Fully integrated with Storyblok&apos;s visual editor. Update this content in real-time.
    </p>
  </div>
);
export default Feature;
