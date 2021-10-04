import styled from "styled-components"

export const HomeGallery = styled.section`
  margin: 0 auto;
  padding: 6.4rem 3.2rem;
  max-width: 124rem;

  article {
    display: grid;
    grid-template-columns: 70fr 30fr;
    gap: 6.4rem;
    align-items: center;
    
    @media (max-width:64em){
      gap: 3.2rem; grid-template-columns: 60fr 40fr;

    }
    @media (max-width:56em){
     display: flex;
     flex-direction: column;

    }
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;
    padding: 1.2rem;

    @media (max-width:56em){
     width: 75%;

    }
  }

  .img-content {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.09);
    }

  
  }

  .gallery-main-image {
  }

  .gallery-heading {
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
  .gallery-description {
    font-size: 1.6rem;
    line-height: 1.6;
  }

  .gallery-images {
    margin: 2.4rem 0;
    width: 100%;
    display: grid;
   
    grid-gap: 1.6rem;

    img {
      height: 25rem;
    }
  }

  .button {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    width: 4.8rem;
    font-size: 2.4rem;
    position: absolute;
    background-color: #fff;
    top: 50%;
    transform: translate(0, -50%);
    box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s;
  }

  .next {
    right: 2rem;

    &:hover {
      transform: translate(0.75rem, -50%);
    }
  }

  .prev {
    left: 2rem;

    &:hover {
      transform: translate(-0.75rem, -50%);
    }
  }
  .slider-outer {
    position: relative;
  }

  .slick-list {
    margin: 0 -1.6rem;
  }
  .slick-slide > div {
    padding: 0 1.6rem;
  }
`
