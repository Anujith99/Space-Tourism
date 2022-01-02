import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "../../images/logo.svg"
import HamburgerIcon from "../../images/icon-hamburger.svg"

import "./navbar.scss"

const NAV_LINKS = [
  {
    text: "HOME",
    to: "/",
  },
  {
    text: "DESTINATIONS",
    to: "/destinations",
  },
  {
    text: "CREW",
    to: "/crew",
  },
  {
    text: "TECHNOLOGY",
    to: "/technology",
  },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-links">
          {NAV_LINKS.map((link, index) => (
            <Link
              activeStyle={{ borderBottom: "2px solid white" }}
              key={index}
              className="nav-link"
              to={link.to}
            >
              <span>{"0" + index + "  "}</span>
              {link.text}
            </Link>
          ))}
        </div>
        <div className="mobile-icon" onClick={() => setIsMenuOpen(true)}>
          {!isMenuOpen && <HamburgerIcon />}
        </div>
      </nav>
    </>
  )
}

export default Navbar
