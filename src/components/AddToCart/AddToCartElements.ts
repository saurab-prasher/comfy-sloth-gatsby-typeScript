import styled, { css } from "styled-components"
import { Link } from "gatsby"

interface ColorsBtnProps {
  background: string
}

export const ColorsBtn = styled.button<ColorsBtnProps>`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 5%;
  display: inline-block;
  cursor: pointer;
  opacity: 0.5;
  background-color: ${({ background }: any) => `${background}`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  color: #fff;
  font-weight: 700;
`

export const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.5rem;
  width: fit-content;

  @media (max-width: 68.75em) {
    align-items: center;
  }

  @media screen and (max-width: 48em) {
    align-items: flex-start;
  }

  .add-to-cart {
    display: flex;
    gap: 3rem;
    margin: 2.4rem 0;
    flex-wrap: wrap;
    @media (max-width: 68.75em) {
      flex-direction: column;
      gap: 2.4rem;
      align-items: center;
    }

    @media screen and (max-width: 48em) {
      flex-direction: row;
    }
  }
`

export const AddToCartSection = styled.div`
  display: flex;
  justify-content: baseline;
`

const sharedCSS = css`
  background-color: transparent;
  font-size: 3rem;
  font-weight: 600;
  cursor: pointer;
  display: block;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: capitalize;

  .colors-btn-container {
    display: flex;
    gap: 1.2rem;
  }
`
export const AddToCartIncBtn = styled.button`
  ${sharedCSS}
`
export const AddToCartDecBtn = styled.button`
  ${sharedCSS}
`
export const AddToCartAmount = styled.p`
  ${sharedCSS}
  cursor: none;
  margin: 1.5rem;
`
