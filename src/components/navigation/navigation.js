import React from "react"
import PropTypes from "prop-types"
import "../../styles/navigation.scss"
import Burger from "./burger.js"
import Logo from "../logo.js"
import { Link } from 'gatsby';
import Navbar from "react-bootstrap/Navbar"

const Navigation = ({ siteTitle }) => {

  return (
    <>
      <Navbar className="navbar" fixed="top">
          <div id="brandDiv">
            <Link to='/'><span id="logo"> <Logo color={'#e0e0e0'}/> </span></Link>
            <Link to='/' id="brand">{siteTitle}</Link>
          </div>  
          <Navbar.Collapse className="burger justify-content-end"><Burger/></Navbar.Collapse>
      </Navbar>
    </>
  )

}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
