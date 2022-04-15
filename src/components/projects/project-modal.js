import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../../styles/project-modal.scss"
import { Button, Modal } from "react-bootstrap"
        
const ProjectModal = (props) => {

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

    const image = data.images.edges.find( n => {
        return n.node.relativePath.includes(props.project.image);        
    });

    var img;
    if (image) {
        img = <Img fluid={image.node.childImageSharp.fluid}  style={{ maxHeight: '300px' }}/>;
    } else {
        img = <br/>;
    }


    return(
        <Modal show={props.show} onHide={props.handleClose} dialogClassName={"custom-modal-style"}
            size="lg">
            <div className="layout">
                { img }
                <div className="body-modal">
                    <div className="head">
                        <p style={{ fontSize: '30px', fontWeight: '500', lineHeight: '30px'}}>{props.project.name}</p>
                        <p style={{ fontSize: '20px', fontWeight: '400', lineHeight: '20px'}}>{props.project.type}</p>
                    </div>
                    <div className="body">
                        <p>{props.project.description}</p>
                    </div>
                    <div className="footer">
                        <Button variant="outline" href={props.project.code}>Source</Button>
                        {props.project.link ? 
                            <Button variant="outline" href={props.project.link}>Demo</Button>
                        : <></>}
                        <i class="fas fa-times closeButton" aria-hidden="true" aria-label="close" onClick={props.handleClose}></i>
                    </div>
                </div>
            </div>
        </Modal>
    )
};

export default ProjectModal;