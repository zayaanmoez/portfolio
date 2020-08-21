import React from 'react'
import styled from "styled-components";
import { Button } from 'react-bootstrap';

const StyledContact = styled.div`
    width: 100%;
    padding-bottom: 100px;
    font-family: "Montserrat", sans-serif;
    background: linear-gradient(#030303 50%, #1C1E1C) 90%;;
    color: #e0e0e0;

    .spacer {
        /* width:100vw;
        height: 100px;
        margin-bottom: 50px;
        left: 0;
        background: linear-gradient(to right bottom, #eee 49%, #212121 50%); */
        margin-bottom: 50px;
        width: 0; 
        height: 0; 
        border-left: 50vw solid #030303;
        border-right: 50vw solid #030303;
        
        border-top: 100px solid #eee;
    }

    .title {
        text-align: center;
        font-size: 50px;
        font-weight: 600;
    }

    .container {
        padding: 0 20px;
        display: grid;
        grid-template-columns: minmax(auto, 700px);
        grid-template-rows: repeat(auto-fit, auto);
        grid-gap: 10px;
        align-content: space-between;
        justify-content: space-around;

        .highlight { 
            color: #E31B6D; 
            text-align: center; 
            padding-bottom: 20px;
        }

        .input {
            padding: 10px;
            background-color: #e0e0e0;
            color: #121212;
        }

        .text { min-height: 150px; }
    }

    .btn-outline {
        position: relative;
        float: right;
        margin-top: 20px;
        background-color: #e0e0e0;
        color: #121212 !important;
        border: 2px !important;
        border-color: #263238 !important;
        box-shadow: none !important;
        padding: 10px 20px !important;
        font-weight: 500 !important;
        &:hover {
            background-color: #E31B6D !important;
            color: white !important;
            cursor: pointer;
        } 
}

    
`
         
const Contact = () => {

    return(
        <StyledContact id="contact">
            <div className="spacer" />
            <p className="title">Contact</p>
            <div className="container">
                <form className="container" data-animation="pop-in" data-delay=".5s" id="contact-form">
                    <div className="highlight" data-animation="slide-in-right" data-delay=".5s">Have a question or want to work together?</div>
                    <input className="input" placeholder="Name" type="text" name="name" required />
                    <input className="input" placeholder="Enter email" type="email" name="email" required/>
                    <textarea className="input text" placeholder="Your Message" type="text" name="message"></textarea>
                    <div style={{ width: 'inherit'}}>
                        <Button variant="outline" type="submit"> Submit </Button>
                    </div>
                </form>
            </div>
        </StyledContact>
    )
};

export default Contact;