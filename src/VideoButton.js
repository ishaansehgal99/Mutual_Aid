import React from "react";
import { Button, Modal } from "react-bootstrap";
import YouTube from "react-youtube";

import "./styles/VideoButton.css";

class VideoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <Button variant="light" onClick={this.handleShow}>
          {" "}
          Watch a Demo{" "}
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <YouTube videoId="eBosNTyUF4I" className="center-items" />
        </Modal>
      </div>
    );
  }
}

export default VideoButton;
