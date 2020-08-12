import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
    width: 4rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
    z-index: 8;
    overflow: hidden;
    border: 1px solid ${props => props.color};
    transform: rotate(-45deg);

    div {
        transition: all 0.5s linear;
        margin: auto;

        &:nth-child(1) {
            width: 0; 
            height: 0; 
            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid transparent;
            border-bottom: 0.5rem solid ${props => props.color};
        }

        &:nth-child(2) {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            height: 0.4rem;

            #b1 {
                width: 0; 
                height: 0; 
                border-top: 0.2rem solid transparent;
                border-bottom: 0.2rem solid transparent;
                border-right: 0.2rem solid ${props => props.color};
            }

            #b2 {
                width: 2rem;
                height: 0.4rem;
                background-color: ${props => props.color};
            }

            #b3 {
                width: 0; 
                height: 0;
                border-top: 0.2rem solid transparent;
                border-bottom: 0.2rem solid transparent;
                border-left: 0.2rem solid ${props => props.color};
            }

        }

        &:nth-child(3) {
            width: 0; 
            height: 0;
            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid transparent;
            border-top: 0.5rem solid ${props => props.color};
        }
    }
`

const Logo = ({color}) => {

    return(
        <StyledLogo color={color}>
            <div/>
            <div>
                <div id="b1"/>
                <div id="b2"/>
                <div id="b3"/>
            </div>
            <div/>
        </StyledLogo>
    )
}

export default Logo