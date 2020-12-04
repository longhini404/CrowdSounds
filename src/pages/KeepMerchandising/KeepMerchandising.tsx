import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./keepMerchandising.css";

import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import InputsKeepMerchandising from "../../Components/InputsKeepMerchandising/InputsKeepMerchandising";

type Props = {};

const KeepMerchandising: React.FC<Props> = (props) => {
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
          <InputsKeepMerchandising></InputsKeepMerchandising>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KeepMerchandising;
