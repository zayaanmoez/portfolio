import React from "react"
import Layout from "../components/layout.js"
import Slider from "../components/slider.js"
import SEO from "../components/seo.js"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider/>
  </Layout>
)

export default IndexPage