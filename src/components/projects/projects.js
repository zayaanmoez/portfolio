import React, { useState } from 'react'
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import projectList from "../../data/projects.json"
import "../../styles/projects.scss"
import { Button} from "react-bootstrap"
import ProjectModal from './project-modal';

const StyledProjects = styled.div`
    width: 100%; 
    padding: 100px 0;
    font-family: "Montserrat", sans-serif;
    text-align: center;

`;

const StyledGallery = styled.div`
    margin-top: 50px;
    display: grid;
    width: 100%;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(3, 400px);
    grid-auto-rows: 300px;

    .ag-cell-focus,.ag-cell-no-focus{
        border:none !important;
    }
    .ag-cell:focus{
        border:none !important;
        outline: none;
    }

    @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, max-content));
    }

    @media only screen and (max-width: 500x) {
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
    }
`
         
const Projects = () => {

    const data = useStaticQuery(graphql`
        query {
            images: allFile(filter: {relativePath: {glob: "projects/*"}}) {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fluid(maxWidth: 1280) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }   
        }
    `)

    const [show, setShow] = useState(false);
    const [proj, setProj] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = (project) => {
        setShow(true);
        setProj(project)
    }


    return(
        <StyledProjects id="projects">
            <p className="title">Projects</p>
            <StyledGallery>
                {projectList.map((project, index) => {
                    const image = data.images.edges.find( n => {
                        return n.node.relativePath.includes(project.image);        
                    });
                    return(
                        <>
                        <div className="card ag-cell-focus">
                            <Img fluid={image.node.childImageSharp.fluid} style={{ minHeight: '300px' }}/>
                            <div className="card-display">
                                <div className="text">
                                    <p className="name">{project.name}</p>
                                    <p className="types">{project.skills.join(" / ")}</p>
                                    <Button variant="outline" onClick={() => handleShow(project)}>LEARN MORE</Button>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}
                <ProjectModal show={show} handleClose={handleClose} project={proj}/>
            </StyledGallery>
        </StyledProjects>
    )
};

export default Projects;