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
    </h1>
    <ExampleButton>click me</ExampleButton>
  </Layout>
)

//https://youtu.be/5Mam9NuxwQc?list=PLnHJACx3NwAdCmDDPdCt6W6BJfRbatfnc
