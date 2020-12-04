import React from "react";
import { Row, Col, Container, Nav } from "react-bootstrap";
import "./artistADM.css";

import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ProfilePictureUser from "../../Components/ProfilePictureUser/ProfilePictureUser";
import SearchBarADM from "../../Components/SearchBarADM/SearchBarADM";
import CardArtistADM from "../../Components/CardArtistADM/CardArtistADM";

import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {};

const ArtistADM: React.FC<Props> = (props) => {
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
              <Nav.Link className="csMenuLinkActive" href="/ArtistADM">
                Artistas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="csMenuLink" href="/CrowdfundingADM">
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

        <Container className="pb-4">
          <CardArtistADM />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ArtistADM;
