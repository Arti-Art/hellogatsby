import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Container from "../components/container"

export default function About() {
  return (
    <Container>
      <div style={{ color: `teal` }}>
        <Navbar />
        <Header headerText="Café musique de chats mais qui font de la musique"/>
        <p>Bienvenue au café des chats qui font de la musique</p>
        <img src="https://i.pinimg.com/originals/97/eb/9c/97eb9c3ced719f6232b3b95456469f48.jpg" alt="" />
      </div>
    </Container>
  )
}