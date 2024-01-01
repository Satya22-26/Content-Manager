import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Home from './pages/Home';
import Generate from './pages/Generate';
import Product from './pages/Product';
//import './App.css'
import ImageGen from './pages/ImageGen';
import EmailGen from './pages/EmailGen';
import Translate from './pages/Translate';
import Summary from './pages/Summary';
import VidSum from './pages/VidSum';
import Tweet from './pages/Tweet';
import Social from './pages/social';
function App() {

  return (
    <>
       <BrowserRouter>
    <Routes>
    <Route exact="true" path="/" element={<Home/>}/>
    <Route exact="true" path="/SignUp" element={<SignUp/>}/>
    <Route exact="true" path="/SignIn" element={<SignIn/>}/>
    <Route exact="true" path="/ForgotPassword" element={<ForgotPassword/>}/>
    <Route exact="true" path="/Generate-Content" element={<Generate/>}/>
    <Route exact="true" path="/Generate-Product-Descriptions" element={<Product/>}/>
    <Route exact="true" path="/Generate-Images" element={<ImageGen/>}/>
    <Route exact="true" path="/Generate-Emails" element={<EmailGen/>}/>
    <Route exact="true" path="/Translate" element={<Translate/>}/>
    <Route exact="true" path="/Summary" element={<Summary/>}/>
    <Route exact="true" path="/VidSummary" element={<VidSum/>}/>
    <Route exact="true" path="/Generate-Tweets" element={<Tweet/>}/>
    <Route exact="true" path="/Generate-Posts" element={<Social/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
