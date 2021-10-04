import styled from "styled-components"

export const LoginContainer = styled.main`
  padding: 4rem 3.2rem;
  background-color: #faf5ee;
  padding-bottom: 12.8rem;

  .container {
    display: grid;
    grid-template-columns: 60fr 40fr;
    grid-gap: 4.8rem;
    max-width: 114rem;
    margin: 0 auto;

    @media (max-width: 48em) {
      display: flex;
      flex-direction: column;
      grid-gap: 1.6rem;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
      padding-top: 6.4rem;
    }
    .login-heading {
      font-size: 2rem;
    }

    .error-container {
      width: 100%;
    }

    .new-customer {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      align-items: flex-start;
      h3 {
        font-size: 1.8rem;
        font-weight: 600;
      }

      p {
        font-size: 1.4rem;
        line-height: 1.6;
      }
    }
  }

  .registered {
    background-color: #948f88;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1rem;
    display: block;
  }

  .forgot-password {
    display: inline-block;
    margin: 1.8rem 0;
    a {
      font-size: 1.4rem;
      border-bottom: 1px solid #918f8e;
      padding-bottom: 0.4rem;
      letter-spacing: 0.75px;
      color: #474543;
    }
  }
`
export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
`

export const FormGroup = styled.div`
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
  display: block;
  width: 100%;
  margin: 1.8rem 0;
`
