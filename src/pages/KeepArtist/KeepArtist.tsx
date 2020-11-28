import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./keepArtist.css";

import Header from "../../Components/Header/Header";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import InputsKeepArtist from "../../Components/InputsKeepArtist/InputsKeepArtist";
import { match } from "react-router-dom";
import { History } from "history";

type Props = {
  history: Pick<History, "push">;
  match: match<{ id: string }>;
};

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
            {/* <SearchBar></SearchBar> */}
          </Col>
        </Container>

        <Row className="pt-4">
          <Col></Col>
        </Row>

        <Container>
          <InputsKeepArtist
            history={props.history}
            match={props.match}
          ></InputsKeepArtist>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KeepArtist;
