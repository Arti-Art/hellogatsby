import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Container from "../components/container"

export default function Contact() {
  return (
    <Container>
      <div style={{ color: `teal` }}>
        <Navbar />
        <Header headerText="Contact" />
        <p>Send us a message!</p>
      </div>
    </Container>
  )
}