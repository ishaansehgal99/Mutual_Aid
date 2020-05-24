import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import VideoButton from './VideoButton';

import "./Banner.css";

class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    ComputerImage = () => {
        return (
            <Image src = {require('./banner.png')} className = "banner-image"/>
        );
    }

    IntroductoryText = () => {
        return (
            <div className = "banner-text">
                <h3> Mutual Aid for COVID-19 </h3>
                <h5> We are all in this together. </h5>
                <VideoButton></VideoButton>
            </div>
        );
    }

    render() {
        return (
            <Container className = "p-3">
                <Row>
                    <Col className = "image-align"> {this.ComputerImage()} </Col>
                    <Col className = "text-align"> {this.IntroductoryText()} </Col>
                </Row>
            </Container>
        );
    }
}

export default Banner;
