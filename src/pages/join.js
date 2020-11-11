import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Container from "../components/container"
import Footer from "../components/footer"

export default function About() {
  return (
    <div className="mainflex">
      <Navbar />
      <Container>
        <Header 
          headerText="Join us." 
          headerSubtitle="To sing."
        />
        <p>Here will be a form to join us</p>
      </Container>
      <Footer />
    </div>
  )
}