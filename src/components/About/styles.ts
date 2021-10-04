import styled from "styled-components"

export const AboutContainer = styled.section`
  .grid {
    display: grid;
    grid-template-columns: 30fr 70fr;
    gap: 6.4rem;
    align-items: center;
    max-width: 112rem;
  }
  .about-outer {
    position: relative;

    .about-bg-1 {
      height: 70vh;
    }
  }

  .about-inner {
    max-width: 124rem;
    margin: 0 auto;
    text-align: center;
  }

  .about-text {
    position: absolute;
    top: 2%;
    left: 50%;
    width: 30%;
    transform: translateX(-50%);
    margin: 0 auto;
    font-size: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (max-width: 48em) {
      width: 60%;
    }
  }

  .about-heading {
    font-size: 3rem;
    line-height: 1.2;
  }
  .about-description {
    font-size: 1.4rem;
    line-height: 1.7;
    letter-spacing: 0.5px;
  }

  .about--2 {
    /* background-color: #f5efea; */
  }

  .about--3 {
    padding: 9.6rem 3.2rem;
    background-color: #f5efea;
    .text-content {
      width: 50%;
      margin: 0 auto;
      text-align: left;

      @media (max-width: 48em) {
        width: 100%;
      }

      h2 {
        font-size: 3rem;
        line-height: 1.4;
      }
      p {
        font-size: 1.5rem;
        line-height: 1.5;
        letter-spacing: 0.5px;
      }
    }
  }

  .about--4 {
    background-color: #e5d7cc;
    padding: 9.6rem 3.2rem;

    @media (max-width: 48em) {
      .about-inner {
        display: flex;
        flex-direction: column-reverse;
      }
    }

    .about-gallery-main {
      width: 100%;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      text-align: left;
    }
    h2 {
      font-size: 3rem;
      line-height: 1.2;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.5;
      letter-spacing: 0.5px;
    }
  }

  .about--5 {
    background-color: #e5d7cc;
  }
`
