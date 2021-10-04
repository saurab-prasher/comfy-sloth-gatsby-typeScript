import styled from "styled-components"

export const FeaturedContainer = styled.section`
  padding: 8rem 3.2rem;
  background-color: #f6f3f2;
`

export const FeaturedInner = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FeaturedH2 = styled.h2`
  align-self: center;
  font-size: 3.2rem;
  font-weight: 500;
  letter-spacing: -0.8px;
  margin-bottom: 6.4rem;
`

export const FeaturedCards = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  margin-bottom: 6.4rem;
  width: 100%;

  /* @media (max-width:48em){
    grid-template-columns: repeat(2,1fr);
  } */
`
