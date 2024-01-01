import React from 'react';
import { useState } from 'react';

// const query = async (data) => {
//   const response = await fetch(
//     // "https://api-inference.huggingface.co/models/Amrrs/sd-prompt-generator-gpt-neo"
//     "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-1.3B",
//     {
//       headers: { Authorization: 'Bearer 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' },
//       method: 'POST',
//       body: JSON.stringify(data),
//     }
//   );
//   const result = await response.json();
//   return result;
// };

const Product = () => {

    const [productFeatures, setProductFeatures] = useState('');
    const [generatedDescription, setGeneratedDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [productCategory, setProductCategory] = useState('');
    // const handleGenerateDescription = async () => {
    //   try {
    //     setLoading(true);
    //     const result = await query({ inputs: `Generate a captivating,comprehensive and detailed product description for a ${productCategory} with the following features:${productFeatures} `     
    //   });
    //     console.log('API Response:', result); // Log the entire response
    //     setGeneratedDescription(result[0]?.generated_text || '');
    //   } catch (error) {
    //     console.error('Error generating description:', error);
    //     alert('Failed to generate description. Please try again later.');
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    const handleGenerateDescription = async () => {
      try {
        setLoading(true);
        setShowUpdateAlert(true);
        const options = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer EpjsT7ovlysdJNwsYuJg2eb6GVw5FzPo',
          },
          body: JSON.stringify({
            numResults: 1,
            maxTokens: 100,
            minTokens: 0,
            temperature: 0.9,
            topP: 1,
            topKReturn: 0,
            frequencyPenalty: {
              scale: 0,
              applyToWhitespaces: true,
              applyToPunctuations: true,
              applyToNumbers: true,
              applyToStopwords: true,
              applyToEmojis: true,
            },
            presencePenalty: {
              scale: 0,
              applyToWhitespaces: true,
              applyToPunctuations: true,
              applyToNumbers: true,
              applyToStopwords: true,
              applyToEmojis: true,
            },
            countPenalty: {
              scale: 0,
              applyToWhitespaces: true,
              applyToPunctuations: true,
              applyToNumbers: true,
              applyToStopwords: true,
              applyToEmojis: true,
            },
            prompt: `Generate a captivating product description for a ${productCategory} with the following features: ${productFeatures}`,
          }),
        };
  
        const response = await fetch('https://api.ai21.com/studio/v1/j2-mid/complete', options);
        const result = await response.json();
        console.log('AI21 Response:', result);
  
        // Extract the generated text from AI21 response
        const generatedText = result.completions[0]?.data.text || '';

  
        // Set the generated description
        setGeneratedDescription(generatedText);
      } catch (error) {
        console.error('Error generating description:', error);
        alert('Failed to generate description. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(generatedDescription);
      alert('Text copied to clipboard!');
      
    };

  return (
    <section className="text-gray-400 bg-gray-900 h-full body-font relative w-screen ">
      <div className="container px-5 py-24 mx-auto h-full">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">🛍️Generate Product  Descriptions🛍️</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Stirring Your Senses with Simplicity</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            
          <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="product-category" className="leading-7 text-lg text-gray-400 flex items-start ">
                  Provide product category:
                </label>
                <input
                  type="text"
                  id="product-category"
                  name="product-category"
                  className="resize w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="product-features" className="leading-7 text-lg text-gray-400 flex items-start ">Provide product's features:</label>
                <input type="text" id="product-features" name="product-features" className="resize w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={productFeatures}
                    onChange={(e) => setProductFeatures(e.target.value)}
                />
              </div>
            </div>
      
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleGenerateDescription}
              disabled={loading}
              >{loading ? 'Generating...' : 'Generate AI Suggestions'}</button>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="generated-description" className="leading-7 text-lg text-gray-400 flex items-start">Response From AI:</label>
                <textarea id="generated-description" name="generated-description"
                   value={generatedDescription}
                   readOnly
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-y leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
        <button
          className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={handleCopyToClipboard}
          disabled={!generatedDescription}
        >
          Copy to Clipboard
        </button>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

