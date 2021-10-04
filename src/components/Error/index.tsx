import React from "react"

import { Wrapper } from "./styles"

interface ErrorProps {
  message?: boolean | undefined
  success?: boolean | undefined
  className?: string
}

const Error: React.FC<ErrorProps> = ({ message, success }) => {
  return (
    <Wrapper className={message ? "error--open" : "error--close"}>
      <div className="row">
        <div className="error-notice">
          <div className={success ? `oaerror success` : `oaerror danger`}>
            <strong>{message}</strong>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Error
