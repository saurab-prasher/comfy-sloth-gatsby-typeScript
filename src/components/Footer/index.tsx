import React from "react"
import { Link } from "gatsby"
import { FooterContainer } from "./FooterElements"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

import { FaFacebookF } from "react-icons/fa"

import logo from "../../assests/images/logo/footer-logo.svg"

const Footer: React.FC = () => {
  return (
    <FooterContainer className="footer">
      <div className="container grid grid--5-cols grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img src={logo} className="logo" alt="comfysloth-logo" />
          </a>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <FaFacebookF className="social-icon" />
              </a>
            </li>

            <li>
              <a className="footer-link" href="#">
                <AiOutlineTwitter className="social-icon" />
              </a>
            </li>

            <li>
              <a className="footer-link" href="#">
                <AiOutlineInstagram className="social-icon" />
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy;
            <span className="year">{new Date().getFullYear()}</span> by
            ComfySloth. All rights reserved
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@comfysloth.com">
                hello@comfysloth.com
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Create account
              </a>
            </li>

            <li>
              <a className="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                IOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android App
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">About</p>
          <ul className="footer-nav">
            <li>
              <Link to="/about" className="footer-link">
                Our Story
              </Link>
            </li>
            <li>
              <a className="footer-link" href="#">
                Reviews
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Partners
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Support</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Look Up Order
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Returns
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </FooterContainer>
  )
}

export default Footer
