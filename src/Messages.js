import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import "./Messages.css";

class Messages extends React.Component {
    constructor(props) {
        super(props);
    }

    MessageScreenshot = () => {
        return (
            <Image src = {require('./messages-page.png')} className = "messages-image"/>
        );
    }

    MessageDescription = () => {
        return (
            <div className = "messages-text">
                <h2>
                    Engage with people in your community.
                </h2>
                <h4 className = "lighter-font"> 
                    Share your story and learn about the hardships of others.
                </h4>
            </div>
        );
    }

    render() {
        return (
            <Container className = "py-5">
                <Row>
                    <Col className = "image-align"> {this.MessageScreenshot()} </Col>
                    <Col className = "text-align"> {this.MessageDescription()} </Col>
                </Row>
            </Container>
        );
    }
}

export default Messages;
