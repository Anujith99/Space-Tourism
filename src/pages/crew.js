import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useSwipeable } from "react-swipeable"

import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import Content from "../components/typography/Content"
import { useBackground } from "../hooks/useBackground"
import MetaData from "../components/MetaData"

import "../styles/_global.scss"
import "../styles/crew.page.scss"

export default function Crew({ data }) {
  const crew = data.allCrewJson.nodes
  const [selectedMember, setSelectedMember] = useState(0)
  useBackground("bg-image-crew")

  const handleSwipe = dir => {
    let updatedSlide
    if (dir < 0) {
      updatedSlide = selectedMember === 0 ? crew.length - 1 : selectedMember - 1
    } else {
      updatedSlide = selectedMember === crew.length - 1 ? 0 : selectedMember + 1
    }
    setSelectedMember(updatedSlide)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
    trackMouse: false,
    trackTouch: true,
  })

  return (
    <>
      <MetaData title={"Crew"} description={"Meet Your Crew"} />
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
            <div {...handlers} className="crew-content-image-container">
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
    </>
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
