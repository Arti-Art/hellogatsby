import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <ul>
      <li><Link to='/'>Index</Link></li>
      <li><Link to='/catcafemusic/'>Cat Muisc Cafe</Link></li>
      <li><Link to='/about-css-modules/'>About CSS Modules</Link></li>
      <li><Link to='/about/'>About</Link></li>
      <li><Link to='/contact/'>Contact</Link></li>
    </ul>
  )
}

