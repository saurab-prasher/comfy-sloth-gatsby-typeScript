import React, { useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GrNext, GrPrevious } from "react-icons/gr"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import { Settings } from "react-slick/index"
import "slick-carousel/slick/slick.css"

import Cards from "../Card"
import { HomeGallery } from "./styles"

export const query = graphql`
  {
    allProducts(limit: 12) {
      edges {
        node {
          id
          image
          name
        }
      }
    }
  }
`

const Index = () => {
  const {
    allProducts: { edges: products },
  } = useStaticQuery(query)

  const sliderRef = useRef<any>(null)

  const handleNext = () => {
    sliderRef.current.slickNext()
  }
  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }
  const settings: Settings = {
    infinite: true,
    lazyLoad: "ondemand",
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <HomeGallery>
      <article>
        <div className="img-content">
          <StaticImage
            placeholder="blurred"
            layout="constrained"
            src="../../assests/images/heroGallery.jpg"
            alt="main gallery"
            className="gallery-main-image"
          />
        </div>
        <div className="text-content">
          <p className="gallery-heading">
            Discover the interior design of your dreams
          </p>
          <p className="gallery-description">
            From mixing and matching woods to understanding which coffee tables
            are best for different types of sectionals, styling a room is an
            art. So we put together a series of professionally-styled living
            rooms to help jumpstart your imagination.
          </p>
          <Link className="btn btn--primary" to="/products">
            Get inspired &rarr;
          </Link>
        </div>
      </article>

      <div className="slider-outer">
        <Slider ref={sliderRef} {...settings}>
          {products.map(({ node: item }: any) => {
            const { id, name, image } = item

            return (
              <div key={id} className="gallery-images ">
                <Cards id={id} name={name} image={image} />
              </div>
            )
          })}
        </Slider>

        {1 && (
          <button className="button prev" onClick={() => handlePrev()}>
            <GrPrevious />
          </button>
        )}

        {1 && (
          <button className="button next" onClick={handleNext}>
            <GrNext />
          </button>
        )}
      </div>
    </HomeGallery>
  )
}

export default Index
