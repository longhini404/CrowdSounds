import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./keepUser.css";

import Header from "../../Components/Header/Header";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import InputsKeepUser from "../../Components/InputsKeepUser/InputsKeepUser";
import { match } from "react-router-dom";
import { History } from "history";

type Props = {
  history: Pick<History, "push">;
  match: match<{ id: string }>;
};

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
            {/* <SearchBar></SearchBar> */}
          </Col>
        </Container>

        <Container>
          <InputsKeepUser
            history={props.history}
            match={props.match}
          ></InputsKeepUser>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KeepUser;
