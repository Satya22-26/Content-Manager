import React from 'react'
import { CohereClient } from "cohere-ai";
import { useState } from 'react';

const LoadingSpinner = () => (
    <div className="flex justify-center mt-8 mb-6 animate-spin">
      <span style={{ height: '0.5rem', width: '0.5rem' }} className="bg-white rounded-full inline-block animate-bounce mr-2"></span>
      <span style={{ height: '0.75rem', width: '0.75rem' }} className="bg-white rounded-full inline-block animate-bounce ml-2 mr-2"></span>
      <span style={{ height: '1rem', width: '1rem' }} className="bg-white rounded-full inline-block animate-bounce ml-2 mr-2"></span>
      <span style={{ height: '1.25rem', width: '1.25rem' }} className="bg-white rounded-full inline-block animate-bounce ml-2"></span>
    </div>
  );

function Tweet() {

    const [topic, setTopic] = useState('');
    const [generatedTweet, setGeneratedTweet] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateTweet = async () => {
        setIsLoading(true);
        const cohere = new CohereClient({
          token: "D8jxTSr8kmzMMdMB80SJkDiqJVubzM1mqXn81SOD", // Your Cohere API key
        });
    
        try {
          const response = await cohere.generate({
            model: "command",
            prompt: `Generate a Twitter post(use necessary taglines/catchylines and hashtags and the description of the topic should be short and attractive and necessary logos and emojis) on the topic: ${topic}\n\n`,
            maxTokens: 150,
            temperature: 0.9,
            k: 0,
            stopSequences: [],
            returnLikelihoods: "NONE"
          });
    
          setGeneratedTweet(response.generations[0].text);
        } catch (error) {
          console.error("Error generating tweet:", error);
        }finally {
            setIsLoading(false);
          }
      };

      const handleCopyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(generatedTweet);
          alert('Tweet copied to clipboard!');
        } catch (error) {
          console.error('Error copying to clipboard:', error);
        }
      };

    return (
        <section className="text-gray-400 bg-gray-900 body-font w-screen">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://img.freepik.com/free-vector/realistic-social-media-tweet-mockup_23-2149210195.jpg?size=626&ext=jpg&ga=GA1.1.1828661268.1693632635&semt=ais"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          VisualTweet Pro: Transforming Tweets into Eye-Catching Masterpieces
          </h1>
          <p className="leading-relaxed mb-4">
          Bringing creativity and impact to your posts effortlessly. Elevate your social media presence with captivating visuals in a snap!
          </p>
          <div className="relative sm:mb-0 flex-grow w-full">
  <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Enter the topic :</label>
  <input
    type="text"
    id="full-name"
    name="full-name" value={topic}
    onChange={(e) => setTopic(e.target.value)}
    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  />
</div>

          <div className="flex justify-center mt-8">
            <button onClick={handleGenerateTweet} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {isLoading ? 'Generating...' : 'Generate Tweet'}
            </button>
            
          </div>
          {isLoading ? <LoadingSpinner /> : ''}
          {generatedTweet && (
  <div className="relative mt-8 bg-gray-800 rounded p-6 border border-indigo-500">
    <img
      src="https://img.icons8.com/pastel-glyph/64/000000/copy--v1.png"
      alt="Copy Icon"
      className="absolute top-2 right-2 w-4 h-4 cursor-pointer"
      onClick={handleCopyToClipboard}
    />
    <p className="text-lg font-medium text-white mb-4">Generated Tweet:</p>
    <p className="text-gray-300">{generatedTweet}</p>
  </div>
)}

        </div>
      </div>
    </section>
    )
}

export default Tweet
