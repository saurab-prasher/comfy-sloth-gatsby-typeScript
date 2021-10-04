import { BsFillGridFill, BsList } from "react-icons/bs"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

export const ProductListContainer = styled.div`
  max-width: 136rem;
  margin: 0 auto;
  padding: 1rem 3.2rem;
  .product-container {
    min-height: 100vh;
    position: relative;
    background-color: #fdfdfd;
    display: grid;
    grid-gap: 3.2rem;
    grid-template-columns: 15fr 85fr;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 0.5rem;
    }
  }

  .products-header {
    display: flex;
    flex-direction: column;
    padding-top: 3.2rem;
    gap: 1.6rem;
    text-align: center;
    width: 55%;
    margin: 0 auto;
    margin-bottom: 4.8rem;

    @media (max-width: 48em) {
      width: 75%;
    }
    @media (max-width: 37.5em) {
      width: 100%;
    }
    h1 {
      font-size: 3.6rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }
`

export const ProductGridSection = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2.4rem;
  grid-row-gap: 6.4rem;
  padding: 2.4rem 0;

  img {
    height: 30rem;
    object-fit: cover;
  }
`

export const NotFoundH1 = styled.h1`
  font-size: 3rem;
  margin: 4rem 2rem;
  height: 50rem;
  font-weight: 500;
  text-align: center;
`

export const ProductGridBtnContainer = styled.div`
  display: grid;
  padding: 1.5rem;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  grid-gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }

  p,
  label {
    font-size: 1.4rem;
    margin: 0 0.75rem;
    font-weight: 500;
    @media (max-width: 37.5em) {
      margin: 1rem 0;
    }
  }

  hr {
    border: none;
    border-bottom: 1px solid #ccc;
    @media (max-width: 37.5em) {
      margin-bottom: 1rem;
    }
  }

  select {
    background-color: #dadada;
    background-color: #dadada;
    font-family: inherit;
    font-weight: 500;
    outline: none;
    border: none;
    padding: 0.45rem;

    &:focus {
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
    }
  }
`

const sharedBtn = css`
  width: 3rem;
  height: 3rem;
  margin-right: 1.5rem;
  padding: 0.35rem;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  background-color: transparent;
`

interface BtnView {
  background: string
}

export const BtnGrid = styled(BsFillGridFill)<BtnView>`
  ${sharedBtn}

  background-color: ${({ background }) =>
    background === "grid" ? "#000" : "#fff"};
  color: ${({ background }) => (background === "grid" ? "#fff" : "#000")};
`

export const BtnList = styled(BsList)<BtnView>`
  ${sharedBtn}
  background-color: ${({ background }) =>
    background === "list" ? "#000" : "#fff"};
  color: ${({ background }) => (background === "list" ? "#fff" : "#000")};
`

export const ProductListSection = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 3rem;
  align-items: center;

  @media (max-width: 48em) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
export const ProductListImage = styled.article`
  img {
    display: block;
    width: 30rem;
    height: 20rem;
    object-fit: cover;
    border-radius: 3px;
  }
`
export const ProductListText = styled.article`
  padding: 0 2.4rem;

  h1 {
    font-size: 2.2rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }
  p {
    font-size: 1.7rem;
    margin: 1.5rem 0;
    font-weight: 500;
  }

  hr {
    border: none;
    border-bottom: 2px solid #ccc;
    margin: 2rem 0;
  }
`
