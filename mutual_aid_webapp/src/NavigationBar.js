import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './NavigationBar.css';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    HomeButton = () => {
        return (
            <Nav
                className = "justify-content-left"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href = "#banner" className = "nav-text"> Mutual Aid </Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }

    ContentLinks = () => {
        return (
            <Nav className = "justify-content-end">
                <Nav.Item>
                    <Nav.Link href = "#contact" eventKey = "Contact" className = "nav-text"> Contact </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href = "#about" eventKey = "About" className = "nav-text"> About </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href = "#download" eventKey = "Download" className = "nav-text"> Download </Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <this.HomeButton></this.HomeButton>
                    </Col>
                    <Col>
                        <this.ContentLinks></this.ContentLinks>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NavigationBar;
