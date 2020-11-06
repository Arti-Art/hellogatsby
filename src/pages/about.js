import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Elizabeth"/>
      <Header headerText="About Gatsby"/>
      <p>All pages created in src/pages will have a route automatically added to them. 
      Just add /nameOfThePage after the localhost to get on the page.</p>
    </div>
  )
}