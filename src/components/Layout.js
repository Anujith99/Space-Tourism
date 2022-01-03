import React from "react"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children, bgClass }) => {
  return (
    <div className={`layout ${bgClass}`}>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout
