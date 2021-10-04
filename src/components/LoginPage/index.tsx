import React, { useRef } from "react"
import { useUserContext } from "../../context/userContext"
import { Link } from "gatsby"
import Error from "../Error"

import {
  LoginContainer,
  FormContainer,
  Button,
  FormGroup,
} from "./LoginPageElements"

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const {
    state: { error, loading },
    handleSubmitLogin,
  } = useUserContext()

  return (
    <LoginContainer>
      <div className="container">
        <section className="text-content">
          <h1 className="login-heading">Log In or create an account</h1>

          <div className="new-customer">
            <h3>New customers</h3>
            <p>
              Having an account with us will allow you to check out faster in
              the future, store multiple addresses, view and track your orders
              in your account, and more.
            </p>

            <Link className="btn btn--secondary" to="/signup">
              Create an account
            </Link>
          </div>
        </section>

        <FormContainer>
          <Error message={error} />
          <span className="registered">Registered customers</span>

          <h2>Log in if you have an account</h2>

          <span className="test-email">
            <p>Test Id: test@test.com | password: 123456 </p>
          </span>
          <form onSubmit={e => handleSubmitLogin(e, emailRef, passwordRef)}>
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
            <FormGroup className="form-group">
              <label htmlFor="password">Password</label>
              <input
                ref={passwordRef}
                placeholder="Enter Password"
                type="password"
                name="password"
                id="password"
              />
            </FormGroup>
            <span className="forgot-password">
              <Link to="/forgotpassword">Forgot Password?</Link>
            </span>
            <Button className="btn btn--primary" type="submit">
              Log In <span>&rarr;</span>
            </Button>
          </form>
        </FormContainer>
      </div>
    </LoginContainer>
  )
}

export default Login
