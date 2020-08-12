import React from "react"
import styled from 'styled-components'
import {Link} from "gatsby"

const StyledBar = styled.div`
    width: 300px;
    font-weight: 300;
    font-size: ${props => props.size};
    display: inline-grid;
    justify-content: space-between;
    grid-template-columns: auto auto auto auto;

    .links {
        text-decoration: none;
        color: ${props => props.color};
    }

    @media only screen and (max-width: 1024px), (max-height: 600px) {
        width: 240px;
        font-size: 55px;
    }

    @media only screen and (max-width: 500px), (max-height: 400px) {
        width: 150px;
        font-size: 35px;
    }
`;

const SocialBar = ({color, size}) => {
      return(
        <StyledBar color={color} size={size}>
            <Link href="https://github.com/zayaanmoez" class="links"><i class="fab fa-github-square" aria-hidden="true"/></Link>
            <Link href="https://www.linkedin.com/in/zayaan-shah-moez-250ab5189" class="links"><i class="fab fa-linkedin" aria-hidden="true"/></Link>
            <Link href="https://www.instagram.com/zayyan.shah" class="links"><i class="fab fa-instagram-square" aria-hidden="true"/></Link>
            <Link href="mailto:zayaanmoez@cmail.carleton.ca" class="links"><i class="fas fa-envelope-square" aria-hidden="true"/></Link>
        </StyledBar>
      )
}

export default SocialBar;