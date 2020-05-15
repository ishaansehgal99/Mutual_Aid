import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import "./About.css";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    AboutTitle = () => {
        return (
            <h3 className = "about-text">
                We are volunteers supporting local community groups.
            </h3>
        );
    }

    ColumnOneText = () => {
        return (
            <div className = "about-text">
                <p> We are here to help you get through hard times. </p>
                <p> Mutual Aid is completely free to use, developed by students, supported by non-profits. </p>
                <p> Mutual Aid is completely free to use, developed by students, supported by non-profits. </p>
            </div>
        );
    }

    ColumnTwoText = () => {
        return (
            <div className = "about-text">
                <p> We are here to help you get through hard times. </p>
                <p> Mutual Aid is completely free to use, developed by students, supported by non-profits. </p>
            </div>
        );
    }

    render() {
        return (
            <Container className = "p-4">
                <Row className = "margin-top margin-bottom">
                    <Col className = "text-align"> {this.AboutTitle()} </Col>
                </Row>
                <Row className = "margin-top margin-bottom">
                    <Col className = "p-text"> {this.ColumnOneText()} </Col>
                    <Col className = "p-text"> {this.ColumnTwoText()} </Col>
                </Row>
            </Container>
        );
    }
}

export default About;
