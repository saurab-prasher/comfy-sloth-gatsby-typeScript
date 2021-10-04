import styled from "styled-components"

export const Testimonials = styled.section`
  padding: 8rem 3.2rem;
  margin: 0 auto;
  max-width: 124rem;

  h2 {
    font-size: 3.6rem;
    text-align: center;
    line-height: 1.2;
    letter-spacing: -0.5px;
    margin-bottom: 3rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    text-align: center;
    align-items: center;
    grid-gap: 3.2rem;
  }

  .testimonial {
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }

  .testimonial-heading {
    font-size: 2rem;
    font-weight: 600;
  }

  .testimonial-text {
    font-size: 1.4rem;
    line-height: 1.6;
  }

  .testimonial-image {
    border-radius: 50%;
    margin: 1.2rem;
  }
`
