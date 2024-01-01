import React from 'react';
import Typed from 'react-typed';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
// import { useState ,useEffect} from 'react';
// import { auth } from '../firebase';
import './Hero.css'; 
const Hero = () => {

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setIsAuthenticated(!!user);
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <div className='text-white bg-gray-900 w-screen overflow-x-hidden pt-10 mt-10 mx-0 mb-0'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='animated-text moveText color-changing-text md:text-7xl sm:text-6xl text-4xl font-semibold font-mono md:py-6'>
        IGNITE YOUR JOURNEY WITH SKILLFORGE
        </h1>
        <div className=' justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
          Generate with sleek, effortless precision on our platform, where 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-blue-700'
            strings={['Innovation', 'Meets', 'Simplicity']}
            typeSpeed={50}
backSpeed={60}

            loop
          />
        </div>
        {/* {isAuthenticated ? (
          <div className="text-6xl font-bold text-green-500 text-bold animate-bounce pt-8">
          Welcome
        </div>
        ) : (
          <a href="/signup">
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
              Get Started
            </button>
          </a>
        )} */}
      </div>
    </div>
  );
};

export default Hero;