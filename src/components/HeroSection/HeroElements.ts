import styled from "styled-components"

export const HeroContainer = styled.section`
  /* margin-bottom: 9.6rem; */
  position: relative;

  .hero-bg {
    width: 100%;
    height: 90vh;
  }
`
export const HeroText = styled.article`
  width: 30%;
  top: 10%;
  left: 35%;
  position: absolute;
  text-align: center;
  z-index: 3;

  @media (max-width: 48em) {
    width: 50%;
    left: 25%;
    top: 5%;
  }
`
export const HeroH1 = styled.h1`
  font-size: 3.6rem;
  font-weight: 400;
  letter-spacing: -0.8px;
  margin-bottom: 2.4rem;
  line-height: 1.2;
`
