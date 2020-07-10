import React from "react"
import Layout from "../components/layout"
import stili from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={stili.page}>
        <h1>blooooog</h1>
        <p className={stili.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          unde, temporibus corrupti sit adipisci nihil libero mollitia quibusdam
          ad obcaecati qui odio commodi deleniti ducimus.
        </p>
      </div>
    </Layout>
  )
}

export default blog
