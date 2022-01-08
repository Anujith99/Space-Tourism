import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import Content from "../components/typography/Content"
import "../styles/_global.scss"
import "../styles/crew.page.scss"
import { useBackground } from "../hooks/useBackground"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Crew({ data }) {
  const crew = data.allCrewJson.nodes
  const [selectedMember, setSelectedMember] = useState(0)
  useBackground("bg-image-crew")
  return (
    <Layout>
      <div className="crew-container">
        <div className="page-title">
          <Heading type={"num-heading"}>02</Heading>
          <Heading type={"heading-5"}>MEET YOUR CREW</Heading>
        </div>
        <div className="crew-content-container">
          <div className="crew-content-description">
            <Heading style={"crew-role"} type={"heading-4"}>
              {crew[selectedMember].role}
            </Heading>
            <Heading style={"crew-name"} type={"heading-3"}>
              {crew[selectedMember].name}
            </Heading>
            <Content contentStyle={"crew-bio"}>
              {crew[selectedMember].bio}
            </Content>
            <div className="crew-dots-container">
              {[...Array(4)].map((crew, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMember(index)}
                  className={`crew-dot-btn ${
                    selectedMember === index ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="crew-content-image-container">
            <div className="crew-image">
              <GatsbyImage
                image={
                  crew[selectedMember].images.webp.childImageSharp
                    .gatsbyImageData
                }
                alt={crew[selectedMember].name}
              />
            </div>
          </div>
        </div>
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
              gatsbyImageData(placeholder: BLURRED, formats: [WEBP])
            }
          }
        }
      }
    }
  }
`
