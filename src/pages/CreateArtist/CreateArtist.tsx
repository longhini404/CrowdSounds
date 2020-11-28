import React, { useEffect, useState } from "react";
import { Row, Col, Container, Nav } from "react-bootstrap";
import "./createArtist.css";

import Header from "../../Components/Header/Header";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import InputsCreateArtist from "../../Components/InputsCreateArtist/InputsCreateArtist";

import { History } from "history";

type Props = {
  history: Pick<History, "push">;
};

const CreateArtist: React.FC<Props> = (props) => {
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

        <Row style={{ padding: "2rem" }}>
          <Col>
            <p className="csFontSize">Cadastrar Artista</p>
          </Col>
        </Row>

        <Container>
          <InputsCreateArtist history={props.history}></InputsCreateArtist>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateArtist;
