import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Container from "../components/container"

export default function About() {
  return (
    <Container>
      <div style={{ color: `teal` }}>
        <Navbar />
        <Header headerText="About Gatsby"/>
        <p>All pages created in src/pages will have a route automatically added to them. 
        Just add /nameOfThePage after the localhost to get on the page.</p>
      </div>
    </Container>
  )
}