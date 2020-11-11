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
          headerText="FAQ" 
          headerSubtitle="Frantically Assessed Quagmires"
        />
        <p>Here will be the FAQ</p>
      </Container>
      <Footer />
    </div>
  )
}