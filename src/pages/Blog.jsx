import React from 'react'
import { CohereClient } from "cohere-ai";
import { useState } from 'react';

function Blog() {

    const [keywords, setKeywords] = useState('');
    const [generatedTitles, setGeneratedTitles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);  

    const handleGenerateTitles = async () => {
        setIsLoading(true);
    
        const cohere = new CohereClient({
          token: "D8jxTSr8kmzMMdMB80SJkDiqJVubzM1mqXn81SOD", // Your Cohere API key
        });
    
        try {
          const response = await cohere.generate({
            model: "command",
            prompt: `Write 5 titles for a blog ideas for the keywords - ${keywords}`,
            maxTokens: 300,
            temperature: 0.9,
            k: 0,
            stopSequences: [],
            returnLikelihoods: "NONE"
          });
    
          setGeneratedTitles(response.generations[0].text.split('\n'));
        } catch (error) {
          console.error("Error generating titles:", error);
        } finally {
          setIsLoading(false);
        }
      };

      const handleCopyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(generatedTitles);
          alert('Headlines copied to clipboard!');
        } catch (error) {
          console.error('Error copying to clipboard:', error);
        }
      };

    return (
        <section className="text-gray-400 bg-gray-900 body-font w-screen">
        <div className="container mx-auto flex flex-col px-5 py-19 justify-center items-center">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://img.freepik.com/free-photo/teamwork-making-online-blog_53876-94868.jpg?size=626&ext=jpg&ga=GA1.1.1828661268.1693632635&semt=sph"
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            TitleTrooper: Crafting Captivating Blog Headlines
            </h1>
            <p className="mb-8 leading-relaxed">
            Your go-to tool for effortlessly creating attention-grabbing blog titles. Transform your ideas into captivating headlines with just a click, and watch your content shine in the digital realm!
            </p>
            <div className="flex w-full justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">
                  Give keywords describing your blog :
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field" value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button onClick={handleGenerateTitles} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {isLoading ? 'Generating...' : 'Witness'}
              </button>
            </div>  
          </div>
        </div>
        {isLoading && (
          <div className="flex justify-center mt-6 mb-6 animate-bounce">
            <span style={{ height: '0.5rem', width: '0.5rem' }} className="bg-white rounded-full inline-block animate-pulse mr-2"></span>
            <span style={{ height: '0.75rem', width: '0.75rem' }} className="bg-white rounded-full inline-block animate-pulse ml-2 mr-2"></span>
            <span style={{ height: '1rem', width: '1rem' }} className="bg-white rounded-full inline-block animate-pulse ml-2 mr-2"></span>
            <span style={{ height: '1.25rem', width: '1.25rem' }} className="bg-white rounded-full inline-block animate-pulse ml-2"></span>
          </div>
        )}

{generatedTitles.length > 0 && (
          <div className="mt-8 relative text-left border border-indigo-500 rounded p-4 transition-all duration-300 ease-in-out">
             <img
      src="https://img.icons8.com/pastel-glyph/64/000000/copy--v1.png"
      alt="Copy Icon"
      className="absolute top-2 right-2 w-4 h-4 cursor-pointer border border-white"
      onClick={handleCopyToClipboard}
    />
            <h2 className="text-xl font-medium text-white mb-4">Generated Titles:</h2>
            <ul className="list-disc list-inside text-gray-300">
              {generatedTitles.map((title, index) => (
                <li key={index} className="mb-2">{title}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    )
}

export default Blog
