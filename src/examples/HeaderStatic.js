import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={data => (
      <pre>
        {
          /* data.site.info.description} oppure*/ JSON.stringify(
            data,
            null,
            4 /**come viene disposto il dato (valori da 0 (default se omesso) a 10) */
          )
        }
      </pre>
    )}
  ></StaticQuery>
)

export default ComponentName
