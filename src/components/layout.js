import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "./layout.css"

const layout = ({ children }) => {
  return (
    //  <></> è uguale a <React.Fragment></React.Fragment>
    <React.Fragment >
      <NavBar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default layout
