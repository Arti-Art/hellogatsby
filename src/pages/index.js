import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple`}}>
      <Link to='/contact/'>Contact</Link>
      <p></p>
      <Link to='/catcafemusic/'>Cat Muisc Cafe</Link>
      <Header headerText="Hello Gatsbys!" />
      <p>To start with a starter boilerplate, type <b>gatsby new project-name https://github.com/gatsbyjs/gatsby-starter-default</b> in your terminal.</p>
      <p>To start Gatsby Development and the server, type <b>gatsby develop</b> in your terminal.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
