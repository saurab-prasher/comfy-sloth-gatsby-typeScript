import React from "react"
import {
  HeroSection,
  Featured,
  NewsLetter,
  Values,
  HomeGallery,
  Testimonials,
  Layout,
} from "../components"

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Featured />
      <Values />
      <HomeGallery />
      <Testimonials />
      <NewsLetter />
    </Layout>
  )
}

export default Home
