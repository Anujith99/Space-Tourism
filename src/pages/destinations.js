import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"
import "../styles/destinations.page.scss"

export default function Destinations() {
  return (
    <Layout bgClass={"bg-image-destination"}>
      <div>
        <Heading type={"sub-heading-2"}>Destinations</Heading>
      </div>
    </Layout>
  )
}