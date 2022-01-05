import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"
import "../styles/crew.page.scss"
import { useBackground } from "../hooks/useBackground"

export default function Crew({ data }) {
  const crew = data.allCrewJson.nodes
  console.log("CREW", crew)
  useBackground("bg-image-crew")
  return (
    <Layout>
      <div>
        <Heading type={"sub-heading-2"}>The Crew</Heading>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CrewQuery {
    allCrewJson {
      nodes {
        name
        role
        id
        bio
        images {
          webp {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
