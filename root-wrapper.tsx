import React from "react"
import { UserProvider } from "./src/context/userContext"
import { Provider } from "react-redux"
import { store } from "./src/state"
import "./src/assests/css/index.css"
import "firebase/auth"

export const wrapRootElement = ({ element }) => {
  return (
    <UserProvider>
      <Provider store={store}>{element}</Provider>
    </UserProvider>
  )
}
