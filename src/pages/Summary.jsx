import React from 'react'
import { useState } from 'react';
function Summary() {

    const [inputText, setInputText] = useState('');
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);

    const query = async (data) => {
        try {
          const response = await fetch(
            "https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6",
            {
              headers: {
                Authorization: "Bearer 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",
                'Content-Type': 'application/json',
              },
              method: "POST",
              body: JSON.stringify(data),
              max_length: 1000,
              min_length: 400, 
              num_beams: 4,  
              length_penalty: 2.0
            }
          );
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const result = await response.json();
          return result;
        } catch (error) {
          console.error('API Error:', error);
          throw error;
        }finally {
      setLoading(false);
    }
      };
    
      const handleSummarize = async () => {
        try {
          setLoading(true);
          const response = await query({ "inputs": inputText });
          const generatedSummary = response[0]?.summary_text || '';
          setOutput(generatedSummary);
        } catch (error) {
          console.error('Error generating summary:', error);
          setOutput('An error occurred while generating the summary.');
        }finally {
      setLoading(false);
    }
      };
      const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(output)
          .then(() => alert('Summary copied to clipboard'))
          .catch((error) => console.error('Copy to clipboard failed:', error));
      }

    return (
        <section className="text-gray-400 bg-gray-900 body-font py-0" style={{ width: '100vw', height:'140vh' }}>
        <div className="container mx-auto flex px-5 py-24  md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Text in a Snap: <br className="hidden lg:inline-block" /> Unveiling Insights with Lightning-Fast Summarization!
            </h1>
            <p className="mb-8 leading-relaxed">
            Transform lengthy text into concise insights effortlessly. Enhance readability, save time, and capture key information at a glance with this user-friendly tool.
            </p>
          
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <label htmlFor="textArea" className="text-white text-2xl font-bold mb-4">
      Give what to summarize:
    </label>
    <textarea
      id="textArea"
      className="bg-black text-white w-full p-4 rounded-2xl mt-6 h-21 "
      placeholder="Enter your text here..."
      rows="6"
      value={inputText}
          onChange={(e) => setInputText(e.target.value)}
    ></textarea>
      <div className="flex justify-center mt-6">
              <button onClick={handleSummarize} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sculpt a Summation
              </button>
              
            </div>
</div>

        </div>
        <div className="container mx-auto px-5 pb-8 md:flex-row flex-col items-center">
        {loading && (
  <div className="flex justify-center mt-6 mb-6 animate-ping">
    <span style={{ height: '0.5rem', width: '0.5rem' }} className="bg-white rounded-full inline-block animate-pulse mr-2"></span> 
    <span style={{ height: '0.75rem', width: '0.75rem' }} className="bg-white rounded-full inline-block animate-pulse  ml-2 mr-2"></span>
    <span style={{ height: '1rem', width: '1rem' }} className="bg-white rounded-full inline-block animate-pulse  ml-2 mr-2"></span>
    <span style={{ height: '1.25rem', width: '1.25rem' }} className="bg-white rounded-full inline-block animate-pulse  ml-2"></span>
  </div>
)}





{output && (
  <div className="my-6 pb-5 mx-auto p-4 w-4/6 bg-gray-800 rounded-2xl text-white relative ">
  <button
              onClick={handleCopyToClipboard}
              className="absolute top-2 right-2 bg-indigo-500 hover:text-white p-1"
            >
              <img width="18" height="18" src="https://img.icons8.com/pastel-glyph/64/000000/copy--v1.png" alt="Copy Icon" />
            </button>


    <strong>Generated Summary:</strong>
    <p>{output}</p>
  </div>
)}
        </div>
      </section>
    )
}

export default Summary
