import React from "react"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-container">{children}</div>
    </div>
  )
}

export default Layout
