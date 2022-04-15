import React from "react"
import styled from 'styled-components'

const StyledBar = styled.div`
    width: 300px;
    font-weight: 300;
    font-size: ${props => props.size};
    display: inline-grid;
    justify-content: space-between;
    grid-template-columns: auto auto auto auto;

    .link {
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
            <a href="https://github.com/zayaanmoez" className="link" aria-label="">
                <i className="fab fa-github-square" aria-hidden="true" aria-label="Github"/></a>
            <a href="https://www.linkedin.com/in/zayaan-shah-moez-250ab5189/" className="link" aria-label="">
                <i class="fab fa-linkedin" aria-hidden="true" aria-label="Linkedin"/></a>
            <a href="https://twitter.com/zayaanmoez" className="link" aria-label="">
                <i className="fab fa-twitter-square" aria-hidden="true" aria-label="Twitter"/></a>
            <a href="mailto:zayaanmoez@cmail.carleton.ca" className="link" aria-label=""> 
                <i className="fas fa-envelope-square" aria-hidden="true" aria-label="Mail"/></a>
        </StyledBar>
      )
}

export default SocialBar;