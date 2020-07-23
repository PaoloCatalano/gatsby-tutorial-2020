import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

export default () => (
  <Layout>
    <h1
      style={{
        color: "green",
        textTransform: "uppercase",
        /** QUESTO è JS quindi:
         * tra due {{}}
         * ""
         * no - ma camelText
         * */
      }}
      >
      <ExampleButton>click me</ExampleButton>
      <p className="tit">INFONDOALMAR</p>
      <p className="tit">INFONDOALMAAAR</p>
    </h1>
    <div className="name-container">

    <p className="s1 s">PAOLO</p>
    <p className="s2 s">PAOLO</p>
    </div>
    
  </Layout>
)

//https://youtu.be/5Mam9NuxwQc?list=PLnHJACx3NwAdCmDDPdCt6W6BJfRbatfnc
