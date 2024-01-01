import React from 'react'
import Hero from '../sections/Hero'
import Header from '../components/Header'
import Footer from '../sections/Footer'
import ContentSection from '../sections/ContentSection'
import GallerySection from '../sections/GallerySection'
import Section from '../sections/Section'
import Analytics from '../sections/Analytics'
import FAQ from '../sections/FAQ'
function Home() {
    return (
        <>
           <Header/>
           <Hero/>
           <GallerySection/>
           <Analytics/>
           <FAQ/>
           <Footer/>
        </>
    )
}

export default Home
