import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import Content from "../components/typography/Content"
import "../styles/_global.scss"
import "../styles/technology.page.scss"
import { useBackground } from "../hooks/useBackground"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Technology({ data }) {
  const technologies = data.allTechnologyJson.nodes
  const [selectedTab, setSelectedTab] = useState(0)
  useBackground("bg-image-technology")
  return (
    <Layout>
      <div className="technology-container">
        <div className="page-title">
          <Heading type={"num-heading"}>03</Heading>
          <Heading type={"heading-5"}>SPACE LAUNCH 101</Heading>
        </div>
        <div className="technology-content-container">
          <div className="technology-description-container">
            <div className="technology-tabs-container">
              {[...Array(3)].map((tab, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  className={`technology-tab ${
                    index === selectedTab ? "active" : ""
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div>
              <Heading type={"sub-heading-2"}>THE TERMINOLOGY...</Heading>
              <Heading style={"technology-title"} type={"heading-3"}>
                {technologies[selectedTab].name}
              </Heading>
              <Content>{technologies[selectedTab].description}</Content>
            </div>
          </div>
          <div className="technology-image-desktop">
            <GatsbyImage
              image={
                technologies[selectedTab].images.portrait.childImageSharp
                  .gatsbyImageData
              }
            />
          </div>
          <div className="technology-image-tablet">
            <GatsbyImage
              image={
                technologies[selectedTab].images.landscape.childImageSharp
                  .gatsbyImageData
              }
            />
          </div>
        </div>
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
              gatsbyImageData(placeholder: BLURRED, formats: [WEBP])
            }
          }
          portrait {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [WEBP])
            }
          }
        }
      }
    }
  }
`
