import React from "react"
import Navigation from "../components/navigation/navigation.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Styled404 = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(255, 255, 255);
  height: 100vh;
  width: 100vw;

  .message {
    margin-top: 10%;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    padding: 0 10%;

    @media only screen and (max-width: 1024px) {
        .message {
            font-size: 20px;
        }
    }

    @media only screen and (max-width: 500px) {
        .message {
            font-size: 10px;
        }
    }
  }
`

const NotFoundPage = () => (
  <Styled404>
    <Layout>
      <SEO title="404: Not found" />
      <Navigation siteTitle={"zayaanm"}/>
      <div className="message">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  </Styled404>
)

export default NotFoundPage
