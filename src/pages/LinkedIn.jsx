import React, { useState } from 'react';
import { CohereClient } from 'cohere-ai';

const LinkedIn = () => {
  const [topic, setTopic] = useState('');
  const [generatedPost, setGeneratedPost] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGeneratePost = async () => {
    setLoading(true);
    const cohere = new CohereClient({
      token: 'EZNuiejN1Wjb7RZLTiW4RVBm7uS4RKQ6iy7zofN4', // Your Cohere API key
    });

    try {
      const response = await cohere.generate({
        model: 'command',
        prompt: `Write a LinkedIn post (with proper use of catchy tags , logos and emojis) about: ${topic}`,
        maxTokens: 300,
        temperature: 0.9,
        k: 0,
        stopSequences: [],
        returnLikelihoods: 'NONE',
      });

      setGeneratedPost(response.generations[0].text);
    } catch (error) {
      console.error('Error generating post:', error);
    }finally {
        setLoading(false);
      }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPost);
      alert('Post copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font w-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            🌟 LinkedInLuxe:
          </h1>
          <p className="mb-4 leading-relaxed">
            Elevate Your LinkedIn Presence with Engaging Posts! 🚀✨ Unleash Your Professional Storytelling and Stand Out in the Feed!"
          </p>
          <div className="relative mr-4 mb-8 md:w-full lg:w-full xl:w-1/2 w-2/4">
            <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">
              Enter Topic:
            </label>
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="flex w-full md:justify-start justify-center items-end">
            <button
              onClick={handleGeneratePost}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Generate Post
            </button>
          </div>

        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://img.freepik.com/free-vector/flat-design-linkedin-mockup_23-2149217511.jpg?size=626&ext=jpg&ga=GA1.1.1828661268.1693632635&semt=ais"
          />
        </div>
       
      </div>
      {loading && (
            <div className="flex justify-center mt-4 mb-6 animate-bounce">
              <span style={{ height: '0.5rem', width: '0.5rem' }} className="bg-white rounded-full inline-block animate-pulse mr-2"></span>
              <span style={{ height: '0.75rem', width: '0.75rem' }} className="bg-white rounded-full inline-block animate-pulse  ml-2 mr-2"></span>
              <span style={{ height: '1rem', width: '1rem' }} className="bg-white rounded-full inline-block animate-pulse  ml-2 mr-2"></span>
              <span style={{ height: '1.25rem', width: '1.25rem' }} className="bg-white rounded-full inline-block animate-pulse  ml-2"></span>
            </div>
          )}
          {generatedPost && (
            <div className="mt-8 bg-gray-800 rounded p-6 border border-indigo-500 relative">
                <img
      src="https://img.icons8.com/pastel-glyph/64/000000/copy--v1.png"
      alt="Copy Icon"
      className="absolute top-2 right-2 w-4 h-4 cursor-pointer"
      onClick={handleCopyToClipboard}
    />
              <p className="text-lg font-medium text-white mb-4">Generated Post:</p>
              <p className="text-gray-300">{generatedPost}</p>
            </div>
          )}
    </section>
  );
};

export default LinkedIn;
