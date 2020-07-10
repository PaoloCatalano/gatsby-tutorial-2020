import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query PrimoQuery {
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

const Header = () => {
  const {
    site: {
        //using Alias, should specify here
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h2>title: {title}</h2>
      <h2>name: {name}</h2>
    </div>
  )
}

export default Header
