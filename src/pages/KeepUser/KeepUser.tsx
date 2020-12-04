import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./keepUser.css";

import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import InputsKeepUser from "../../Components/InputsKeepUser/InputsKeepUser";

type Props = {};

const KeepUser: React.FC<Props> = (props) => {
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
          <InputsKeepUser></InputsKeepUser>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KeepUser;
