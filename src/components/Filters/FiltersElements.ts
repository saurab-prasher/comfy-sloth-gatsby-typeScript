import styled, { css } from "styled-components"

const sharedCSS = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`

const sharedButton = css`
  border-radius: 12%;
  font-size: 1.6rem;
  opacity: 0.5;
  display: block;
  background-color: transparent;
  cursor: pointer;
  letter-spacing: 0.5px;
`

export const FilterContainer = styled.aside`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.2rem;
  padding-top: 1.6rem;

  @media (max-width: 48em) {
    display: grid;
    grid-template-columns: 1fr 3fr repeat(2, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 2.4rem;
    justify-items: start;
    padding: 0;
    padding-bottom: 4.8rem;
  }

  h3,
  label {
    font-size: 2rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    display: block;
  }
`
export const FilterFormContainer = styled.div`
  input {
    text-transform: capitalize;
    border: 1px solid #a4a39e;
    font-family: inherit;
    outline: none;
    width: 100%;
    padding: 1rem;

    @media (max-width: 48em) {
      width: 60%;
    }
    &:focus {
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    }
  }
`
export const Category = styled.div`
  ${sharedCSS}
  padding: 0;
  .btn--category {
    display: block;
    background-color: transparent;
    cursor: pointer;
    text-transform: capitalize;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
  }

  div {
    ${sharedCSS}
  }

  div {
    @media screen and (max-width: 48em) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: start;
      gap: 0;
      grid-row-gap: 1.2rem;
      grid-column-gap: 2.4rem;
    }
  }
`
export const Company = styled.div`
  ${sharedCSS}
  select {
    background-color: #dadada;
    font-family: inherit;
    font-weight: 500;
    outline: none;
    border: none;
    padding: 0.35rem;
    text-transform: capitalize;
    font-size: 1.6rem;

    &:focus {
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
    }
  }
`
export const Colors = styled.div`
  ${sharedCSS}

  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 2.4rem;
    grid-column-gap: 1.2rem;
    align-items: center;
    justify-items: center;
    grid-row-gap: 1.6rem;

    @media screen and (max-width: 48em) {
      flex-direction: column;
      gap: 1.6rem;
    }
  }
`

export const SpanBtnAll = styled.button`
  ${sharedButton}
  opacity: 1;
  text-transform: capitalize;
  border-radius: 0;
`
interface FilterColorBtnProps {
  background?: string
  name: string
}

export const FilterColorBtn = styled.button<FilterColorBtnProps>`
  ${sharedButton}
  height: 2.7rem;
  width: 2.7rem;
  background-color: ${({ background }) => (background ? background : "#444")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  @media screen and (max-width: 48em) {
    height: 3.5rem;
    width: 3.5rem;
  }
`

export const Price = styled.div`
  ${sharedCSS}

  @media (max-width: 48em) {
    width: 75%;
  }

  input {
    @media (max-width: 48em) {
      width: 50%;
    }
  }
  p {
    font-size: 1.6rem;
  }
`
export const Shipping = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  label {
    cursor: pointer;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  input {
    width: 100%;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
  }
`
export const FilterClear = styled.div``
