const isBrowser = typeof window !== "undefined"

import React, { useEffect, useState } from "react"
import { AboutContainer } from "./styles"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Values from "../Values"

const Index = () => {
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
    <AboutContainer>
      <div className="about-outer">
        {position === "vertical" ? (
          <StaticImage
            src="../../assests/images/about-bg.jpg"
            alt="About Hero image"
            placeholder="blurred"
            layout="fullWidth"
            className="about-bg"
          />
        ) : (
          <StaticImage
            src="../../assests/images/about-bg-2.jpg"
            alt="About Hero image"
            placeholder="blurred"
            layout="fullWidth"
            className="about-bg-1"
          />
        )}

        <div className="about-inner">
          <section className="about about--1">
            <div className="about-text">
              <h1 className="about-heading">
                We're not a normal furniture company
              </h1>
              <p className="about-description">
                Normal was never good enough. Frustrated by compromises between
                quality, affordability, and convenience, our founders started
                Burrow with a new approach to furniture.
              </p>

              <Link className="btn btn--primary" to="/products">
                Shop and see
              </Link>
            </div>
          </section>
        </div>

        <section className="about about--2">
          <StaticImage
            src={"../../assests/images/about-furnitures.jpg"}
            alt="Images of furnitures"
            placeholder="blurred"
            quality={50}
          />
        </section>

        <section className="about about--3">
          <div className="about-inner">
            <div className="text-content">
              <h2>The furniture industry hadn't changed in decades</h2>

              <p>
                We knew that if we wanted to make a meaningful difference, it
                wouldn’t be as simple as putting a couch in a box and selling it
                online. To set a new standard, we had to focus on three
                fundamental changes: a modular platform, a focus on function and
                fashion, and an investment in community and experience.
              </p>
            </div>
          </div>
        </section>

        <section className="about about--4">
          <div className="about-inner grid">
            <div className="text-content">
              <h2>
                Our design philosophy doesn’t have much to do with design at all
              </h2>

              <p>
                We started Burrow because it felt like no one in the furniture
                industry was listening. Legacy retailers churned out one trendy,
                flimsy product after another, and the second they had your cash,
                you were on your own. But like we said, we’re not a normal
                furniture company. We’re committed to designing a different
                experience, something completely new that’s not just created for
                you, but with you.
              </p>
            </div>
            <div className="img-content">
              <StaticImage
                placeholder="blurred"
                layout="constrained"
                src="../../assests/images/about-gallery.jpg"
                alt="about gallery"
                className="about-gallery-main"
              />
            </div>
          </div>
        </section>
        <section className="about about--5">
          <Values />
        </section>
      </div>
    </AboutContainer>
  )
}

export default Index
