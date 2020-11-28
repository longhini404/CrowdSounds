import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./wireframe.css";

import ReactPlayer from "react-player";

class Wireframe extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center pt-2">
            <ReactPlayer url="https://www.youtube.com/watch?v=iMhzfVTcjlg" />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Wireframe;
