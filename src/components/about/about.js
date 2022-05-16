import React from "react";
import styled from "styled-components";
import Skills from "./skills";

const StyledDiv = styled.div`
    width: 100%; 
    padding: 100px 10%;
    font-family: "Montserrat", sans-serif; 

    .main {
        font-weight: 600;
        font-size: 40px;
    }

    .sub {
        -webkit-user-select: none;       
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-weight: 400;
        font-size: 30px;
    }

    .edu {
        font-weight: 500;
    }

    .cert a{
        color: black;
        text-decoration: none !important;
        font-weight: 400;
        font-size: 30px;
        &:hover {
            font-weight: 500;
            transition: all 0.5s ease-in-out;
            text-decoration: none !important;

        }
    }

    @media only screen and (max-width: 1024px) {
        padding: 75px 7.5%;
        .main {
            font-size: 30px;
        }
        .sub {
            font-size: 20px;
        }
    }

    @media only screen and (max-width: 500px) {
        padding: 70px 5%;
        .main {
            font-size: 22.5px;
        }
        .sub {
            font-size: 15px;
        }
    }

`;

const About = () => {
    return(
        <div id="about">
            <StyledDiv>
                <p className="main">Hi, I'm Zayaan. I'm a fourth year computer science student at Carleton University 
                    looking for software engineer internships for Fall 2022.</p>
                <p className="sub" unselectable="on"> I am a full-stack developer with experience in developing microservices, 
                server-side applications, data warehousing applications, and React Web apps. 
                I like to learn new skills, continue challenging myself, and work on interesting projects in my spare time. 
                I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. 
                Feel free to get in touch by any means of communication.</p>
                <br/>
                <p className="sub edu">Bachelor Of Computer Science - Carleton University (B.C.S. Honours - May 2023) </p>
                <p className="cert"><a href="https://www.credly.com/badges/427eb2bf-c87b-4f6f-a03e-21de6db88e5b/public_url">AWS Certified Solutions Architect - Associate</a></p>
            </StyledDiv>
            <Skills/>
        </div>
    )
};

export default About;
