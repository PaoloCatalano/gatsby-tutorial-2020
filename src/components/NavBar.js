import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

function NavBar() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else  {
        handleShow(false);
      }
    });
    /* return () => {
      window.removeEventListener("scroll")
    } */
  }, []);

  return (
    <nav className={`navbar ${show && "nav__black"}`}>
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
          <Link to="/products2">Products2</Link>
        </li>
        <li>
          <Link to="/products3">Products3</Link>
        </li>
        <li className="nav__logo">
          <img src=""/>
          <Link to="/examples">Examples</Link>
        </li>
        <li className="nav__avatar">
          <Link to="/images">images</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
