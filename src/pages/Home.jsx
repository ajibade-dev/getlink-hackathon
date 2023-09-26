import React from 'react'
import Hero from '../sections/Hero'
import Introduction from '../sections/Introduction'
import Rules from '../sections/Rules'
import Attributes from '../sections/Attributes'
import FAQs from '../sections/FAQs'
import Timeline from '../sections/Timeline'
import Prices from '../sections/Prices'
import Sponsors from '../sections/Sponsors'
import Privacy from '../sections/Privacy'
import Footer from "../sections/Footer"
const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Rules />
      <Attributes />
      <FAQs />
      <Timeline />
      <Prices />
      <Sponsors />
      <Privacy />
      <Footer />
    </div>
  )
}

export default Home