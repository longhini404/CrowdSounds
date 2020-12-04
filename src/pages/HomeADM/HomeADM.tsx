import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./homeADM.css";

import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchBarADM from "../../Components/SearchBarADM/SearchBarADM";
import CardHomeADM from "../../Components/CardHomeADM/CardHomeADM";
import CardArtistADM from "../../Components/CardArtistADM/CardArtistADM";
import CardCrowdfundingADM from "../../Components/CardCrowdfundingADM/CardCrowdfundingADM";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
type Props = {};

const HomeADM: React.FC<Props> = (props) => {
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
            <p className="csName">ADM</p>
          </Col>
        </Row>

        <Tabs className="justify-content-center" defaultActiveKey="Usuários">
          <Tab eventKey="Usuários" title="Usuários">
            <Container>
              <Col className="pt-2 pb-2">
                <SearchBarADM></SearchBarADM>
              </Col>
            </Container>

            <Container className="pb-4">
              <CardHomeADM></CardHomeADM>
            </Container>
          </Tab>

          <Tab eventKey="Artistas" title="Artistas">
            <Container>
              <Col className="pt-2 pb-2">
                <SearchBarADM></SearchBarADM>
              </Col>
            </Container>

            <Container className="pb-4">
              <CardArtistADM></CardArtistADM>
            </Container>
          </Tab>

          <Tab eventKey="Crowdfundings" title="Crowdfundings">
            <Container>
              <Col className="pt-2 pb-2">
                <SearchBarADM></SearchBarADM>
              </Col>
            </Container>

            <Container className="pb-4">
              <CardCrowdfundingADM></CardCrowdfundingADM>
            </Container>
          </Tab>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default HomeADM;
