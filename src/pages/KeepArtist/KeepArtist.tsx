import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./keepArtist.css";

import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import InputsKeepArtist from "../../Components/InputsKeepArtist/InputsKeepArtist";

type Props = {};

const KeepArtist: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>

        <Container>
          <Col className="pt-4">
            <SearchBar></SearchBar>
          </Col>
        </Container>

        <Row className="pt-4">
          <Col></Col>
        </Row>

        <Container>
          <InputsKeepArtist></InputsKeepArtist>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KeepArtist;
