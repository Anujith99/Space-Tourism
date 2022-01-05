import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"
import "../styles/crew.page.scss"
import { useBackground } from "../hooks/useBackground"

export default function Crew() {
  useBackground("bg-image-crew")
  return (
    <Layout>
      <div>
        <Heading type={"sub-heading-2"}>The Crew</Heading>
      </div>
    </Layout>
  )
}
