import styled, { css } from "styled-components"
import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs"

const sharedStarCSS = css`
  color: #ffb900;
  width: 1.8rem;
  height: 1.8rem;
`
export const Wrapper = styled.main`
  max-width: 125rem;
  margin: 0 auto;
  padding: 4.8rem 3.2rem;
  padding-bottom: 9.6rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;
  }
`

export const SinglePageMain = styled.section`
  display: grid;
  grid-template-columns: 70fr 30fr;
  grid-gap: 3.2rem;
  font-weight: 500;

  @media screen and (max-width: 48em) {
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
  }
`

export const SinglePageImg = styled.article``

export const ProductName = styled.h1`
  text-transform: capitalize;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  display: inline-block;
`

export const SinglePageText = styled.article`
  @media (max-width: 48em) {
    width: 75%;
  }

  @media (max-width: 37.5em) {
    width: 100%;
  }
`

export const SinglePageH1 = styled.h1`
  font-size: 3rem;
  letter-spacing: 1px;
  text-transform: capitalize;
`
export const Star = styled(BsStar)`
  ${sharedStarCSS}
`
export const StarFill = styled(BsStarFill)`
  ${sharedStarCSS}
`

export const StarHalf = styled(BsStarHalf)`
  ${sharedStarCSS}
`
export const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem;

  p {
    margin-left: 0.5rem;
    font-size: 1.4rem;
  }
`
export const Price = styled.p`
  font-weight: 600;
  margin: 1rem 0;
  font-size: 1.6rem;
  letter-spacing: 1px;
`
export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
  margin: 1.6rem 0;
`
export const Available = styled.ul`
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  margin: 2.4rem 0;
  li span {
    font-weight: 500;
  }
`
