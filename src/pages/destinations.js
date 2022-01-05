import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import "../styles/_global.scss"
import "../styles/destinations.page.scss"
import { useBackground } from "../hooks/useBackground"

export default function Destinations({ data }) {
  const destinations = data.allDestinationsJson.nodes
  console.log("DESTINATIONS", destinations)
  useBackground("bg-image-destinations")
  return (
    <Layout>
      <div>
        <Heading type={"sub-heading-2"}>Destinations</Heading>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query DestinationsQuery {
    allDestinationsJson {
      nodes {
        description
        distance
        id
        name
        travel
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
