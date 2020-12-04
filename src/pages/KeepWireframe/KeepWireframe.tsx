import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./keepWireframe.css";

import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import InputsKeepWireframe from "../../Components/InputsKeepWireframe/InputsKeepWireframe";

type Props = {};

const KeepWireframe: React.FC<Props> = (props) => {
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

        <Row className="pt-2">
          <Col>
            <p className="csName">BioMorf</p>
          </Col>
        </Row>

        <Container className="pb-4">
          <InputsKeepWireframe></InputsKeepWireframe>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KeepWireframe;
