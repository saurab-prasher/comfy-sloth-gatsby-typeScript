import React from "react"
import NavMenu from "./Menu"
import { Nav } from "./NavbarElements"

interface NavbarProps {
  isSidebarOpen?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen }) => {
  return (
    <Nav className={isSidebarOpen ? "active-sidebar" : ""}>
      <NavMenu isSidebarOpen={isSidebarOpen} />
    </Nav>
  )
}

export default Navbar
