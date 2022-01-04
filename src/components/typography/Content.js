import React from "react"
import "../../styles/_global.scss"

const Content = ({ children, contentStyle }) => {
  return <p className={`content ${contentStyle}`}>{children}</p>
}

export default Content
