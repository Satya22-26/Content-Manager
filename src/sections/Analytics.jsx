import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full bg-gray-900 py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2'>
        <img
          className='w-full md:w-[500px] mx-auto my-4 object-cover rounded-lg'
          src='https://img.freepik.com/free-photo/view-3d-happy-men-with-mouths-wide-open_23-2150709954.jpg?size=626&ext=jpg&ga=GA1.2.1828661268.1693632635&semt=ais'
          alt='Excited People'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold text-lg md:text-xl'>
            What is the Price?
          </p>
          <h1 className='md:text-4xl text-white sm:text-3xl text-2xl font-bold py-2'>
            Free & Fabulous! 🌟
          </h1>
          <p className='text-white text-sm md:text-base'>
            Unleash the excitement – it's completely free! No hidden costs, just pure awesomeness without a price tag. 🎁
          </p>
          <button className='bg-black text-[#00df9a] w-full md:w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Hurrah! Enjoy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
