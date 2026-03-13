import { storyblokEditable, StoryblokRichText } from "@storyblok/react/rsc";

const Hero = ({ blok }: any) => {
  const hasImage = blok.image && blok.image.filename;
  // Append a random timestamp to bypass browser-level image caching
  const imageUrl = hasImage ? `${blok.image.filename}?cb=${Date.now()}` : "";

  return (
    <section 
      {...storyblokEditable(blok)} 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Full-bleed Background Image with Cache Buster */}
      {hasImage ? (
        <img
          src={imageUrl}
          alt={blok.image.alt || "Hero background"}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gray-800 flex items-center justify-center">
           <span className="text-gray-500 font-medium">No Background Image Uploaded</span>
        </div>
      )}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" aria-hidden="true" />

      {/* Content Overlay */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl drop-shadow-md">
            {blok.headline}
          </h1>
          <div className="mt-6 text-xl leading-8 text-gray-200 prose prose-lg prose-invert mx-auto drop-shadow">
            <StoryblokRichText doc={blok.description} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
