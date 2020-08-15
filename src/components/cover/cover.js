import React from "react"
import styled from 'styled-components'
import Background from './background'
import {useSpring, animated} from 'react-spring'
import SocialBar from '../social.js'

const StyledCover = styled(animated.div)`
    position: absolute;
    width: 100%;
    padding-top: 60px;
    top: 50%;
    transform: translateY(-50%);
    color: #212121;
    z-index: 1;
    align-items: center;
    text-align: center;
    font-family: 'Montserrat', sans-serif;

    #t1 {
        font-size: 70px;
        font-weight: 400;
    }

    #t2 {
        font-size: 60px;
        font-weight: 300;
    }

    @media only screen and (max-width: 1024px), (max-height: 600px) {
        #t1 {
            font-size: 55px;
        }
        #t2 {
            font-size: 45px;
        }
    }

    @media only screen and (max-width: 500px), (max-height: 400px) {
        #t1 {
            font-size: 35px;
        }
        #t2 {
            font-size: 25px;
        }
    }
`


const Cover = () => {
    
    const props = useSpring({to: {opacity: 1, marginTop: 0}, 
        from: {opacity: 0, marginTop: -500},
        config: { mass: 5, tension: 180, friction: 12},
        delay: 500})

    return (
        <div id="home">
            <Background/>
            <StyledCover style={props}>
                <p id="t1">ZAYAAN MOEZ</p>
                <p id="t2">Software Developer</p>
                <SocialBar color="#212121" size="70px"/>
            </StyledCover>
        </div>
    )

}

export default Cover
