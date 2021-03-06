import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Container from "../components/container"
import Footer from "../components/footer"

export default function Contact() {
  return (
    <div className="mainflex">
      <Navbar />
      <Container>
        <Header 
          headerText="Contact us." 
          headerSubtitle="Why? Because if you don't, you're gonna die!"
        />
        <p>Send us a message!</p>
      </Container>
      <Footer />
    </div>
  )
}