const isBrowser = typeof window !== `undefined`
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { HeroContainer, HeroH1, HeroText } from "./HeroElements"

import { StaticImage } from "gatsby-plugin-image"

const Hero: React.FC = () => {
  const [position, setPosition] = useState<string | undefined>("vertical")
  const getPosition = () => {
    if (isBrowser) {
      return window.innerWidth < 768 ? "horizontal" : "vertical"
    }
  }
  useEffect(() => {
    if (isBrowser) {
      window.innerWidth > 768
        ? setPosition("vertical")
        : setPosition("horizontal")
      window.addEventListener("resize", updateSize)
    } else return
    return () => window.removeEventListener("resize", updateSize)
  }, [position])

  const updateSize = () => {
    setPosition(getPosition())
  }

  return (
    <HeroContainer>
      {position === "vertical" ? (
        <StaticImage
          src="../../assests/images/heroimage-1.jpg"
          alt="Hero image"
          placeholder="blurred"
          className="hero-bg"
          layout="constrained"
        />
      ) : (
        <StaticImage
          src="../../assests/images/heroimage-2.jpg"
          alt="Hero image"
          placeholder="blurred"
          layout="fullWidth"
        />
      )}
      <HeroText>
        <HeroH1>Welcome to the new standard in furniture</HeroH1>
        <Link className="btn btn--primary" to="/products">
          Shop Now
        </Link>
      </HeroText>
    </HeroContainer>
  )
}

export default Hero
