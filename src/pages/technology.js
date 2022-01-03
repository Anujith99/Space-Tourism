import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"
import "../styles/technology.page.scss"

export default function Technology() {
  return (
    <Layout bgClass={"bg-image-technology"}>
      <div>
        <Heading type={"sub-heading-2"}>Technology</Heading>
      </div>
    </Layout>
  )
}
