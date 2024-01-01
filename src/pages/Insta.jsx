import React from 'react'
import { CohereClient } from "cohere-ai";
import { useState } from 'react';

function Insta() {

    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const [generatedCaption, setGeneratedCaption] = useState('');

    const handleGenerateCaptions = async () => {
        setLoading(true);
    
        const cohere = new CohereClient({
          token: "D8jxTSr8kmzMMdMB80SJkDiqJVubzM1mqXn81SOD", // Replace with your Cohere API key
        });
    
        try {
          const response = await cohere.generate({
            model: "command",
            prompt: `Write 2 to 3 Instagram captions (with one line space) with hashtags (taglines and emojis and logos if needed) considering : ${inputText}\n\n`,
            maxTokens: 200,
            temperature: 0.9,
            k: 0,
            stopSequences: [],
            returnLikelihoods: "NONE"
          });
    
          setGeneratedCaption(response.generations[0].text);
        } catch (error) {
          console.error("Error generating captions:", error);
        } finally {
          setLoading(false);
        }
      };

      const handleCopyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(generatedCaption);
          alert('Captions copied to clipboard!');
        } catch (error) {
          console.error('Error copying to clipboard:', error);
        }
      };

    return (
        <section className="text-gray-400 bg-gray-900 body-font w-screen">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-white">InstaVibe Verbiage :</h1>
          <p className="leading-relaxed mt-4">Step into the world of CaptionCanvas, your go-to platform for crafting unique Instagram narratives. Unleash the power of InstaVibe Verbiage and turn every photo into a captivating visual story!</p>
          <div className="p-2 ">
  <div className="relative">
    <label htmlFor="name" className="leading-7 text-sm text-gray-400">
      Enter about the topic:
    </label>
    <input
      type="text"
      id="name"
      name="name"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
</div>
<div className="p-2 w-full">
  <button onClick={handleGenerateCaptions} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
  {loading ? 'Generating Captions...' : 'Generate Captions'}
  </button>
</div>


        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg  flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <img
            className="object-cover object-center rounded"
            alt="Insta Image"
            src="https://img.freepik.com/free-psd/social-media-instagram-post-template_47618-73.jpg?size=626&ext=jpg&ga=GA1.1.1828661268.1693632635&semt=ais" 
          />
        </div>
      </div>
      {loading && (
            <div className="flex justify-center mt-6 mb-6 animate-ping">
              <span style={{ height: '0.5rem', width: '0.5rem' }} className="bg-white rounded-full inline-block animate-pulse mr-2"></span> 
    <span style={{ height: '0.75rem', width: '0.75rem' }} className="bg-white rounded-full inline-block animate-pulse  ml-2 mr-2"></span>
    <span style={{ height: '1rem', width: '1rem' }} className="bg-white rounded-full inline-block animate-pulse  ml-2 mr-2"></span>
    <span style={{ height: '1.25rem', width: '1.25rem' }} className="bg-white rounded-full inline-block animate-pulse  ml-2"></span>
            </div>
          )}

          {generatedCaption && (
            <div className="relative mt-8 bg-gray-800 rounded p-6 border border-indigo-500">
              <img
                src="https://img.icons8.com/pastel-glyph/64/000000/copy--v1.png"
                alt="Copy Icon"
                className="absolute top-2 right-2 w-4 h-4 cursor-pointer"
                onClick={handleCopyToClipboard}
              />
              <p className="text-lg font-medium text-white mb-4">Generated Captions:</p>
              <p className="text-gray-300">{generatedCaption}</p>
            </div>
          )}
    </section>
    )
}

export default Insta
