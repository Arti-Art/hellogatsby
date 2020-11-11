import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"
import styles from "./gigs.module.css"
import Container from "../components/container"
import Footer from "../components/footer"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <div className="mainflex">
      <Navbar />
      <Container>
        <Header 
            headerText="Gigs = concerts" 
            headerSubtitle="Also gigs = gigabytes. This page is about concerts."
          />
        <p>CSS Modules are cool</p>
        <User
          username="Jane Doe"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          username="Bob Smith"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </Container>
      <Footer />
    </div>
  )
}