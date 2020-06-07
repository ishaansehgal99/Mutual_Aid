import React from "react";

import { Image, Container, Row, Col } from "react-bootstrap";

import * as typeformEmbed from "@typeform/embed";
import Button from "react-bootstrap/Button";

import "./styles/Banner.css";

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

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

  ComputerImage = () => {
    return (
      <Image src={require("./assets/banner.png")} className="banner-image" />
    );
  };

  IntroductoryText = () => {
    return (
      <div className="banner-text">
        <h1> Mutual Aid for COVID-19 </h1>
        <h4 className="lighter-font top-margin">
          {" "}
          We are all in this together.{" "}
        </h4>
        <Button
          className="top-margin"
          size="lg"
          variant="light"
          onClick={this.MakeTfPopup}
        >
          {" "}
          Sign Up on Our Platform{" "}
        </Button>
      </div>
    );
  };

  render() {
    return (
      <Container className="p-3">
        <Row>
          <Col className="image-align"> {this.ComputerImage()} </Col>
          <Col className="text-align"> {this.IntroductoryText()} </Col>
        </Row>
      </Container>
    );
  }
}

export default Banner;
