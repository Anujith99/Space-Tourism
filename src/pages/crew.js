import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"
import "../styles/crew.page.scss"

export default function Crew() {
  return (
    <Layout bgClass={"bg-image-crew"}>
      <div>
        <Heading type={"sub-heading-2"}>The Crew</Heading>
      </div>
    </Layout>
  )
}
