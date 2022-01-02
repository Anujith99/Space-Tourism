import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"

export default function Home() {
  return (
    <Layout>
      <div>
        <Heading type={"sub-heading-2"}>SPACE</Heading>
      </div>
    </Layout>
  )
}
