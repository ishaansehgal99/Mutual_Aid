import React from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import * as typeformEmbed from "@typeform/embed";
import VideoButton from "./VideoButton";

import "./styles/NavigationBar.css";

class NavigationBar extends React.Component {
  MakeTfPopup = () => {
    const reference = typeformEmbed.makePopup(
      "https://kmurthy3.typeform.com/to/ma5svB",
      {
        mode: "popup",
        autoClose: 3000,
        hideHeaders: false,
        hideFooters: false,
        onSubmit: function () {
          console.log("Typeform successfully submitted");
        },
      }
    );
    reference.open();
  };

  HomeButton = () => {
    return (
      <Nav
        className="justify-content-left"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="#banner" className="nav-text">
            {" "}
            Mutual Aid{" "}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  };

  ContentLinks = () => {
    return (
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="#about" eventKey="About" className="nav-text">
            {" "}
            About{" "}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#download" eventKey="Download" className="nav-text">
            {" "}
            Download{" "}
          </Nav.Link>
        </Nav.Item>
        <VideoButton></VideoButton>
      </Nav>
    );
  };

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
