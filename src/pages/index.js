import React from "react"
import Navigation from "../components/navigation/navigation.js"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import About from "../components/about/about.js"
import Cover from "../components/cover/cover.js"
import Projects from "../components/projects/projects.js"
import Experience from "../components/experience.js"
import Contact from "../components/contact.js"
import Footer from "../components/footer.js"
import "../styles/global.scss"

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <Cover />
    <Navigation siteTitle={"zayaanm"}/>
    <About/>
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>
  </Layout>
  </>
)

export default IndexPage