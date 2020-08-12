import React from "react";
import styled from "styled-components";
import skillList from "../../data/skill.json"

const StyledTree = styled.div`
    background-image: linear-gradient(#030303, #1C1E1C);
    width: 100%; 
    padding: 100px 10%;
    font-family: "Montserrat", sans-serif; 
    color: white;

    .type {
        font-weight: 500;
        font-size: 30px;
    }

    .data {
        font-weight: 400;
        font-size: 20px;
    }

    @media only screen and (max-width: 1024px) {
        padding: 75px 7.5%;
        .type {
            font-size: 30px;
        }
        .data {
            font-size: 20px;
        }
    }

    @media only screen and (max-width: 500px) {
        padding: 70px 5%;
        .type {
            font-size: 22.5px;
        }
        .data {
            font-size: 15px;
        }
    }

`;

const StyledSet = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 3fr;

    .type {
        grid-column-start: 0;
    }
`

console.log(skillList)

const Skills = () => {
    return(
        <StyledTree>
            {skillList.map((set, index) => (
                <StyledSet key={index}>
                    <span class="type">{set.type}</span>
                </StyledSet>
            ))}
            
        </StyledTree>
    )
};

export default Skills;