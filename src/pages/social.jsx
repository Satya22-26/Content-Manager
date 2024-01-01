import React, { useState } from 'react';
import LinkedIn from './LinkedIn';
import Insta from './Insta';
import Blog from './Blog';

const Section1 = () => (
  <LinkedIn />
);

const Section2 = () => (
  <Blog/>
);

const Section3 = () => (
  <Insta />
);

const Social = () => {
  const [selectedSection, setSelectedSection] = useState('section1');

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const renderNavItem = (section, text) => (
    <a
      href={`#${section}`}
      onClick={() => handleSectionClick(section)}
      className={`text-white text-lg md:text-xl lg:text-2xl xl:text-3xl ${selectedSection === section ? 'font-bold border-b-2 border-indigo-500' : ''}`}
    >
      {text}
    </a>
  );

  return (
    <div className="bg-gray-900 text-white w-full min-h-screen">
      <nav className="flex justify-evenly p-4 bg-gray-800">
        {renderNavItem('section1', 'LinkedIn Posts')}
        {renderNavItem('section2', 'Blog Titles')}
        {renderNavItem('section3', 'Insta Captions')}
      </nav>

      <div className="p-8">
        {selectedSection === 'section1' && <Section1 />}
        {selectedSection === 'section2' && <Section2 />}
        {selectedSection === 'section3' && <Section3 />}
      </div>
    </div>
  );
};

export default Social;
