import React from "react"
import { useBackground } from "../hooks/useBackground"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import MetaData from "../components/MetaData"

const NotFound = () => {
  useBackground("bg-image-home")
  return (
    <>
      <MetaData title={"Page Not Found"} description={"404 - Page Not Found"} />
      <Layout>
        <div style={{ textAlign: "center" }}>
          <Heading style={"heading-1"}>404</Heading>
          <Heading style={"heading-3"}>Page Not Found</Heading>
        </div>
      </Layout>
    </>
  )
}

export default NotFound
