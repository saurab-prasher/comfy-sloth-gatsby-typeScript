import React from "react"
import { Navbar, Footer } from "../"
import "../../assests/css/index.css"

const Layout: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
