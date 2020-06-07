import React from "react";

import { Image, Container, Row, Col } from "react-bootstrap";

import "./styles/Download.css";

class Download extends React.Component {
  DownloadText = () => {
    return <h3 className="download-text">Download the app</h3>;
  };

  AppStoreButton = () => {
    return (
      <Image
        src={require("./assets/app-store.png")}
        className="download-image"
      />
    );
  };

  GooglePlayButton = () => {
    return (
      <Image
        src={require("./assets/google-play.png")}
        className="download-image"
      />
    );
  };

  DownloadInfoText = () => {
    return (
      <p className="download-text bold-text">
        Our app is available on the leading platforms. Download now on iOS or
        Android.
      </p>
    );
  };

  render() {
    return (
      <Container>
        <Row className="margin-top margin-bottom">
          <Col className="text-align"> {this.DownloadText()} </Col>
        </Row>
        <Row md={4} className="margin-top margin-bottom text-align">
          <Col md="auto"> {this.GooglePlayButton()} </Col>
          <Col md="auto"> {this.AppStoreButton()} </Col>
        </Row>
        <Row className="margin-top margin-bottom">
          <Col className="download-info text-align">
            {" "}
            {this.DownloadInfoText()}{" "}
          </Col>
        </Row>
        <h6 className="text-align download-text">
          {" "}
          Copyright © 2020 Mutual Aid Inc. All rights reserved.{" "}
        </h6>
      </Container>
    );
  }
}

export default Download;
