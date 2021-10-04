import React from "react"
import { IMAGES } from "Images"

import { Testimonials } from "./styles"

const index = () => {
  return (
    <Testimonials className="testimonials">
      <h2>It's your time to speak</h2>

      <div>
        <figure className="testimonial">
          <img
            src={IMAGES.customer1.default}
            alt="customer 1"
            className="testimonial-image"
          />
          <p className="testimonial-heading">I’m very satisfied!</p>
          <blockquote className="testimonial-text">
            I received an excellent service before and after my purchase. All my
            questions were answered very quickly. The furniture look exactly as
            advertised. I am very satisfied with my experience with M2GO.
            <p className="testimonial-name">&mdash; Michele Champagne</p>
          </blockquote>
        </figure>

        <figure className="testimonial">
          <img
            src={IMAGES.customer2.default}
            alt="customer 2"
            className="testimonial-image"
          />
          <p className="testimonial-heading">
            Entirely satisfied with my new Desk.
          </p>
          <blockquote className="testimonial-text">
            I received an excellent service before and after my purchase. All my
            questions were answered very quickly. The furniture look exactly as
            advertised. I am very satisfied with my experience with M2GO.
            <p className="testimonial-name">&mdash; Francois Frenette</p>
          </blockquote>
        </figure>

        <figure className="testimonial">
          <img
            src={IMAGES.customer3.default}
            alt="customer 3"
            className="testimonial-image"
          />
          <p className="testimonial-heading">I was impressed!</p>
          <blockquote className="testimonial-text">
            I ordered a bedframe and I was very impressed with the quality of
            the service and the fast delivery. I told a friend who was looking
            for a mattress about it and she found the perfect one for her.
            <p className="testimonial-name">&mdash; Isabelle Pinot</p>
          </blockquote>
        </figure>
      </div>
    </Testimonials>
  )
}

export default index
