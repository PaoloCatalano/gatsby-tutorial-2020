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
      hello from index
      <p className="tit">INFONDOALMAR</p>
      <p className="tit">INFONDOALMAAAR</p>
    </h1>
    <span class="s1 s">PAOLO</span>
    <span class="s2 s">PAOLO</span>
    <ExampleButton>click me</ExampleButton>
    
  </Layout>
)

//https://youtu.be/5Mam9NuxwQc?list=PLnHJACx3NwAdCmDDPdCt6W6BJfRbatfnc
