import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import "./Intro.css";

class Intro extends React.Component {
    constructor(props) {
        super(props);
    }

    ComputerImage = () => {
        return (
            <Image src = {require('./walking.png')} className = "intro-image"/>
        );
    }

    IntroductoryText = () => {
        return (
            <div className = "intro-text">
                <h3 className = "bold-font"> We are here to help you get through hard times. </h3>
                <h5 className = "xlarge-font"> Mutual Aid is completely free to use, developed by students, supported by non-profits. </h5>
            </div>
        );
    }

    render() {
        return (
            <Container className = "p-3">
                <Row>
                    <Col className = "text-align"> {this.IntroductoryText()} </Col>
                    <Col className = "image-align"> {this.ComputerImage()} </Col>
                </Row>
            </Container>
        );
    }
}

export default Intro;
