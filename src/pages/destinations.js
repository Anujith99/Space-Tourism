import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"
import "../styles/destinations.page.scss"
import { useBackground } from "../hooks/useBackground"

export default function Destinations() {
  useBackground("bg-image-destinations")
  return (
    <Layout>
      <div>
        <Heading type={"sub-heading-2"}>Destinations</Heading>
      </div>
    </Layout>
  )
}
