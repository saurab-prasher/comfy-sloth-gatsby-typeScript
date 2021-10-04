// import { Route, Redirect } from "react-router"
// import { navigate } from "gatsby"
// import { useUserContext } from "../context/userContext"

// interface PrivateRouteProps {
//   component: any
//   path: string

//   exact?: boolean | undefined
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({
//   component: Component,

//   ...rest
// }) => {
//   const {
//     state: { currentUser },
//   } = useUserContext()

//   if (currentUser && window.location.pathname !== `/app/login`) {
//     navigate("/app/login")
//   }
//   return <Component {...rest} />
// }
// export default PrivateRoute
import React from "react"

const PrivateRouteLogin = () => {
  return <div></div>
}

export default PrivateRouteLogin
