import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const examples = ({ data } /**oppure solo props (con le props standard che fornisce gatsby, se non si esporta qualcosa esplicitamente come più sotto con data */) => {
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
/* si esporta data perchè, essendo una proprietà aggiunta da me, non compare tra le props che fornisce gatsby  */
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
