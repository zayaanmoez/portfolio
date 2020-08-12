import React from "react"
import PropTypes from "prop-types"
import "../../styles/navigation.scss"
import Burger from "./burger"
import Logo from "../logo"
import { Link } from 'gatsby';
import Navbar from "react-bootstrap/Navbar"

const Navigation = ({ siteTitle }) => {

  return (
    <>
    <Navbar className="navbar" fixed="top">
        <div id="brandDiv">
          <span id="logo"> <Logo color={'#e0e0e0'}/> </span> 
          <Link to='/' id="brand">{siteTitle}</Link>
        </div>  
        <Navbar.Collapse className="burger justify-content-end"><Burger/></Navbar.Collapse>
    </Navbar>
    {/* <div className="navbar sticky-nav">

    </div> */}
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
