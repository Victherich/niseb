
import React from 'react'
import Hero from './Hero'
import AboutUsSection from './AboutUsSection'
import Events from './Events'
import Carousel from './Carousel'
import QuizPage from './QuizPage'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <AboutUsSection/>
      <Carousel/>
      <Events/>
      <QuizPage/>
    </div>
  )
}

export default LandingPage
