import React, { useContext } from 'react'
import styled from "styled-components";
import experienceList from "../data/experience.json"
import { Accordion, useAccordionToggle, AccordionContext, Button } from 'react-bootstrap';

const StyledExperience = styled.div`
    width: 100%;
    padding-bottom: 100px;
    font-family: "Montserrat", sans-serif;
    background-color: #eee;
    color: #212121;

    .spacer {
        width:100vw;
        height: 100px;
        margin-bottom: 50px;
        left: 0;
        background: linear-gradient(to right bottom, #212121 49%, #eee 50%);

    }

    .title {
        text-align: center;
        font-size: 50px;
        font-weight: 600;
    }

    .btn-outline {
        .toggle:focus { outline: none !important; }
        &:hover {
            cursor: pointer;
        } 
    }

    .main {
        outline: none;
        margin-top: 50px;
        padding: 0 100px;
        display: grid;
        grid-template-columns: minmax(auto, 1000px);
        grid-template-rows: repeat(auto-fit, auto);
        align-content: space-between;
        justify-content: space-around;
        grid-gap: 20px;

        .card {
            transition: all 5s ease !important;
            border-radius: 10px;
            padding: 20px 40px;
            background-color: #212121;
            color: #e0e0e0;

        }

        @media only screen and (max-width: 1200px) {
            padding: 0 30px;
        }

    }
`



function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const collapse = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <Button 
        variant="btn-outline" 
        onClick={collapse}
        style={{ display: isCurrentEventKey ? 'none' : 'block', textAlign: 'right' }}
      >
        {children}
      </Button>
    );
  }

         
const Experience = () => {
    return(
        <StyledExperience id="experience">
            <div class="spacer"></div>
            <p className="title">Experience</p>
            <Accordion defaultActiveKey="0">
                <div className="main">
                    {experienceList.map((experience, index) => {
                        return(
                            <>
                            <div className="card">
                                <p className="name">{experience.name}</p>
                                <p className="position">{experience.position}</p>
                                <p className="dates" style={{ lineHeight: '0px' }}>{experience.dates}</p>
                                <ContextAwareToggle eventKey={index + 1}>
                                    <i class="fas fa-arrow-alt-circle-down toggle" 
                                        style={{ fontSize: '40px', color: '#e0e0e0', left: '10%' }}></i>
                                </ContextAwareToggle>
                                <Accordion.Collapse eventKey={index + 1} style={{ transition: 'height 1s ease' }}>
                                    <div>
                                        <hr/>
                                        <p className="description">{experience.description}</p>
                                        <p className="skills">{experience.skills.join(" / ")}</p>
                                    </div>
                                </Accordion.Collapse>
                            </div>
                            </>
                        )
                    })}
                </div>
            </Accordion>    
        </StyledExperience>
    )
};

export default Experience;