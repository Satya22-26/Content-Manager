import React, { useState } from 'react';
import axios from 'axios';

function VidSum() {
  const [videoUrl, setVideoUrl] = useState('');
  const [transcripts, setTranscripts] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranscribe = async () => {
    try {
      setLoading(true);
  
      const videoId = extractVideoId(videoUrl);
  
      if (!videoId) {
        console.error('Invalid YouTube video URL');
        return;
      }
  
      const apiKey = 'AIzaSyD8x3o5XU38mHEMT9tUJE3xz6JrOqBaLSM'; // Replace with your actual YouTube Data API key
  
      // Make a request to get a list of captions for the video
      const captionsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${apiKey}`
      );
  
      console.log('Captions Response:', captionsResponse.data);
  
      const items = captionsResponse.data.items;
  
      if (!items || items.length === 0) {
        console.error('No captions found for the video');
        return;
      }
  
      // Assume the first caption track contains the transcript
      const captionsTrackId = items[0]?.id;
  
      if (!captionsTrackId) {
        console.error('Video captions not available');
        return;
      }
  
      // Make a request to get the transcript for the selected caption track
      const transcriptResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/captions/${captionsTrackId}?key=${apiKey}`
      );
  
      console.log('Transcript Response:', transcriptResponse.data);
  
      const transcriptText = transcriptResponse.data.snippet?.title;
  
      if (!transcriptText) {
        console.error('Transcript not available');
        return;
      }
  
      setTranscripts(transcriptText);
    } catch (error) {
      console.error('Error fetching transcripts:', error.message);
    } finally {
      setLoading(false);
    }
  };
  

  const extractVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            TranscriberX: YouTube Video Transcription Wizard
          </h1>
          <p className="mb-8 leading-relaxed">
            Your ultimate tool for seamlessly transforming YouTube video content into precise transcripts. Experience
            enhanced accessibility and comprehension, with the added convenience of a built-in summarization feature
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">
                Enter the video url :
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={handleTranscribe}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Commence'}
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://cdn.pixabay.com/photo/2020/11/22/04/10/youtube-5765608_1280.png"
          />
        </div>
      </div>
      {transcripts && (
        <div className="container px-32 pb-10 mt-8">
          <label className="block font-semibold text-white mb-2">Generated Transcripts:</label>
          <textarea
            value={transcripts}
            readOnly
            className="w-full h-32 p-2 bg-gray-800 rounded text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-900"
          />
        </div>
      )}
    </section>
  );
}

export default VidSum;
