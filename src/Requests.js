import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./styles/Requests.css";

class Requests extends React.Component {
  RequestsScreenshot = () => {
    return (
      <Image
        src={require("./assets/requests-page.png")}
        className="requests-image"
      />
    );
  };

  RequestsDescription = () => {
    return (
      <div className="requests-text">
        <h2>Receive support from those who are willing to help.</h2>
        <h4 className="lighter-font">
          You're not alone. Submit requests through the app for PPE, food, and
          disinfectants.
        </h4>
      </div>
    );
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="text-align"> {this.RequestsDescription()} </Col>
          <Col
            className="image-align"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {" "}
            {this.RequestsScreenshot()}{" "}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Requests;
