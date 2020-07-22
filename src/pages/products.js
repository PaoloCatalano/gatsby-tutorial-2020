import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(prod => {
          return (
            <article key={prod.id}>
              <Image fluid={prod.image.fluid} alt={prod.title}></Image>
              <h3>
                {prod.title}
                <span>${prod.price}</span>
              </h3>
              <Link to={`/products/${prod.slug}`}>mode details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        slug
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
