import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./keepContact.css";

import Header from "../../Components/Header/Header";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import InputsKeepContact from "../../Components/InputsKeepContact/InputsKeepContact";
import { match } from "react-router-dom";
import { History } from "history";

type Props = {
  history: Pick<History, "push">;
  match: match<{ id: string }>;
};

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
            {/* <SearchBar></SearchBar> */}
          </Col>
        </Container>
        <Container>
          <InputsKeepContact
            match={props.match}
            history={props.history}
          ></InputsKeepContact>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KeepContact;
