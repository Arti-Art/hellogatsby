import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="Café musique de chats mais qui font de la musique"/>
      <p>Bienvenue au café des chats qui font de la musique</p>
      <img src="https://i.pinimg.com/originals/97/eb/9c/97eb9c3ced719f6232b3b95456469f48.jpg" alt="" />
    </div>
  )
}