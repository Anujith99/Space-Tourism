import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import Content from "../components/typography/Content"
import "../styles/_global.scss"
import "../styles/home.page.scss"
import { useBackground } from "../hooks/useBackground"

export default function Home() {
  useBackground("bg-image-home")
  return (
    <Layout>
      <div className="container">
        <div className="content-container">
          <div className="content-text-container">
            <Heading type={"heading-5"}>SO, YOU WANT TO TRAVEL TO</Heading>
            <Heading type={"heading-1"}>SPACE</Heading>
            <Content contentStyle={"home-para"}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Content>
          </div>
          <div className="content-button-container">
            <div className="home-button">
              <p className="home-button-text">EXPLORE</p>
              <div className="home-button-outline" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
