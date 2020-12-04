import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./keepContact.css";

import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import InputsKeepContact from "../../Components/InputsKeepContact/InputsKeepContact";

type Props = {};

const KeepContact: React.FC<Props> = (props) => {
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
        <Container>
          <InputsKeepContact></InputsKeepContact>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KeepContact;
