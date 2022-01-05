import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"
import "../styles/technology.page.scss"
import { useBackground } from "../hooks/useBackground"

export default function Technology({ data }) {
  const technologies = data.allTechnologyJson.nodes
  console.log("TECH", technologies)
  useBackground("bg-image-technology")
  return (
    <Layout>
      <div>
        <Heading type={"sub-heading-2"}>Technology</Heading>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TechnologyQuery {
    allTechnologyJson {
      nodes {
        description
        id
        name
        images {
          landscape {
            childImageSharp {
              gatsbyImageData
            }
          }
          portrait {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
