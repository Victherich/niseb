
import React from 'react'
import Hero from './Hero'
import AboutUsSection from './AboutUsSection'
import Events from './Events'
import Carousel from './Carousel'
import QuizPage from './QuizPage'
import GalleryComponent from './GalleryComponent'
import ConferenceComponent from './ConferenceComponent'
import FellowshipComponent from './FellowshipComponent'
import QuizathonComponent from './QuizathonComponent'
import ConferenceGallery from './ConferenceGallery'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <AboutUsSection/>
      <Carousel/>
      <ConferenceComponent/>
      <ConferenceGallery/>
      <FellowshipComponent/>
      <QuizathonComponent/>
      <Events/>
      <QuizPage/>
      <GalleryComponent/>
    </div>
  )
}

export default LandingPage
