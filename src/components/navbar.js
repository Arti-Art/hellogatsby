import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <ul className="navbar">
      <li><Link to='/about/'>About our choir</Link></li>
      <li><Link to='/practicalinfo/'>Where and when</Link></li>
      <li><Link to='/faq/'>FAQ</Link></li>
      <li className="navcenter"><Link to='/'>Homepage</Link></li>
      <li><Link to='/gigs/'>Our gigs</Link></li>
      <li><Link to='/contact/'>Contact us</Link></li>
      <li><Link to='/join/'>Join us</Link></li>
    </ul>
  )
}

