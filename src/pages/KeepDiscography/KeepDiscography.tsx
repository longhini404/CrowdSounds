import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./keepDiscography.css";

import Header from "../../Components/Header/Header";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import InputsKeepDiscography from "../../Components/InputsKeepDiscography/InputsKeepDiscography";

import { History } from "history";

type Props = {
  history: Pick<History, "push">;
};

const KeepDiscography: React.FC<Props> = (props) => {
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
          <InputsKeepDiscography
            history={props.history}
          ></InputsKeepDiscography>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default KeepDiscography;
