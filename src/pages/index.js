import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"
import "../styles/home.page.scss"

export default function Home() {
  return (
    <Layout bgClass={"bg-image-home"}>
      <div>
        <Heading type={"sub-heading-2"}>SPACE</Heading>
      </div>
    </Layout>
  )
}
