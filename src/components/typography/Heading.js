import React from "react"
import "../../styles/_global.scss"

const Heading = ({ type, children }) => {
  return <p className={type}>{children}</p>
}

export default Heading
