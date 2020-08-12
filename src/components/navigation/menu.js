import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import "../../styles/menu.scss"

const StyledMenu = styled.div`
  height: 100%;
  width: ${({open}) => open ? '100%' : '0%'};
  opacity: ${({open}) => open ? 1 : 0};
  position: fixed;
  z-index: 6;
  right: 0;
  top: 0;
  background-color: rgba(0,0,0, 0.95);
  overflow-x: hidden;
  transition: 1s;
`

const Menu = (props) => {

  const menuItems = ['HOME', 'ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT']

  return (
    
    <StyledMenu className="overlay" open={props.open}>

      <div className="overlay-content">
        {menuItems.map((item, index) => {
          return(
            <div onClick={props.handler}> 
              <Link key={index} href={'#'+item.toLowerCase()} className="links">{item}</Link>
            </div>
          )
        })}
      </div>

    </StyledMenu>
  )

}

export default Menu
