import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: #484543;
  text-align: center;
  color: #fff;
  padding: 6.4rem 3rem;

  .grid {
    display: grid;
    row-gap: 9.6rem;
    column-gap: 6.4rem;
    @media (max-width: 48em) {
      row-gap: 4.8rem;
    }
  }

  .container {
    margin: 0 auto;
    padding: 0 3.2rem;
  }
  .footer {
    padding: 9.6rem 3.2rem;
    border-top: 1px solid #eee;
  }

  .grid--footer {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  .logo-col {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .footer-logo {
    display: block;
  }
  .social-links {
    list-style: none;
    display: flex;
    gap: 2.4rem;
    margin-left: 2.4rem;
  }

  .social-icon {
    height: 2.4rem;
    width: 2.4rem;
  }
  .copyright {
    font-size: 1.4rem;
    color: #fff;
    line-height: 1.6;
    margin-top: auto;
  }

  .contacts {
    font-style: normal;
    font-size: 1.4rem;
    line-height: 1.6;
  }

  .address {
    margin-bottom: 2.4rem;
  }
  .footer-heading {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 4rem;

    @media (max-width: 48em) {
      margin-bottom: 1.6rem;
    }
  }

  .footer-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .footer-link:link,
  .footer-link:visited {
    text-decoration: none;
    font-size: 1.4rem;
    color: #fff;
    transition: all 0.3s;
    line-height: 1.6;
  }

  .footer-link:hover,
  .footer-link:active {
    color: #eee;
  }
`
