
import React from 'react'
import Hero from './Hero'
import AboutUsSection from './AboutUsSection'
import Events from './Events'
import Carousel from './Carousel'
import QuizPage from './QuizPage'
import GalleryComponent from './GalleryComponent'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <AboutUsSection/>
      <Carousel/>
      <Events/>
      <QuizPage/>
      <GalleryComponent/>
    </div>
  )
}

export default LandingPage
