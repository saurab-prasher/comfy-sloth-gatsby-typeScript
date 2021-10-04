import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Menu, NavLink } from "./NavbarElements"

import { getUniqueValues } from "../../utils/helper"

export const query = graphql`
  {
    allProducts {
      edges {
        node {
          category
        }
      }
    }
  }
`

interface MenuProps {
  isSidebarOpen?: boolean
}

const SidebarLinks = () => {
  return (
    <>
      <NavLink to="/products">All Products</NavLink>
      <NavLink to="/about">About us</NavLink>
    </>
  )
}
const NavMenu: React.FC<MenuProps> = ({ isSidebarOpen }) => {
  const {
    allProducts: { edges: node },
  } = useStaticQuery(query)

  const categories = node.map((item: any) => item.node)

  const uniqueCategories = getUniqueValues(categories, "category").filter(
    item => item !== "all"
  )

  return (
    <Menu>
      {uniqueCategories.map((link, index) => {
        return (
          <li key={index}>
            <NavLink to={`/category/${link.replace(/\s/g, "-")}`}>
              {link}
            </NavLink>
          </li>
        )
      })}
      {isSidebarOpen ? <SidebarLinks /> : null}
    </Menu>
  )
}

export default NavMenu
