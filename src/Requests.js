import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import "./Requests.css";

class Requests extends React.Component {
    constructor(props) {
        super(props);
    }

    RequestsScreenshot = () => {
        return (
            <Image src = {require('./requests-page.png')} className = "requests-image"/>
        );
    }

    RequestsDescription = () => {
        return (
            <div className = "requests-text">
                <h2>
                    Receive support from those who are willing to help.
                </h2>
                <h5> 
                    You're not alone. Submit requests through the app for PPE, food, and disinfectants.
                </h5>
            </div>
        );
    }

    render() {
        return (
            <Container className = "py-5">
                <Row>
                    <Col className = "text-align"> {this.RequestsDescription()} </Col>
                    <Col className = "image-align"> {this.RequestsScreenshot()} </Col>
                </Row>
            </Container>
        );
    }
}

export default Requests;
