import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "../styles/global.scss"

const Container = styled.div`
    overflow: hidden;
`;

const Layout = ({ children }) => {

  return(
      <Container>
        {children}
      </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
