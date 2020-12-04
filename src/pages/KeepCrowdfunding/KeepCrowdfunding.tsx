import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./keepCrowdfunding.css";

import Header from "../../Components/Header/Header";
import InputsKeepCrowdfunding from "../../Components/InputsKeepCrowdfunding/InputsKeepCrowdfunding";

type Props = {};

const KeepCrowdfunding: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>
        <Row className="pt-2 pb-2">
          <Col>
            <p>Crowdfunding</p>
            <Container>
              <InputsKeepCrowdfunding></InputsKeepCrowdfunding>
            </Container>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default KeepCrowdfunding;
