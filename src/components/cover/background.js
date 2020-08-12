import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const StyledBackground = styled(BackgroundImage)`
    position: absolute;
    z-index: 0;
    height: 100vh;
    margin: auto;
`

const Background = ({children}) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "background-cover.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 3600) {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `)

    return (
        <StyledBackground fluid={data.placeholderImage.childImageSharp.fluid}>
            {children}
        </StyledBackground>
    )
}

export default Background