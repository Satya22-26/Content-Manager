import React from 'react';

const GallerySection = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap items-center justify-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-white lg:w-1/2 lg:mb-0 mb-4 text-center">
            Explore Our Gallery of Working Wonders!
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base font-medium text-center">
            Discover a visual showcase of our diverse and innovative projects, each a testament to our commitment to creativity and quality.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-6">
                <p className="text-white font-bold text-center text-lg">
                  Tweet Precision: Where AI Ensures Your Message Stands Out in the Twitterverse
                </p>
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-6">
                <p className="text-white font-bold text-center text-lg">
                  Your Sales Companion: Elevating Product Narratives Beyond Imagination with AI.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <div className="w-full h-full bg-gradient-to-br from-green-500 to-yellow-500 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-6">
                <p className="text-white font-bold text-center text-lg">
                  Smart Outreach: Let AI Elevate Your Email Persona with Compelling Messages.
                </p>
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-6">
                <p className="text-white font-bold text-center text-lg">
                  Visual Wonders Unleashed: Redefining Creativity with AI-Generated Images.
                </p>
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-6">
                <p className="text-white font-bold text-center text-lg">
                  Beyond Automation: Crafting Social Media Brilliance with AI.
                </p>
              </div>
            </div>
          </div>
          {/* Additional Divs */}
          <div className="md:p-2 p-1 w-full">
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-6">
              <p className="text-white font-bold text-center text-lg">
                Text Simplified, Insights Amplified: Redefining Reading Experiences with AI Summarization.
              </p>
            </div>
          </div>
          <div className="md:p-2 p-1 w-full">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-6">
              <p className="text-white font-bold text-center text-lg">
                Global Conversations, Local Understanding: Unlock Multilingual Capabilities with AI.
              </p>
            </div>
          </div>
          {/* End Additional Divs */}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
