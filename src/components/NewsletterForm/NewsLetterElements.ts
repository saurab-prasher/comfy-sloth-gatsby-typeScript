import styled from "styled-components"

export const NewsLetterSection = styled.section`
  padding: 9.6rem 3.2rem;
  background-color: #f7eee3;
  text-align: center;

  .wrapper {
    max-width: 114rem;
    margin: 0 auto;
  }
`

export const NewsLetterText = styled.div``
export const NewsLetterH2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 3.2rem;
  font-weight: 500;
`

export const NewsLetterForm = styled.form`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  @media (max-width: 48em) {
    flex-direction: column;
  }
`
export const Input = styled.input`
  border: 1px solid #a4a39e;
  font-family: inherit;
  outline: none;
  width: 100%;
  padding: 1.6rem;
  border: none;
`
export const FormBtn = styled.button`
  @media (max-width: 48em) {
    width: 100%;
  }
`
