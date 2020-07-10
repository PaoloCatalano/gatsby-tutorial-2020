import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/images">Examples</Link>
        </li>
        <li>
          <Link to="/images">images</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default NavBar
