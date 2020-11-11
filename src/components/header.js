import React from "react"
import Choirimage from "../img/choir.jpg"

export default function Header(props) {
  return (
    <div className="headerContainer">
      <img src={Choirimage} alt="singing people" className="headerImg" />
      <div className="header">
        <h1 className="headerText">{props.headerText}</h1>
        <p className="headerSubtitle">{props.headerSubtitle}</p>
      </div>
    </div>
  )
}