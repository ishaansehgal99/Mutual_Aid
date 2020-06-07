import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./styles/Messages.css";

class Messages extends React.Component {
  MessageScreenshot = () => {
    return (
      <Image
        src={require("./assets/messages-page.png")}
        className="messages-image"
      />
    );
  };

  MessageDescription = () => {
    return (
      <div className="messages-text">
        <h2>Better understand the needs of your community.</h2>
        <h4 className="lighter-font">
          Transparent and open communication between those in need and those
          willing to help.
        </h4>
      </div>
    );
  };

  render() {
    return (
      <Container>
        <Row>
          <Col
            className="image-align"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {" "}
            {this.MessageScreenshot()}{" "}
          </Col>
          <Col className="text-align"> {this.MessageDescription()} </Col>
        </Row>
      </Container>
    );
  }
}

export default Messages;
