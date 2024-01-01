import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import your Firebase authentication instance
import LogOut from './LogOut';
import { useLocation } from 'react-router-dom';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  

  return (
    // <header className="text-gray-400 bg-gray-900 body-font ">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    //       </svg>
    //       <span className="ml-3 text-xl">Tailblocks</span>
    //     </a>
    //     <nav
    //       className=" md:block md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center pl-5"
    //     >
    //       <a href="/Generate-Content" className="mr-5 hover:text-white">
    //         Generate
    //       </a>
    //       <a href="/Generate-Images" className="mr-5 hover:text-white">
    //         Imagifyr
    //       </a>
    //       <a href="/Translate" className="mr-5 hover:text-white">
    //         LinguaVersa
    //       </a>
    //       <a href="/Summary" className="mr-5 hover:text-white">
    //         Synopsis
    //       </a>
    //     </nav>

    //     <div className="signup" id="signup">
    //       <button className='p-0'>
    //         <a
    //           href={isAuthenticated ? '/' : '/SignUp'}
    //           className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
    //         >
    //           {isAuthenticated ? 'Log Out' : 'Sign Up'}
    //         </a>
    //       </button>
    //     </div>
    //     {isAuthenticated && <LogOut />}
    //   </div>
    // </header>


<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-0">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 rounded-full " alt="Flowbite Logo" />
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SkillForge</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <div className="signup" id="signup">
            {isAuthenticated ? (
              // If authenticated, render Log Out button
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <LogOut /> {/* Render LogOut component when authenticated */}
              </button>
            ) : (
              // If not authenticated, render Sign Up button
              <button
                type="button"
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <a href="/SignUp" className="text-white font-serif font-semibold">
                  Sign Up
                </a>
              </button>
            )}
          </div>
    <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
  </div>
  <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
              <a
                href="/"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === '/' ? 'bg-gray-900 text-blue-500' : ''}`}
                //className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/Generate-Content"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={closeMenu}
              >
                Generate Content
              </a>
            </li>
            <li>
              <a
                href="/Generate-Images"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={closeMenu}
              >
                Imagifyr
              </a>
            </li>
            <li>
              <a
                href="/Translate"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={closeMenu}
              >
                LinguaVersa
              </a>
            </li>
            <li>
              <a
                href="/Summary"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={closeMenu}
              >
                Synopsis
              </a>
            </li>
          </ul>
        </div>
</div>
</nav>

  );
}




export default Header;


