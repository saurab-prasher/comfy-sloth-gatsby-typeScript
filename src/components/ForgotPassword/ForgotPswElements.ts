import styled from "styled-components"

export const LoginContainer = styled.main`
  padding: 12.8rem 0;
  background-color: #faf5ee;

  display: flex;
  justify-content: center;
`
export const FormContainer = styled.div`
  padding: 4rem 2rem;
  border-radius: 1rem;
  text-align: center;
  width: 45rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.75rem;
  }
  p {
    font-size: 1.6rem;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem auto;
  width: 90%;

  input {
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
  span {
    display: inline-block;
    transition: all 0.3s ease;
  }

  &:hover span {
    transform: translateX(0.5rem);
  }
`
