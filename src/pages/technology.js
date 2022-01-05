import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"
import "../styles/technology.page.scss"
import { useBackground } from "../hooks/useBackground"

export default function Technology() {
  useBackground("bg-image-technology")
  return (
    <Layout>
      <div>
        <Heading type={"sub-heading-2"}>Technology</Heading>
      </div>
    </Layout>
  )
}
