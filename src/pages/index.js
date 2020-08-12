import React from "react"
import Navigation from "../components/navigation/navigation.js"
import Layout from "../components/layout"
import Slider from "../components/slider"
import SEO from "../components/seo"
import About from "../components/about/about"
import Cover from "../components/cover/cover.js"
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import styled from "styled-components";

const Carousel = styled.div`
    overflow: hidden;
    width: 100vw;
    padding-left: 5vw;
    padding-right: 5vw;
    align-items: centre;
    background: black;
    position: relative;
    z-index: 0;
`;

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <Cover />
    <Navigation siteTitle={"zayaanm"}/>
    <ReactBootstrapStyle/>
    <About/>
    {/* <Carousel>
      <Slider/>
    </Carousel> */}
  </Layout>
  </>
)

export default IndexPage