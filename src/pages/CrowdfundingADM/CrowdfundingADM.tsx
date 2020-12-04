import React from "react";
import { Row, Col, Container, Nav, Button } from "react-bootstrap";
import "./crowdfundingADM.css";

import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ProfilePictureUser from "../../Components/ProfilePictureUser/ProfilePictureUser";
import SearchBarADM from "../../Components/SearchBarADM/SearchBarADM";
import CardCrowdfundingADM from "../../Components/CardCrowdfundingADM/CardCrowdfundingADM";

import { FaPencilAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

type Props = {};

const CrowdfundingADM: React.FC<Props> = (props) => {
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
            <ProfilePictureUser></ProfilePictureUser>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <Link to="KeepUser">
              <FaPencilAlt className="text-white" />
            </Link>
          </Col>
        </Row>

        <Row className="pt-2">
          <Col>
            <p className="csName">Guilherme Longhini</p>
          </Col>
        </Row>

        <Col className="pt-4 pb-4">
          <Nav className="csMenu justify-content-center">
            <Nav.Item>
              <Nav.Link className="csMenuLink" href="/HomeADM">
                Usuários
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="csMenuLink" href="/ArtistADM">
                Artistas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="csMenuLinkActive" href="/CrowdfundingADM">
                Crowdfundings
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Container>
          <Col className="pt-2 pb-2">
            <SearchBarADM></SearchBarADM>
          </Col>
        </Container>

        <Container>
          <Row>
            <Col>
              <Button
                variant="btn-block"
                className="csButton"
                size="lg"
                block
                type="submit"
              >
                Pendentes
              </Button>
            </Col>
            <Col>
              <Button
                variant="btn-block"
                className="csButton"
                size="lg"
                block
                type="submit"
              >
                Ativos
              </Button>
            </Col>
            <Col>
              <Button
                variant="btn-block"
                className="csButton"
                size="lg"
                block
                type="submit"
              >
                Bloqueados
              </Button>
            </Col>
            <Col>
              <Button
                variant="btn-block"
                className="csButton"
                size="lg"
                block
                type="submit"
              >
                Finalizados
              </Button>
            </Col>
          </Row>
        </Container>

        <Container className="pb-4">
          <CardCrowdfundingADM />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CrowdfundingADM;
