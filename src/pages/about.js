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
          headerText="Sing yourself to bits." 
          headerSubtitle="Eight bits. Eight of them. Ha."
        />
        <p>All pages created in src/pages will have a route automatically added to them. 
        Just add /nameOfThePage after the localhost to get on the page.</p>
      </Container>
      <Footer />
    </div>
  )
}