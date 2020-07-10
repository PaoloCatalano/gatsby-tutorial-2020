import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/img4.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "img1.jpg" }) {
      childImageSharp {
        fixed(width: 500, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "img4.jpg" }) {
      childImageSharp {
        # maxWidth: controlla la grandezza delle immagini create per adattarle a varie risoluzioni (il valore è una sorta di grandezza media di un range di immagini uguali con diverse risoluzioni)
        fluid(maxWidth:1500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-images">
        <h3>basic image</h3>
        <img src={img} width="100%" alt=".."></img>
      </article>
      <article className="single-images">
        <h3>basic image/BLUR </h3>
        <Image fixed={data.fixed.childImageSharp.fixed} alt=".." />
      </article>
      <article className="single-images">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} alt=".." />
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid} alt=".." />
        </div>
      </article>
    </section>
  )
}

export default Images
