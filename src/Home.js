import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

import "./styles/Home.css";

class Home extends React.Component {
  HomeScreenshot = () => {
    return (
      <Image
        src={require("./assets/requests-page.png")}
        className="home-image"
      />
    );
  };

  HomeDescription = () => {
    return (
      <div className="home-text">
        <h2>Inform yourself about the ongoing needs of your community.</h2>
        <h4 className="lighter-font">
          Share your story and learn about the hardships of others.
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
            {this.HomeScreenshot()}{" "}
          </Col>
          <Col className="text-align"> {this.HomeDescription()} </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
