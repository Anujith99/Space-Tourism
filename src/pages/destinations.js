import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import Content from "../components/typography/Content"
import "../styles/_global.scss"
import "../styles/destinations.page.scss"
import { useBackground } from "../hooks/useBackground"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Destinations({ data }) {
  const destinations = data.allDestinationsJson.nodes
  const [activeTab, setActiveTab] = useState(0)
  useBackground("bg-image-destinations")
  return (
    <Layout>
      <div className="destinations-container">
        <div className="page-title">
          <Heading type={"num-heading"}>01</Heading>
          <Heading type={"heading-5"}>PICK YOUR DESTINATION</Heading>
        </div>
        <div className="destination-content-container">
          <div className="destination-content-image">
            <GatsbyImage
              image={
                destinations[activeTab].images.webp.childImageSharp
                  .gatsbyImageData
              }
              alt={destinations[activeTab].name}
              style={{ width: "100%" }}
            />
          </div>
          <div className="destination-content-tabs">
            <div className="destination-tabs-container">
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`destination-tab ${
                    index === activeTab ? "active" : ""
                  }`}
                >
                  {dest.name}
                </div>
              ))}
            </div>
            <div className="destination-tab-content">
              <Heading type={"heading-2"}>
                {destinations[activeTab].name}
              </Heading>
              <Content contentStyle={"destination-description"}>
                {destinations[activeTab].description}
              </Content>
              <div className="destination-statistics">
                <div className="destination-statistic-item">
                  <Heading style={"statistic-title"} type={"sub-heading-2"}>
                    AVG. DISTANCE
                  </Heading>
                  <Heading type={"sub-heading-1"}>
                    {destinations[activeTab].distance}
                  </Heading>
                </div>
                <div className="destination-statistic-item">
                  <Heading style={"statistic-title"} type={"sub-heading-2"}>
                    EST. TRAVEL TIME
                  </Heading>
                  <Heading type={"sub-heading-1"}>
                    {destinations[activeTab].travel}
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              gatsbyImageData(placeholder: BLURRED, formats: [WEBP])
            }
          }
        }
      }
    }
  }
`
