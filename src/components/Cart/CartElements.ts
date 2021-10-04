import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { RiDeleteBinLine } from "react-icons/ri"

export const CartContainer = styled.main`
  max-width: 124rem;
  margin: 0 auto;
  height: 100vh;
  text-transform: capitalize;
  padding: 4.8rem 3rem;

  .empty-cart {
    max-width: 114rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    h1 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6;
      letter-spacing: 0.75px;
    }
    span {
      font-size: 1.4rem;

      a {
        color: #474543;
        font-weight: 600;
        border-bottom: 2px solid #918f8e;
      }
    }
  }

  hr {
    height: 1px;
    border-width: 0;
    color: #dadada;
    background-color: #dadada;
  }
`

export const CartContainerHeadings = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  justify-items: center;
  margin-bottom: 2rem;
  transform: translateX(-1rem);

  @media screen and (max-width: 37.5em) {
    grid-template-columns: repeat(4, 1fr) auto;
  }

  p {
    font-size: 1.6rem;
    display: inline-block;
  }
`
export const CartItem = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  justify-items: center;
  align-items: center;
  margin: 4.5rem 0;
  font-size: 1.4rem;

  @media screen and (max-width: 37.5em) {
    grid-gap: 1.6rem;
  }
`

interface CartColorBtnProps {
  background: string
}
export const CartColorBtn = styled.button<CartColorBtnProps>`
  background-color: ${({ background }) => `${background}`};
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 10%;
  display: inline-block;
  margin: 0 0.5rem;
`

export const CartItemImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;

  @media screen and (max-width: 37.5em) {
    flex-direction: column;

    div {
      margin-top: 1.5rem;
    }
  }

  p {
    display: flex;
    align-items: center;

    @media screen and (max-width: 37.5em) {
      justify-content: space-between;
    }
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
    margin-right: 1.5rem;

    @media (max-width: 25em) {
      width: 7.5rem;
      height: 5rem;
    }
  }
`
export const CartItemTotalContainer = styled.div`
  max-width: 33%;
  min-width: fit-content;
  margin: 5rem 0;
  margin-left: auto;

  @media screen and (max-width: 48em) {
    margin: 5rem auto;
    max-width: 50%;
  }
`
export const CartItemTotal = styled.div`
  border: 1px solid #dadada;
  padding: 2.5rem 3.5rem;
  font-size: 1.6rem;
  border-radius: 3px;
  letter-spacing: 1px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  hr {
    margin-bottom: 3rem;
  }
  & > * {
    margin-bottom: 1.6rem;
  }
  h2 {
    font-weight: 500;
  }
`

export const CartItemTotalBtn = styled(Link)`
  width: 100%;
  text-align: center;
  margin: 1.6rem 0;
`
export const Price = styled.div``
export const SubTotal = styled.div``
export const Delete = styled.div``

export const DeleteBtn = styled(RiDeleteBinLine)`
  cursor: pointer;
  font-size: 2.2rem;
`

export const CartItemBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  flex-wrap: wrap;

  gap: 1.6rem;
`

export const ChangeQuantity = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`

const sharedBtnCSS = css`
  font-size: 2rem;
  border: 1px solid #e5d7cd;
  background-color: #e5d7cd;
  padding: 0.4rem 1.2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background-color: #474543;
  }
`

export const IncreaseItem = styled.button`
  ${sharedBtnCSS}
`
export const DecreaseItem = styled.button`
  ${sharedBtnCSS}
`
export const Amount = styled.p`
  font-size: 2rem;
  width: 1.2rem;
  cursor: default;
`
