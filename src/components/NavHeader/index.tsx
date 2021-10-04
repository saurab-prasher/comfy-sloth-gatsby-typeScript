const isBrowser = typeof window !== `undefined`
import React, { useEffect } from "react"
import { Link } from "gatsby"
import Navbar from "../Navbar"
import logo from "../../assests/images/logo/logo.svg"
import {
  Header,
  Logo,
  Wrapper,
  HamburgerIcon,
  CloseSidebarIcon,
} from "./styles"
import { ShoppingCart, UserLogin } from "../Navbar/NavbarElements"

import { useUserContext } from "../../context/userContext"
import { useActions } from "../../hooks/useActions"
import { useSelector } from "../../hooks/useTypedSelector"

Logo.defaultProps = {
  src: logo,
}
const Index = () => {
  const {
    handleLogout,
    state: { currentUser },
  } = useUserContext()

  const { countCartTotals, openSidebar, closeSidebar } = useActions()
  const {
    cart: { cart, totalItems },
    allProducts: { isSidebarOpen },
  } = useSelector(state => state)

  useEffect(() => {
    if (isBrowser) {
      if (isSidebarOpen) document.body.classList.add("no-scroll")
      else document.body.classList.remove("no-scroll")
    } else return
  }, [isSidebarOpen])

  useEffect(() => {
    if (isBrowser) {
      countCartTotals()
      localStorage.setItem("cart", JSON.stringify(cart))
    } else return
  }, [cart])

  return (
    <Wrapper>
      <div className="free-shipping">
        <p>
          For a limited time, save up to 30% on home office and bedroom | COVID
          19 Update
        </p>
      </div>
      <Header>
        <div className="header-container">
          {isSidebarOpen ? (
            <CloseSidebarIcon onClick={closeSidebar} />
          ) : (
            <HamburgerIcon onClick={() => openSidebar()} />
          )}

          <div className="logo-container">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <Navbar isSidebarOpen={isSidebarOpen} />

          <div className="navbar-icons">
            <Link className="cart-icon" to="/cart">
              <span>{totalItems}</span>
              <ShoppingCart />
            </Link>

            {currentUser ? (
              <Link className="logout" onClick={handleLogout} to="/">
                Logout
              </Link>
            ) : (
              <Link to="/login">
                <UserLogin />
              </Link>
            )}
            {typeof window !== `undefined` ? (
              window.innerWidth > 768 ? (
                <Link className="about-link" to="/about">
                  About Us
                </Link>
              ) : null
            ) : null}
          </div>
        </div>
      </Header>
    </Wrapper>
  )
}

export default Index
