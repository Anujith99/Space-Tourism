import React from "react"
import Navbar from "./Navbar/Navbar"
import favicon from "../images/favicon.png"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <div className="layout-container">{children}</div>
    </div>
  )
}

export default Layout
