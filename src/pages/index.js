import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Container from "../components/container"

export default function Home() {
  return (
    <Container>
      <div style={{ color: `purple`}}>
        <Navbar />
        <Header headerText="Hello Gatsbys!" />
        <p>To start with a starter boilerplate, type <b>gatsby new project-name https://github.com/gatsbyjs/gatsby-starter-default</b> in your terminal.</p>
        <p>To start Gatsby Development and the server, type <b>gatsby develop</b> in your terminal.</p>
        <p>For a prod build, use <b>gatsby build</b>. On Gatsby Cloud, the build is done on push if I understand well.</p>
      </div>
    </Container>
  )
}
