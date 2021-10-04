import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"

interface NavProps {
  className?: string
}
export const Nav = styled.nav<NavProps>`
  transition: all 0.1s;

  @media (max-width: 48em) {
    z-index: 999;
    position: absolute;
    top: 10rem;
    left: 0;
    background: #fff;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to right, #fff 50%, rgba(0, 0, 0, 0.3) 50%);

    opacity: 0;
    visibility: hidden;
    transform: translateX(-100%);
  }
`

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2.4rem;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.6rem;
  }
`

export const NavLink = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  padding: 2.4rem;
  font-weight: 600;
  color: #333;
  font-size: 1.4rem;
  letter-spacing: 0.75px;

  &:hover {
    color: rgb(139, 59, 53);
  }

  @media (max-width: 64em) {
    padding: 1.6rem;
  }
`

const sharedButtonStyle = css`
  height: 2.4rem;
  width: 2.4rem;
  margin: 0 0.75rem;
  color: #333;

  &:hover {
    color: rgb(139, 59, 53);
  }
`

export const ShoppingCart = styled(FiShoppingCart)`
  ${sharedButtonStyle}
`
export const UserLogin = styled(AiOutlineUser)`
  ${sharedButtonStyle}
`

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  @media screen and (max-width: 48em) {
    display: none;
  }
`
