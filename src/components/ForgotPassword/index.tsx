import React from "react"
import { useRef } from "react"
import Error from "../Error"

import {
  LoginContainer,
  FormContainer,
  Button,
  FormGroup,
} from "./ForgotPswElements"

import Loading from "../Loading"
import { useUserContext } from "../../context/userContext"

const ForgotPassword = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const {
    handleResetPassword,
    state: { error, loading, message },
  } = useUserContext()

  return (
    <LoginContainer>
      {loading ? (
        <Loading />
      ) : (
        <FormContainer>
          <div className="container">
            <Error success={true} message={error || message} />
            <h1>Password Reset</h1>

            <form onSubmit={e => handleResetPassword(e, emailRef)}>
              <FormGroup className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  ref={emailRef}
                  placeholder="Enter Email"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </FormGroup>

              <Button className="btn btn--primary" type="submit">
                Reset Password <span>&rarr;</span>
              </Button>
            </form>
          </div>
        </FormContainer>
      )}
    </LoginContainer>
  )
}

export default ForgotPassword
