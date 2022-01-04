import React from "react"
import "../../styles/_global.scss"

const Heading = ({ type, children, style }) => {
  return <p className={`${type} ${style}`}>{children}</p>
}

export default Heading
