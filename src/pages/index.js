import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Container from "../components/container"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="mainflex">
      <Navbar />
      <Container>
        <Header 
          headerText="London's nerdiest choir." 
          headerSubtitle="Sing music from video games and TV!"
        />
        <p>To start with a starter boilerplate, type <b>gatsby new project-name https://github.com/gatsbyjs/gatsby-starter-default</b> in your terminal.</p>
        <p>To start Gatsby Development and the server, type <b>gatsby develop</b> in your terminal.</p>
        <p>For a prod build, use <b>gatsby build</b>. On Gatsby Cloud, the build is done on push if I understand well.</p>
      </Container>
      <Footer />
    </div>
  )
}
