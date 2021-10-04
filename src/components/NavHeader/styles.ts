import styled, { css } from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

export const Wrapper = styled.div`
  overflow: hidden;
  .free-shipping {
    background-color: #f7eee2;
    padding: 1.2rem;
    width: 100%;

    p {
      text-align: center;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
  }

  /* @media (max-width: 48em) {
    position: absolute;
    top: 0;
    z-index: 5;
    width: 100vw;
    height: 100vh;
  } */
`

export const Header = styled.header`
  padding: 3rem 6.4rem 1.2rem 6.4rem;

  @media (max-width: 72.5em) {
    padding: 3rem 3.2rem 3rem 3.2rem;
  }
  @media (max-width: 64em) {
    padding: 2.4rem;
  }

  .header-container {
    transition: all 0.3s;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media (max-width: 48em) {
      justify-content: space-between;
      align-items: baseline;
    }
  }

  .navbar-icons {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    @media (max-width: 25em) {
      gap: 0;
    }
    .cart-icon {
      position: relative;
      /* z-index: 2; */
      span {
        position: absolute;
        top: -0.9rem;
        right: 0;
        background-color: rgb(139, 59, 53);
        padding: 0.6rem 0.8rem;
        border-radius: 50%;
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
      }
    }
    a {
      color: #333;
      &:hover {
        color: rgb(139, 59, 53);
      }
    }
  }

  .logout {
    font-size: 1.6rem;
    color: #333;
    font-weight: 500;
  }

  .about-link {
    font-size: 1.6rem;
    color: #333;
    font-weight: 500;
  }
`

const sharedSidebarIcons = css`
  display: none;
  cursor: pointer;
  height: 3rem;
  width: 3rem;
  color: rgb(139, 59, 53);
  @media (max-width: 48em) {
    display: block;
  }
`

export const HamburgerIcon = styled(GiHamburgerMenu)`
  ${sharedSidebarIcons}
`

export const CloseSidebarIcon = styled(AiOutlineClose)`
  ${sharedSidebarIcons}
`

export const Logo = styled.img`
  max-width: 20rem;
  cursor: pointer;
`
