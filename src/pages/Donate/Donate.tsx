import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./donate.css";

import Header from "../../Components/Header/Header";
import ProfilePictureArtist from "../../Components/ProfilePictureArtist/ProfilePictureArtist";
import InputsDonate from "../../Components/InputsDonate/InputsDonate";

type Props = {};

const Donate: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>

        <Row className="pt-2">
          <Col>
            <ProfilePictureArtist></ProfilePictureArtist>
            <p>BioMorf</p>
          </Col>
        </Row>

        <Container>
          <InputsDonate />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Donate;
