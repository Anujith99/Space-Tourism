import React, { useState } from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"

import Logo from "../../images/logo.svg"
import HamburgerIcon from "../../images/icon-hamburger.svg"
import CloseIcon from "../../images/icon-close.svg"

import "./navbar.scss"

const MotionLink = motion(Link)

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
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="navbar-line" />
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "backInOut" }}
              className="mobile-menu"
            >
              <div
                className="mobile-menu-header"
                onClick={() => setIsMenuOpen(false)}
              >
                <CloseIcon />
              </div>
              {NAV_LINKS.map((link, index) => (
                <MotionLink
                  activeStyle={{ borderRight: "2px solid white" }}
                  key={index}
                  className="mobile-link"
                  to={link.to}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 * (index + 1),
                    ease: "easeInOut",
                  }}
                >
                  <span>{"0" + index + "  "}</span>
                  {link.text}
                </MotionLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar
