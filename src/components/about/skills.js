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
        font-weight: 300;
        font-size: 25px;
    }

    @media only screen and (max-width: 1024px) {
        padding: 75px 7.5%;
        .type {
            font-size: 25px;
        }
        .data {
            font-size: 20px;
        }
    }

    @media only screen and (max-width: 500px) {
        padding: 70px 5%;
        .type {
            font-size: 20px;
        }
        .data {
            font-size: 15px;
        }
    }

`;

const StyledSet = styled.div`
    width: 100%;
    padding-top: 10px;
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border-style: dashed;
    border-width: 0 0 1px;
    border-color: rgba(245, 245, 245);

    .type {
        grid-column: 1 / 3;
        grid-row: 1;
    }

    .list-inline {
        list-style: none;
        padding: 0;
        grid-row: 2 / 4;
        grid-column: 2 / 5;
    }
    
    .list-inline > li {
        display: inline-flex;
    }

    .list-inline > li:not(:last-child)::after {
        content: "|";
        margin: 0 .5em;
    }

    @media only screen and (max-width: 1200px) {
        .list-inline {
            grid-column: 1 / 5;
        }

        .type {
            grid-column: 1 / 4;
        }
    }
`

const Skills = () => {
    return(
        <StyledTree>
            {skillList.map((set, index) => (
                <StyledSet key={index}>
                    <span className="type">{set.type}</span>
                    <ul className="list-inline">
                        {set.data.map((skill, index) => (
                            <li key={index} className="data">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </StyledSet>
            ))}
            
        </StyledTree>
    )
};

export default Skills;