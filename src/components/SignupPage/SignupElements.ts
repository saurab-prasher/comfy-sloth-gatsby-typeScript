import styled from "styled-components"

export const SignUpContainer = styled.main`
  background-color: #faf5ee;

  height: 90vh;
  padding: 9.6rem 3.2rem;
  display: flex;
  justify-content: center;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 45rem;

  h1 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.6rem;
  }

  a {
    color: #474543;
    border-bottom: 1px solid #918f8e;
  }
`

export const FormGroup = styled.div`
  input {
    border: 1px solid #a4a39e;
    font-family: inherit;
    outline: none;
    width: 100%;
    padding: 1.6rem;
    border: none;
  }

  label {
    display: block;
    font-weight: 500;
    font-size: 1.4rem;
    margin: 1.8rem 0;
  }
`

export const Button = styled.button`
  width: 100%;
  margin: 1.6rem 0;
`
