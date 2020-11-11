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
          headerText="Where and when" 
          headerSubtitle="So you can stalk us, wait no, sing with us."
        />
        <p>Bienvenue au café des chats qui font de la musique</p>
        <img src="https://i.pinimg.com/originals/97/eb/9c/97eb9c3ced719f6232b3b95456469f48.jpg" alt="" />
      </Container>
      <Footer />
    </div>
  )
}