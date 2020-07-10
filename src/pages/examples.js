import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const examples = ({ data } /**oppure solo props */) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <p>hello from example</p>
      <Header />
      <HeaderStatic />
      <h4>autore: {author}</h4>
    </Layout>
  )
}
export const data = graphql`
  query {
    site {
      info: siteMetadata {
        person {
          name
          age
        }
        description
        data
        author
        title
      }
    }
  }
`
export default examples
