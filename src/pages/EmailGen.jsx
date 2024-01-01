import React, { useState } from 'react';
import { CohereClient } from 'cohere-ai';
//npm i -s cohere-ai
const EmailGen = () => {
  const [topic, setTopic] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');

  const cohere = new CohereClient({
    token: 'EZNuiejN1Wjb7RZLTiW4RVBm7uS4RKQ6iy7zofN4', // Replace with your Cohere API key
  });

  const handleSubmit = async () => {
    try {
      const response = await cohere.generate({
        model: 'command',
        prompt: `Generate an email based on topic: ${topic}`,
        maxTokens: 434,
        temperature: 0.9,
        k: 0,
        stopSequences: [],
        returnLikelihoods: 'NONE',
      });

      const generatedText = response.generations[0].text;
      setGeneratedEmail(generatedText);
    } catch (error) {
      console.error('Cohere API error:', error);
      // Handle error as needed
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font w-screen h-full overflow-y-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Email Mastery: Generate Persuasive Cold Emails Effortlessly</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Supercharge your prospecting efforts with our advanced cold email solution. Effortlessly create engaging emails tailored to your audience, ensuring your messages stand out and drive results in every outreach campaign</p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
          <div className="relative sm:mb-0 flex-grow w-full">
            <label htmlFor="topic" className="leading-7 text-lg font-semibold text-gray-400">Topic <br />(To, Context, Type, ...)</label>
            <input 
              type="text" 
              placeholder="Type here" 
              id="topic" 
              name="topic" 
              value={topic} 
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            />
          </div>
          <button onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
        <textarea 
          className='resize w-full h-48 bg-black text-secondary p-4 mt-10 rounded-2xl' 
          placeholder="Your Email will be generated here"
          value={generatedEmail}
          readOnly
        ></textarea>
      </div>
    </section>
  );
};

export default EmailGen;
